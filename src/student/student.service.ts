import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }
  getStudentById(studentId: string) {
    return this.students.find((student: FindStudentResponseDto) => {
      return student.id === studentId;
    });
  }
  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updateStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id == studentId) {
        updateStudent = {
          id: studentId,
          ...payload,
        };
        return updateStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updateStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }
  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updateStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id == studentId) {
        updateStudent = {
          ...student,
          teacher: teacherId,
        };
        return updateStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updateStudent;
  }
}
