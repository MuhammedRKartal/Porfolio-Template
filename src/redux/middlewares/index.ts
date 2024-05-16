import type { Middleware } from "@reduxjs/toolkit";

import { api } from "../../data/client/api";

export const rtkQueryResponseHandler: Middleware = () => next => action => {
  return next(action);
};

export const rtkQueryErrorHandler: Middleware = () => next => async (action: any) => {
  return next(action);
};
const middlewares = [api.middleware, rtkQueryResponseHandler, rtkQueryErrorHandler];

export default middlewares;
