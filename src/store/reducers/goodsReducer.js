import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  isLoaded: false,
  error: null,
  goods: [],
  goodItem: {},
  categories: []
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOODS_REQUEST:
      return {
        ...state,
        loading: true,
        isLoaded: false,
      };
    case actionTypes.GOODS_SUCCESS:
      return {
        ...state,
        loading: false,
        goods: [
            ...action.data
        ]
      };
    case actionTypes.GOODS_FAILURE:
      return {
        ...state,
        loading: false,
        goods: [],
        error: action.error
      };
    case actionTypes.GOOD_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        goodItem: {...action.data}
      };
    case actionTypes.CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        isLoaded: false
      };
    case actionTypes.CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, {...action.data}],
        isLoaded: true
      };
    case actionTypes.CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        categories: [],
        error: {...action.error}
      };
    default:
      return state;
  }

};

export default goodsReducer;