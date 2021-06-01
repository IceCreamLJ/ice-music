import request from './request'

export const getCurrentSong = (ids) => {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export const getSongLyric = (id) => {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
} 