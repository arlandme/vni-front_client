import instance from './axios';

export const search = async (data) => (await instance.post('/slide/search', {
  ...data
})).data;

export const getById = async (id) => (await instance.get('/slide/' + id)).data;

