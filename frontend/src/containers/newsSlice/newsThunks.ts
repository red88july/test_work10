import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetNews, NewsList} from '../../types';
import axiosApi from '../../axiosApi.ts';

export const getAllNews = createAsyncThunk<GetNews[]>(
  'news/getAllNews', async () => {
    const response = await axiosApi.get<NewsList | null>('/news');
    const news = response.data;

    let newNews: GetNews[] = [];

    if (news) {
      newNews = Object.keys(news).map(key => {
        const dish = news[key];
        return {
          ...dish,
          id: key,
        };
      });
    }
    return newNews;
  }
);

export const deleteOneNews = createAsyncThunk<void, number>(
  'news/deleteOneNews',
  async (id: number) => {
    await axiosApi.delete(`/news/${id}`);
  }
);