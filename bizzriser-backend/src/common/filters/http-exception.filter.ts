import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        // Log the error detailedly to console for Render logs
        console.error(`[Exception] ${new Date().toISOString()}`);
        console.error(`Method: ${request.method} URL: ${request.url}`);
        console.error(`Body: ${JSON.stringify(request.body)}`);
        console.error(`Error:`, exception);

        const message = exception instanceof HttpException
            ? exception.getResponse()
            : 'Internal server error';

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: typeof message === 'object' ? (message as any).message || message : message,
        });
    }
}
