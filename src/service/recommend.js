import request from './request'

// 顶部banner
export function getBanner(){
  return request({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommend(limit){
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewAlbum(limit){
  return request({
    url: '/top/album', 
    params: {
      limit
    }
  })
}

// 榜单
export function getRankingList(idx){
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}