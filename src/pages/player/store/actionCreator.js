import { getCurrentSong, getSongLyric } from '@/service/player'
import * as actionTypes from './constants'

export const changeSongAction = (data) => ({ type: actionTypes.CHANGE_SONG, data })
export const changePlayListAction = (data) => ({ type: actionTypes.CHANGE_PLAY_LIST, data })
export const changeCurIndexAction = (data) => ({ type: actionTypes.CHANGE_CURRENT_INDEX, data })
export const changeModeIndexAction = (data) => ({ type: actionTypes.CHNAGE_MODE_INDEX, data })
export const changeLyricAction = (data) => ({ type: actionTypes.CHANGE_LYRIC, data })
export const changeLyricIndexAction = (data) => ({ type: actionTypes.CHANGE_LYRIC_INDEX, data })

// 获取歌曲详情
export const getSong = (ids) => {
  return (dispatch, getState) => {
    getCurrentSong(ids)
    .then(result=>{
      if(result.code && result.code === 200){
        const song = result.songs && result.songs[0] || {}
        const playList = getState().getIn(['songs', 'playList'])
        const data = [song, ...playList]
        dispatch(changeSongAction(song))
        dispatch(changePlayListAction(data))
        dispatch(changeCurIndexAction(0))
        dispatch(getLyric(ids))
      }
    })
  }
}

// 设置播放列表
export const setMusicList = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['songs', 'playList']) 
    const index = playList.findIndex(item => ids == item.id)
    if(index >= 0){
      dispatch(changeSongAction(playList[index]))
      dispatch(changeCurIndexAction(index))
    }else{
      dispatch(getSong(ids))    
    }
    dispatch(getLyric(ids))
  }
}

// 向前、向后时 设置播放歌曲
export const setPlayItem = (num) => {
  return (dispatch, getState) => {
    const currentIndex = getState().getIn(['songs', 'currentIndex'])
    const modeIndex = getState().getIn(['songs', 'modeIndex'])
    const playList = getState().getIn(['songs','playList'])
    let number = currentIndex
    switch(modeIndex){
      case 1:
        while(number === currentIndex){
          number = Math.floor(Math.random()*playList.length)
        }
        break;
      default:
        number = currentIndex*1 + num
        if(number < 0){
          number = playList.length - 1
        }else if(number > playList.length - 1){
          number = 0
        }       
    }
    dispatch(changeSongAction(playList[number]))
    dispatch(changeCurIndexAction(number))
    dispatch(getLyric(playList[number].id))
  }
}

// 获取歌词
export const getLyric = (ids) => {
  return dispatch => {
    getSongLyric(ids)
    .then(value=>{
      const lyric = value.lrc.lyric
      const array = lyric.split('\n')
      let list = []
      const reg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
      array.map(item=>{
        const regTime = reg.exec(item)
        if(!regTime) return
        const ms = regTime[3].length == 3 ? regTime[3]*1 : regTime[3]*10
        const time = regTime[1] * 60 * 1000 + regTime[2] * 1000 + ms
        const content = regTime.input
        const obj = {
          time,
          content: content.replace(reg, '')
        } 
        list = [...list, obj]
      })
      dispatch(changeLyricAction(list))
    })
  }
}
