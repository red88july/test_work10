import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {deleteOneNews, getAllNews} from './newsThunks.ts';
import {GetNews} from '../../types';
import {RootState} from '../../app/store.ts';

interface NewsState {
  news: GetNews[],
  isGetNewsLoading: boolean,
  deleteOneNews:boolean,
}

const initialState: NewsState = {
  news: [],
  isGetNewsLoading: false,
  deleteOneNews: false,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllNews.pending, (state) => {
      state.isGetNewsLoading = true;
    }).addCase(getAllNews.fulfilled, (state, {payload: news}: PayloadAction<GetNews[]>) => {
      state.isGetNewsLoading = false;
      state.news = news;
    }).addCase(getAllNews.rejected, (state) => {
      state.isGetNewsLoading = false;
    });

    builder.addCase(deleteOneNews.pending, (state) => {
      state.deleteOneNews = true;
    });
    builder.addCase(deleteOneNews.fulfilled, (state) => {
      state.deleteOneNews = false;
    });
    builder.addCase(deleteOneNews.rejected, (state) => {
      state.deleteOneNews = false;
    });
  }
})

export const newsReducer = newsSlice.reducer;
export const allNews = (state: RootState) => state.news.news;
export const deleteNews = (state: RootState) => state.news.deleteOneNews;