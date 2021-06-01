import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from '../../store/actionCreator'
import { hotRcmSubTitles } from '@/common/data-titles'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import ThemeTitle from '@/components/theme-title'
import SongCover from '@/components/song-cover'
import { RecommendWrapper } from './style'


const IceHotRecommend = memo(() => {
  const { hotRecommendList } = useSelector(state => ({
    hotRecommendList: state.getIn(['recommend', 'hotRecommendList'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <RecommendWrapper>
      <ThemeTitle title="热门推荐" keywords={hotRcmSubTitles}/>

       <div className="albumCover">
          {hotRecommendList.map(item=>(
            <div className="coverItem" key={item.id}>
              <SongCover info={item}/>
            </div>  
          ))}
       </div> 
    </RecommendWrapper>
  );
});

export default IceHotRecommend;