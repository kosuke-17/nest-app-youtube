import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return '先生に紐づく全ての生徒情報';
  }

  @Put(':studentId')
  updateStudentTeacher() {
    return '生徒を持つ先生を更新した';
  }
}
