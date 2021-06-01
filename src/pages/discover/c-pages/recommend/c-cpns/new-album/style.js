import styled from 'styled-components'


export const NewAlbumWrapper = styled.div`

  .diskWrap {
    position: relative;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    /* display: flex;
    align-items: center; */
  }

  .leftIcon {
    position: absolute;
    top: 73px;
    left: 5px;
    width: 23px;
    height: 16px;
    background-position: -258px -76px;
  }

  .rightIcon {
    position: absolute;
    top: 73px;
    right: 5px;
    width: 23px;
    height: 16px;
    background-position: -294px -76px;
  }

  .center {
    margin: 28px 20px 0 20px;
    width: 648px;

    .carouselWrap {
      width: 100%;
      display: flex !important;
    }
  }

`