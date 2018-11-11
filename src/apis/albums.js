import request from '../utilities/request';
/**
 * @description get user albums list by user id
 * @param {string} userId
 * */
export const getAlbumsByUserId = userId => request({
  url: '/albums',
  method: 'get',
  params: { userId },
});
/**
 * @description get photos by album id
 * @param {string} albumId
 * */
export const getPhotosByAlbumId = albumId => request({
  url: '/photos',
  method: 'get',
  params: { albumId },
});
