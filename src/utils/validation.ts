import { ZodError, type AnyZodObject } from "zod";

interface Response {
  zSuccess: boolean;
  zMessage: string[];
  parse: any;
}

export const validation = <T>(schema: AnyZodObject, body: T): Response => {
  try {
    const parse = schema.parse(body);
    return { zSuccess: true, zMessage: [], parse };
  } catch (err) {
    let msg: string[] = [];
    if (err instanceof ZodError) {
      msg = err.issues.map((error) => {
        return error.message;
      });
    }
    return {
      zSuccess: false,
      parse: null,
      zMessage: msg,
    };
  }
};
