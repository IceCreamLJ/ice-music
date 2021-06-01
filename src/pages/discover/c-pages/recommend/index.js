import React, { memo} from 'react';

import TopBanner from './c-cpns/top-banners'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'

import { 
  RecommendWrapper, 
  RecommendContent,
  RecomendLeft,
  RecomendRight
} from './style'

const iceRecommend = memo(() => {
  

  return (
    <RecommendWrapper>
     <TopBanner/>
      <RecommendContent className="wrap-v2">
        <RecomendLeft>

          <HotRecommend/>
          <NewAlbum/>
          <RankingList/>  

        </RecomendLeft>
        <RecomendRight>


        </RecomendRight>
      </RecommendContent>
    </RecommendWrapper>
  );
});

export default iceRecommend;