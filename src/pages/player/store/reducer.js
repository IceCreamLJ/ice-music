import { Map } from 'immutable'
import * as actionTypes from './constants'

const initState = Map({
  currentSong: {},
  playList: [],
  currentIndex: 0,
  modeIndex: 0,
  lyrics: [],
  lyricsIndex: 0,
})

export default function playerReducer(prevState = initState, action){
  switch(action.type){
    case actionTypes.CHANGE_SONG:
      return prevState.set('currentSong', action.data)
    case actionTypes.CHANGE_PLAY_LIST:
      return prevState.set('playList', action.data) 
    case actionTypes.CHANGE_CURRENT_INDEX:
      return prevState.set('currentIndex', action.data)     
    case actionTypes.CHNAGE_MODE_INDEX:
      return prevState.set('modeIndex', action.data)   
    case actionTypes.CHANGE_LYRIC:
      return prevState.set('lyrics', action.data)  
    case actionTypes.CHANGE_LYRIC_INDEX:
      return prevState.set('lyricsIndex', action.data)  
    default:
      return prevState
  }
}