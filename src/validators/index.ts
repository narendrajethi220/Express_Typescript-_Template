import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.safeParseAsync(req.body);
      console.log("Request body is valid");
      next();
    } catch (err) {
      return res.status(400).json({
        message: "Invalid request body",
        success: false,
        error: err,
      });
    }
  };
};

export const validateQueryParams = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.safeParseAsync(req.query);
      console.log("Query Params are Valid");
      next();
    } catch (err) {
      return res.status(400).json({
        message: "Invalid Query Params",
        success: false,
        error: err,
      });
    }
  };
};
