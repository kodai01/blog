import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface BlogState {
  isModalOpen: boolean;
}

const initialState: BlogState = {
  isModalOpen: false,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { toggleModal } = blogSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectModal = (state: RootState): BlogState['isModalOpen'] =>
  state.blog.isModalOpen;

export default blogSlice.reducer;
