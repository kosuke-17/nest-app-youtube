import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { validStudentMiddleware } from 'src/common/middleware/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule implements NestModule {
  // ミドルウェアを用いて生徒が存在するか確認
  configure(consumer: MiddlewareConsumer) {
    // HTTPメソッドがGETの時
    consumer.apply(validStudentMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.GET,
    });
    // HTTPメソッドがGETの時
    consumer.apply(validStudentMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.PUT,
    });
  }
}
