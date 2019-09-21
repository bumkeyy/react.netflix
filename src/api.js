import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '10923b261ba94d897ac6b81148314a3f',
    language: 'en-US'
  }
});

export const movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upComing: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: term =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  // tvDetail: id =>
  //   api.get(`tv/${id}`, {
  //     params: {
  //       append_to_response: 'videos'
  //     }
  //   }),
  tvDetail: id => api.get(`tv/${id}`),
  search: term =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
