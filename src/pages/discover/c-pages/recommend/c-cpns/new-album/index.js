import React, { memo, useCallback, useEffect, useRef } from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreator'
import { NEW_ALBUM_LIMIT } from '@/common/constants'

import { Carousel } from 'antd';
import AlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'
import ThemeTitle from '@/components/theme-title'

const IceNewAlbum = memo(() => {

  const { newAlbumList } = useSelector(state => ({
    newAlbumList: state.getIn(['recommend','newAlbumList'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
  }, [dispatch])

  const carouselRef = useRef()

  const getPreviousImg = useCallback(() =>{
    carouselRef.current.prev()
  }, [])

  const getNextImg = useCallback(() => {
    carouselRef.current.next()
  }, [])

  return (
    <NewAlbumWrapper>
       <ThemeTitle title="新碟上架"/>
       <div className="diskWrap">
          <div className="leftIcon sprite_02" onClick={getPreviousImg}></div>
          
          <div className="center">
            <Carousel dots={false} ref={carouselRef}>
              {[0, 1].map(item=>(
              <div key={item} className="carouselWrap">
                { newAlbumList.slice(item*5, (item+1)*5).map(iten=>(
                  <AlbumCover key={iten.id} info={iten}/>
                ))}  
              </div>))}
            </Carousel>
          </div>     
          <div className="rightIcon sprite_02" onClick={getNextImg}></div>
       </div> 

    </NewAlbumWrapper>
  );
});

export default IceNewAlbum;