import { FETCH_OFFERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OFFERS:
      return { ...action.payload };
    default:
      return state;
  }
};
