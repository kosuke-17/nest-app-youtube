import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  UpdatesStudentDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }
  @Get(':studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `特定の生徒情報: ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return;
  }
  @Put(':studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdatesStudentDto,
  ): StudentResponseDto {
    return;
  }
}
