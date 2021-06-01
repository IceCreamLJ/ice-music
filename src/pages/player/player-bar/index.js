import React, { memo, useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames'

import { getFitUrl, formatDate, getPlayUrl } from '@/utils/format'
import { getSong, 
  changeModeIndexAction, 
  setPlayItem, 
  changeLyricIndexAction } from '../store/actionCreator'

import { Slider } from 'antd';
import { message, Button } from 'antd';
import { PlayerBarWrapper, PlayerLeft, PlayerCenter, PlayerRight } from './style'

const IcePlayerBar = memo(() => {

  const [ isPlaying, setPlayingStatus ] = useState(false)
  const [ process, setProcess ] = useState(0)
  const [ currentTime, setCurrentTime ] = useState('0')
  const [ playTime, setPlayTime ] = useState('0')
  const [ isDrag, setIsDrag ] = useState(false)

  const { currentSong, 
    modeIndex, 
    playList, 
    lyrics, 
    lyricsIndex
   } = useSelector(state => ({
    currentSong: state.getIn(['songs','currentSong']),
    modeIndex: state.getIn(['songs','modeIndex']),
    playList: state.getIn(['songs', 'playList']),
    lyrics: state.getIn(['songs','lyrics']),
    lyricsIndex: state.getIn(['songs', 'lyricsIndex'])
  }))

  const dispatch = useDispatch()

  const name = currentSong.name
  const singer = currentSong.ar && currentSong.ar[0] && currentSong.ar[0].name || ''
  const picUrl = currentSong.al && currentSong.al.picUrl || ''
  const totalTime = formatDate(currentSong.dt, 'mm:ss')
  const mode = { 0: '循环', 1: '随机', 2: '单曲循环'}
  const listLen = playList.length - 1

  // 获取歌曲信息
  useEffect(()=>{
    dispatch(getSong(167876))
  },[dispatch])

  // 指定播放源
  useEffect(()=>{
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current.play()
    .then(value=>{
      audioRef.current.play()
      setPlayingStatus(true)
    })
    .catch(error=>{
      setPlayingStatus(false)
    })
  }, [currentSong])

  const audioRef = useRef()

  // 播放、暂停操作
  const setPlayStatus = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    audioRef.current.currentTime = playTime;
    setPlayingStatus(!isPlaying)
  }, [isPlaying, playTime])

  // 播放音乐
  const timeupdate = e => {
    if(isDrag) return
    let time = e.target.currentTime*1000
    const rate = time / currentSong.dt *100
    const curTime = formatDate(time, 'mm:ss')
    setPlayTime(e.target.currentTime)
    setCurrentTime(curTime)
    setProcess(rate)
    let i = 0
    for(;i<lyrics.length; i++){
      const item = lyrics[i]    
      if(item.time > time){
        const content = lyrics[i-1] && lyrics[i-1].content;
        if(!content) return;
        message.open({
          key: 'lyric',
          duration: 0,
          content: content,
          className: 'lyric-global'
        })
        if(lyricsIndex !== i-1){
          dispatch(changeLyricIndexAction(i-1))
        }
        return
      }
    }
  }

  // 拖动滑块
  const changeSlider = useCallback(value => {
    setIsDrag(true)
    const time = ( currentSong.dt / 1000 ) * value / 100
    const curTime = formatDate(time * 1000, 'mm:ss')
    setPlayTime(time)
    setCurrentTime(curTime)
    setProcess(value)
  }, [isPlaying, currentSong, isDrag])

  // 鼠标释放
  const AfterChangeSlider = useCallback(value => {
    audioRef.current.currentTime = playTime
    setIsDrag(false)
  }, [isPlaying, currentSong, playTime])

  // 向前、向后播放音乐
  const backOrForwardMusic = (num) => {
    dispatch(setPlayItem(num))
  }

  // 更改播放模式
  const changeMode = () => {
    switch(modeIndex){
      case 2:
        dispatch(changeModeIndexAction(0))
        break;
      default:
        dispatch(changeModeIndexAction(modeIndex+1))
        break;
    }
  }

  // 当前音乐播放完成
  const playNext = () => {
    switch(modeIndex){     
      case 2:
        audioRef.current.currentTime = 0
      default:
        dispatch(setPlayItem(1))
        break;
    }
  }

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="wrap-v2 playerBar">
        <PlayerLeft>
          <div className="sprite_player prev" onClick={ e => { backOrForwardMusic(-1)} }></div>
          <div className={classnames("sprite_player", isPlaying ? "play" : "pause")}
               onClick={setPlayStatus}
          ></div>
          <div className="sprite_player next" onClick={ e => { backOrForwardMusic(1)} }></div>
        </PlayerLeft>

        <PlayerCenter>
          <div className="left">
            <img src={getFitUrl(picUrl,34)}/>
          </div>
          <div className="right">
            <div className="song-info">
              <a className="name">{name}</a>
              <a className="singer">{singer}</a>
              <div className="linkWrap">
                 <a className="link sprite_player"></a>
              </div>
            </div>

            <div className="bar-line flex">
              <div className="silder-bar">
                <Slider value={process} 
                        onChange={changeSlider}
                        onAfterChange={AfterChangeSlider}
                />
              </div>
              <div className="song-time">
                <span>{currentTime} </span>/ {totalTime}
              </div>
            </div>
          </div>
        </PlayerCenter>

        <PlayerRight modeIndex={modeIndex}>
          <div className="collect sprite_player" title="收藏"></div>
          <div className="share sprite_player" title="分享"></div>
          <div className="volume sprite_player" title="音量"></div>
          <div className="circulate sprite_player" 
               title={mode[modeIndex]}
               onClick={changeMode}     
          ></div>
          <div className="list sprite_player" title="循环列表">{listLen}</div>
        </PlayerRight>
      </div>

      <audio ref={audioRef} onTimeUpdate={timeupdate} onEnded={playNext}/>
    </PlayerBarWrapper>
  );
});

export default IcePlayerBar;