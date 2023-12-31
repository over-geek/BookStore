const CHECK_STATUS = 'bookstore/CHECK_STATUS';

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const initialState = {
  categories: 'Under construction',
};

const categoriesSlice = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_STATUS:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default categoriesSlice;
