import {
  REQUEST_TABLE_DATA,
  TABLE_DATA_SUCCESS,
  TABLE_DATA_FAILURE,
} from "../constant/constant";

const initialState = {
  loading: false,
  data: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TABLE_DATA: {
      return {
        ...state,
        loading: true,
      };
    }
    case TABLE_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case TABLE_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default tableReducer;
