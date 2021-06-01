import React, { memo } from 'react';

import PropTypes from 'prop-types';
import { getFitUrl, getCount } from '@/utils/format' 

import { SongCoverWrapper } from './style'

const IceSongCover = memo((props) => {
  const { info = {} } = props;

  return (
    <SongCoverWrapper>
       <img src={getFitUrl(info.picUrl, 140)}/>
       <div className="glass image_cover"></div>
       <div className="playCount">
         <div className="headset"></div>
         <div className="count">{getCount(info.playCount)}</div>
         <div className="playIcon"></div> 
        </div>
       <div className="name">{info.name}</div> 
    </SongCoverWrapper>
  );
});

IceSongCover.propTypes = {
  info: PropTypes.object.isRequired
};

export default IceSongCover;