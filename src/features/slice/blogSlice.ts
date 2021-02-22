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
  count: number;
  alert: { isError: boolean; inputError: string; textareaError: string };
}

const initialState: BlogState = {
  isModalOpen: false,
  article: [
    { id: 0, title: 'tokyo', content: 'nippon', time: '2/20 10:00 投稿' },
    { id: 1, title: 'america', content: 'us', time: '2/20 11:00 投稿' },
    { id: 2, title: 'english', content: 'igirisu', time: '2/20 12:00 投稿' },
  ],
  newModalValue: {
    title: '',
    content: '',
  },
  count: 3,
  alert: {
    isError: true,
    inputError: '初期値',
    textareaError: '初期値',
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
      switch (true) {
        case state.newModalValue.title.length > 40:
          state.alert.inputError = 'タイトルは40文字以内で入力してください';
          state.alert.isError = true;
          break;
        case state.newModalValue.title.length <= 0:
          state.alert.inputError = 'タイトルを入力してください';
          state.alert.isError = true;
          break;
        default:
          state.alert.inputError = '';
          if (state.alert.textareaError === '') {
            state.alert.isError = false;
          }
      }
    },
    reflectTextareaValue: (state, action) => {
      state.newModalValue.content = action.payload;
      switch (true) {
        case state.newModalValue.content.length > 100:
          state.alert.textareaError = '本文は100文字以内で入力してください';
          state.alert.isError = true;
          break;
        case state.newModalValue.content.length <= 0:
          state.alert.textareaError = '本文を入力してください';
          state.alert.isError = true;
          break;
        default:
          state.alert.textareaError = '';
          if (state.alert.inputError === '') {
            state.alert.isError = false;
          }
      }
    },
    changeArticle: (state, action) => {
      console.log('最初です', state.count);
      state.count++;
      console.log('真ん中です', state.count);
      state.article = action.payload;
    },
    toggleAlert: (state, action) => {
      state.alert.isError = action.payload;
    },
    toggleInputAlert: (state, action) => {
      state.alert.inputError = action.payload;
    },
    toggleTextareaAlert: (state, action) => {
      state.alert.textareaError = action.payload;
    },
  },
});

export const {
  toggleModal,
  reflectInputValue,
  reflectTextareaValue,
  changeArticle,
  toggleAlert,
  toggleInputAlert,
  toggleTextareaAlert,
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

export const selectCount = (state: RootState): BlogState['count'] =>
  state.blog.count;

export const selectAlert = (state: RootState): BlogState['alert'] =>
  state.blog.alert;

export default blogSlice.reducer;
