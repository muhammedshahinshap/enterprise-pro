import { NextFunction, Request, Response } from "express";
export default (dependancies: any) => {
  const {
    useCases: { updateTaskUseCase },
  } = dependancies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const update = await updateTaskUseCase(dependancies);
      const response = await update(req.body);
      if (response instanceof Error) throw new Error(response.toString());
      return res.status(200).json({
        messege: "Successfully Completed",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  };
};
