import instance from './axios';

export const search = async (data) => (await instance.post('/customer/search', {
  ...data
})).data;

export const getById = async (id) => (await instance.get('/customer/' + id)).data;

