import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return '全ての先生情報';
  }

  @Get(':teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return;
  }
}
