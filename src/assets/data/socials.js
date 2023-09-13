// Số điện thoại thì cần có "tel:" đằng trước
// Email thì có "mailto:" đằng trước

import { info } from './info';

export const socials = [
  {
    name: 'Telephone',
    link: `tel:${info.phone_number}`,
    nameImg: 'iphone.png',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/defectfound',
    nameImg: 'instagram.png',
  },
  {
    name: 'Wechat',
    link: 'https://www.wechat.com/',
    nameImg: 'wechat.png',
    title: 'ID: insquality',
  },
  {
    name: 'WhatsApp',
    link: 'https://www.whatsapp.com/',
    nameImg: 'whatsapp.png',
    title: `${info.phone_number}`,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/defect_found',
    nameImg: 'twitter.png',
  },
]