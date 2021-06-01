import styled from 'styled-components'
import downloadBg from '@/assets/img/download.png'
import banner from '@/assets/img/banner.png'

export const TopBannerWrapper = styled.div`
  position: relative;
  background: url(${props=> props.imgBg + '?imageView&blur=40x20'}) no-repeat center/5000px;

  .banners {
    display: flex;
  }  
`

export const BannerLeft = styled.div`
  width: 730px;
  background-color: #000;

  .banner-item img {
    width: 100%;
  }

  .imgDot li,
  .imgDot li.slick-active {
   
  }

  .imgDot li button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .imgDot li.slick-active button {
    background-color: #C20C0C;
  }
`

export const BannerRight = styled.div`
  position: relative;
  width: 250px;
  height: 270px;
  background: url(${downloadBg}) no-repeat;

  a {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 220px;
    height: 56px;
    margin: 186px 15px 0;
  }

  p {
    color: #8d8d8d;
    margin: 0 10px;
    transform: scale(.9)
  }
`

export const BannerDotLeft = styled.div`
  position: absolute;
  top: 115px;
  left: 95px;
  width: 40px;
  height: 50px;
  background: url(${banner}) no-repeat 0px -367px;
  cursor: pointer;
`

export const BannerDotRight = styled.div`
  position: absolute;
  top: 115px;
  right: 95px;
  width: 40px;
  height: 50px;
  background: url(${banner}) no-repeat 0px -515px;
  cursor: pointer;
`