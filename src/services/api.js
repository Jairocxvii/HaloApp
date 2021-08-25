
export const APIBaseUrl = 'https://www.haloapi.com/profile';

export default {
  getEmblem: {
    url: '/h5/profiles/{player}/emblem',
    method: 'GET'
  },
  getSpartan: {
    url: '/h5/profiles/{player}/spartan',
    method: 'GET'
  },
  getAppearance: {
    url: '/h5/profiles/{player}/appearance',
    method: 'GET'
  }

};
