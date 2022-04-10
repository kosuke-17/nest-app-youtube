import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return '全ての先生情報';
  }

  @Get(':teacherId')
  getTeacherByID() {
    return;
  }

  @Get(':teacherId/students')
  getStudents() {
    return;
  }

  @Put(':teacherId/students/:studentId')
  updateStudentTeacher() {
    return;
  }
}
