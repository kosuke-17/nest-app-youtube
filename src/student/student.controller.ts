import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return '全ての生徒情報';
  }
  @Get(':studentId')
  getStudentByID() {
    return '特定の生徒情報';
  }

  @Post()
  createStudent() {
    return '生徒情報の作成';
  }
  @Put(':studentId')
  updateStudent() {
    return '生徒情報の更新';
  }
}
