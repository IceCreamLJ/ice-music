import React, { memo, useEffect, useCallback, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getBannerAction } from '../../store/actionCreator';

import { 
  TopBannerWrapper, 
  BannerLeft, 
  BannerRight, 
  BannerDotLeft, 
  BannerDotRight } from './style';

import { Carousel } from 'antd';

const IceTopBanner = memo(() => {
  const [ selectIndex, setIndex ] = useState(0)

  const { bannerList } = useSelector(state=>({
    bannerList: state.getIn(['recommend','bannerList'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getBannerAction())
  }, [dispatch])

  const bannerRef = useRef()

  const changeNext = useCallback(()=>{
    bannerRef.current.next()
  })

  const changePrev = useCallback(()=>{
    bannerRef.current.prev()
  }, [bannerRef])

  const changeCallback = useCallback((from, to)=>{
    setTimeout(()=>{
      setIndex(to)
    },0)
  }, [])

  return (
    <TopBannerWrapper imgBg={bannerList[selectIndex] && bannerList[selectIndex].imageUrl} >
       <div className="wrap-v2 banners">
        <BannerLeft>
          <Carousel effect="fade" 
                    autoplay 
                    dots={{className: 'imgDot'}} 
                    ref={bannerRef}
                    beforeChange={changeCallback}>
                {bannerList.map(item=>(
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl}/>
                  </div>
                ))}
                </Carousel>
        </BannerLeft>

        <BannerRight>
           <a href="https://music.163.com/#/download"></a>  
           <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>     
        </BannerRight>            
          
        <BannerDotLeft onClick={changePrev}/>
        <BannerDotRight onClick={changeNext}/>  

       </div>
        
     
      
    </TopBannerWrapper>
  );
});

export default IceTopBanner;