import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface BlogState {
  isModalOpen: boolean;
  article: {
    id: number;
    title: string;
    content: string;
    time: string;
  }[];
  newModalValue: {
    title: string;
    content: string;
  };
}

const initialState: BlogState = {
  isModalOpen: false,
  article: [
    { id: 0, title: 'tokyo', content: 'nippon', time: '00:00' },
    { id: 1, title: 'america', content: 'us', time: '00:01' },
    { id: 2, title: 'english', content: 'igirisu', time: '00:02' },
  ],
  newModalValue: {
    title: '',
    content: '',
  },
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
    reflectInputValue: (state, action) => {
      state.newModalValue.title = action.payload;
    },
    reflectTextareaValue: (state, action) => {
      state.newModalValue.content = action.payload;
    },
    changeArticle: (state, action) => {
      state.article = action.payload;
    },
  },
});

export const {
  toggleModal,
  reflectInputValue,
  reflectTextareaValue,
  changeArticle,
} = blogSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectModal = (state: RootState): BlogState['isModalOpen'] =>
  state.blog.isModalOpen;

export const selectTextFieldValue = (
  state: RootState
): BlogState['newModalValue'] => state.blog.newModalValue;

export const selectArticle = (state: RootState): BlogState['article'] =>
  state.blog.article;

export default blogSlice.reducer;
