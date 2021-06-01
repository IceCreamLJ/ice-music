import * as actionTypes from './constants'
import { Map } from 'immutable'

const initState = Map({
  bannerList: [],
  hotRecommendList: [],
  newAlbumList: [],
  upRanking: {},
  newRanking: {},
  originRanking: {}
})

export default function reducer(prevState = initState, action){
  switch(action.type){
    case actionTypes.TOP_BANNER:
      return prevState.set('bannerList', action.data)
    case actionTypes.HOT_RECOMMEND:
      return prevState.set('hotRecommendList', action.data)  
    case actionTypes.NEW_ALBUM:
      return prevState.set('newAlbumList', action.data)  
    case actionTypes.UP_RANKING:
      return prevState.set('upRanking', action.data)  
    case actionTypes.NEW_RANKING:
      return prevState.set('newRanking', action.data)  
    case actionTypes.ORIGIN_RANKING:
      return prevState.set('originRanking', action.data)  
    default:
      return prevState  
  }
}