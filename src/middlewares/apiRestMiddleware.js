import * as AT from "../action-types";

function executeAsyncAction({ dispatch }, { payload }) {
  dispatch(payload.type.PENDING);
}

export const apiMiddleware = store => next => action => {
  if (action.type !== AT.API_REQ) return next(action);

  executeAsyncAction(store, action);
};
