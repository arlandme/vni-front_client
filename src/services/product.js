import instance from './axios';

export const search = async (data) => (await instance.post('/product/search', {
  ...data
})).data;

export const getById = async (id) => (await instance.get('/product/getById/' + id)).data;

export const getByPath = async (path) => (await instance.get('/product/getByPath/' + path)).data;
