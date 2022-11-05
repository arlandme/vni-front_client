import instance from './axios';

export const sendMail = async (data) => (await instance.post('/contact/send', {
  ...data
}));
