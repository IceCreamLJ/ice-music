import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { getFitUrl } from '@/utils/format'
import { setMusicList } from '@/pages/player/store'

import { RankingItemWrapper, RankingTitle, RankingCenter, RankingFooter } from './style'

const IceRankingItem = memo((props) => {
  const { info } = props
  const { tracks = [] } = info

  const dispatch = useDispatch()

  const playMusic = (item) => {
    dispatch(setMusicList(item.id))
  }

  return (
    <RankingItemWrapper>
      <RankingTitle>
        <div className="titleLeft">
          <img src={getFitUrl(info.coverImgUrl, 80)}/>
          <div className="rankCover image_cover"></div>
        </div>
        <div className="titleRight">
          <div className="name">{info.name}</div>
          <div className="icon">
            <div className="play sprite_02" title="播放"></div>
            <div className="collect sprite_02" title="收藏"></div>
          </div>
        </div>
      </RankingTitle>

      <RankingCenter>
        <ol>
          { tracks.slice(0, 10).map((item, index)=>(
              <li key={item.id}>
                <div className="left">
                  <div className="number">{index + 1}</div>
                  <a href="#">{item.name}</a>
                </div>
                
                <div className="right">
                  <a className="playItem sprite_02" title="播放" 
                     onClick={ e => playMusic(item)}></a>
                  <a className="addItem sprite_icon2" title="添加到播放列表"></a>
                  <a className="collectItem sprite_02" title="收藏"></a>
                </div>
                
              </li>
          ))}
        </ol>
        
      </RankingCenter>
               
      <RankingFooter>
        <a href="#">查看全部 &gt;</a> 
      </RankingFooter>
    </RankingItemWrapper>
  );
});

export default IceRankingItem;