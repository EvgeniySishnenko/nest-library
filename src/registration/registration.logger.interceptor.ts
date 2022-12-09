import {
  CallHandler,
  Injectable,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { response } from 'express';
@Injectable()
export class RegistrationLoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        return response.json({ status: 'success', data: data });
      }),
      catchError((err) => {
        return throwError({ status: 'fail', data: err });
      }),
    );
  }
}
