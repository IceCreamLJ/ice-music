import * as actionTypes from './constants'
import { getBanner, getHotRecommend, getNewAlbum, getRankingList } from '@/service/recommend'

// 派发轮播图的action
export const changeBannerAction = data =>({ type: actionTypes.TOP_BANNER, data})
// 派发热门推荐的action
export const changeHotRecommendAction = data => ({ type: actionTypes.HOT_RECOMMEND, data })
// 派发新碟上架的action
export const changeNewAlbumAction = data => ({ type: actionTypes.NEW_ALBUM, data })
// 派发榜单的action 飙升榜
export const changeUpRankingAction = data => ({ type: actionTypes.UP_RANKING, data })
// 派发榜单的action 新歌榜
export const changeNewRankingAction = data => ({ type: actionTypes.NEW_RANKING, data })
// 派发榜单的action 原创榜
export const changeOriginRankingAction = data => ({ type: actionTypes.ORIGIN_RANKING, data })

// 发送ajax 获取顶部轮播图
export const getBannerAction = () => {
  return dispatch => {
    getBanner()
    .then(result=>{
      if(result.code && result.code === 200){
        dispatch(changeBannerAction(result.banners))
      }
    })
  }
}

// 发送ajax 获取热门推荐
export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit)
    .then(result=>{
      if(result.code && result.code === 200){
        dispatch(changeHotRecommendAction(result.result))
      }
    })
  }
}

// 发送ajax 获取新碟上架
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit)
    .then(result=>{
      if(result.code && result.code === 200){
        dispatch(changeNewAlbumAction(result.albums))
      }
    })
  }
}

// 发送ajax 获取榜单
export const getRankingListAction = (idx) => {
  return dispatch => {
    getRankingList(idx)
    .then(result=>{
      const list = result.playlist
      switch(idx){
        case 0:
          dispatch(changeNewRankingAction(list))
          break;
        case 2:
          dispatch(changeOriginRankingAction(list))
          break;
        case 3:
          dispatch(changeUpRankingAction(list))
          break;
        default:
      }
    })
  }
}