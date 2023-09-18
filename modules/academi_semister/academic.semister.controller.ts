import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { createAcademicSemesterService } from './academic.semester.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const semesterData = req.body;
    const result = await createAcademicSemesterService(semesterData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'user data crate successfully!!',
      result: result,
    });
  },
);

export default {
  createAcademicSemester,
};
