import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  UpdatesStudentDto,
  StudentResponseDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return ['全ての生徒情報'];
  }
  @Get(':studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `特定の生徒情報: ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return `生徒情報の作成: ${JSON.stringify(body)}`;
  }
  @Put(':studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdatesStudentDto,
  ): StudentResponseDto {
    return `生徒情報の更新: ${studentId}, body:${JSON.stringify(body)}`;
  }
}
