import { Controller, Get, Param, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return `先生に紐づく全ての生徒情報: ${teacherId} `;
  }

  @Put(':studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `生徒を持つ先生を更新した: teacherId:${teacherId}, studentId:${studentId}`;
  }
}
