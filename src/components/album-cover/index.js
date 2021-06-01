import React, { memo } from 'react';

import { getFitUrl } from '@/utils/format'

import { AlbumCoverWrapper } from './style'

const IceAlbumCover = memo((props) => {
  const { info, size = 100, width = 118, bgp = "-569px" } = props;

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <img src={getFitUrl(info.picUrl, size )}/>
      <span className="mask image_cover"></span>
      <a className="name">{info.name}</a>
      <a className="user">{info.artist.name}</a>
    </AlbumCoverWrapper>
  );
});

export default IceAlbumCover;