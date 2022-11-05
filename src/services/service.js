import instance from './axios';

export const search = async (data) => (await instance.post('/service/search', {
  ...data
})).data;

export const getById = async (id) => (await instance.get('/service/getById/' + id)).data;

export const getByPath = async (path) => (await instance.get('/service/getByPath/' + path)).data;

