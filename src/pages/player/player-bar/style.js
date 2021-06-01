import styled from 'styled-components'
import progress_bar from '@/assets/img/progress_bar.png'
import ply_btn from '@/assets/img/ply_btn.png'
import playbar_sprite from '@/assets/img/playbar_sprite.png'

export const PlayerBarWrapper = styled.div`
  padding-top: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 53px;
  background-position: 0 0px;
  background-repeat: repeat;

  .playerBar {
    display: flex;
  }
`

export const PlayerLeft = styled.div`
  
  display: flex;
  align-items: center;
  width: 137px;

  .prev {
    width: 26px;
    height: 26px;
    background-position: -1px -132px;

    &:hover {
      background-position: -31px -132px;
    }
  }

  .play {
    width: 35px;
    height: 35px;
    background-position: -1px -166px;
    margin: 0 10px;

     &:hover {
      background-position: -41px -166px;
    }
  }

  .pause {
    width: 35px;
    height: 35px;
    background-position: -1px -205px;
    margin: 0 10px;

     &:hover {
      background-position: -41px -205px;
    }
  }

  .next {
    width: 26px;
    height: 26px;
    background-position: -81px -130px;

    &:hover {
      background-position: -111px -130px;
    }
  }

`

export const PlayerCenter = styled.div`
  display: flex;

  img {
    width: 34px;
    border-radius: 5px;
    margin-right: 10px;
  }

  .silder-bar {
    width: 493px;
    margin-right: 10px;

    .ant-slider {
      margin: 0;
    }

    .ant-slider-rail {
      height: 8px;
      border-radius: 10px;
    }

    .ant-slider-track {
      background-color: transparent;
      background: url(${progress_bar}) no-repeat 0 -67px;
      height: 8px;
      border-radius: 10px;
    }

    .ant-slider-handle {
      margin-top: -6px;
      border: none;
      background-color: transparent;
      width: 22px;
      height: 22px;
      background: url(${ply_btn});
      
      &:hover {
        border: none;
      }

      &:focus {
        box-shadow: none;
      }

    }

    .ant-slider-step {
      width: 100%;
      height: 8px;
      background: url(${progress_bar}) repeat 0 -30px;
      border-radius: 10px;
    }

    .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
      border-color: #fff;
    }

    .ant-slider-rail {
      background-color: transparent
    }

    .ant-slider-track {
      background: url(${progress_bar}) repeat 0 -66px;
      z-index: 9;
    }

    .ant-slider-handle {
      z-index: 10;
    }
  }

  .name {
    color: #e8e8e8;
    margin-right: 5px;
  }

  .singer {
    color: #9b9b9b;
  }
  
  .left {
    margin-right: 10px;
  }

  .right {
    width: 608px;
  }

  .linkWrap {
    position: relative;
    width: 20px;
    height: 13px;
    display: inline-block;
  }

  .link {
    position: absolute;
    top: 0;
    left: 10px;
    display: inline-block;
    width: 13px;
    height: 17px;
    background-position: -110px -101px;

    &:hover {
      background-position: -130px -101px;
    }
  }

  .song-time {
    color: #797979;

    span {
      color: #a1a1a1;
    }
  }
`

export const PlayerRight = styled.div`
  display: flex;
  margin-top: 9px;

  div {
    width: 20px;
    height: 20px;
    margin: 0 3px;
  }

  .collect {
    background-position: -91px -165px;

    &:hover {
      background-position: -91px -191px;
    }
  }

  .share {
    position: relative;
    background-position: -117px -165px;

    &:hover {
      background-position: -117px -191px;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 30px;
      display: block;
      content: '';
      width: 5px;
      height: 20px;
      background: url(${playbar_sprite}) no-repeat -146px -252px;
    }
  }

  .volume {
    margin-left: 25px;
    background-position: -4px -250px;

    &:hover {
      background-position: -33px -250px;
    }
  }

  .circulate {
    background-position: ${ props => {
      switch(props.modeIndex) {
        case 1:
          return '-68px -250px'
        case 2:
          return '-68px -346px'
        default:
          return '-5px -346px'      
      }
    } };

    &:hover {
      background-position: ${ props => {
        switch(props.modeIndex) {
          case 1:
            return '-95px -250px'
          case 2:
            return '-95px -346px'
          default:
            return '-35px -346px'      
        }
     } };
    }
    
  }

  .list {
    margin-top: -1px;
    width: 58px;
    height: 22px;
    background-position: -43px -70px;
    color: #666;
    padding: 2px 0 0 32px;

    &:hover {
      background-position: -43px -100px;
    }
  }

`