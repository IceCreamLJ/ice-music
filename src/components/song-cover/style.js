import styled from 'styled-components'
import sprite_icon from '@/assets/img/sprite_icon.png'
import sprite_cover from '@/assets/img/sprite_cover.png'

export const SongCoverWrapper = styled.div`
  position: relative;

  .glass {
    width: 140px;
    height: 140px;
    background-position: 0 0;
  }


  .playCount {
    position: absolute;
    top: 113px;
    height: 27px;
    width: 140px;
    padding: 0 3px 0 7px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(${sprite_cover}) no-repeat 0 -537px;
  }

  .headset {
    width: 13px;
    height: 13px;
    padding-right: 20px;
    background: url(${sprite_icon}) no-repeat 0 -23px;
  }

  .count {
    color: #ccc;
    font-size: 12px;
    flex: 1;
  }

  .playIcon {
    width: 22px;
    height: 20px;
    padding-right: 20px;
    background: url(${sprite_icon}) no-repeat 0px -86px;
    transform: scale(.7)
  }

  .name {
    margin: 8px 0 3px;
    font-size: 14px;
  }
`