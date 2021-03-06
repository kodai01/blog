import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { BlogState } from '../../type';
const initialState: BlogState = {
  article: [
    { id: 0, title: 'tokyo', content: 'nippon', time: '2/20 10:00 投稿' },
    { id: 1, title: 'america', content: 'us', time: '2/20 11:00 投稿' },
    { id: 2, title: 'english', content: 'igirisu', time: '2/20 12:00 投稿' },
  ],
  count: 3,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    changeArticle: (state, action) => {
      state.count++;
      const date = new Date();
      const currentDate =
        date.getMonth() +
        1 +
        '/' +
        date.getDate() +
        ' ' +
        ('00' + date.getHours()).slice(-2) +
        ':' +
        ('00' + date.getMinutes()).slice(-2) +
        ' 投稿';
      const newArticle = {
        id: state.count,
        title: action.payload['title'],
        content: action.payload['content'],
        // title: action.payload[0],
        // content: action.payload[1],
        time: currentDate,
      };
      state.article.push(newArticle);
    },
    deleteArticle: (state, action) => {
      console.log(action);
      //指定したarticle以外で新しくstate.tasksの配列を作成し直している
      state.article = state.article.filter((a) => a.id !== action.payload);
    },
  },
});

export const { changeArticle, deleteArticle } = blogSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectArticle = (state: RootState): BlogState['article'] =>
  state.blog.article;

export const selectCount = (state: RootState): BlogState['count'] =>
  state.blog.count;

export default blogSlice.reducer;
