import { z } from 'zod';

const departmentValidate = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    academicFaculty: z.string({
      required_error: 'academicFaculty is required',
    }),
  }),
});

export default {
  departmentValidate,
};
