import React, { memo, useEffect } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRankingListAction } from '../../store/actionCreator'

import ThemeTitle from '@/components/theme-title'
import RankingItem from '@/components/ranking-item'
import { RankingListWrapper } from './style'

const IceRankingList = memo(() => {
  const { upRanking, newRanking, originRanking } = useSelector(state=>({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getRankingListAction(0))
    dispatch(getRankingListAction(2))
    dispatch(getRankingListAction(3))
  }, [dispatch])

  return (
    <RankingListWrapper>
      <ThemeTitle title="榜单"/>

      <div className="rankingBox">
        <RankingItem info={upRanking}/>
        <RankingItem info={newRanking}/>
        <RankingItem info={originRanking}/>
      </div>
    </RankingListWrapper>
  );
});

export default IceRankingList;