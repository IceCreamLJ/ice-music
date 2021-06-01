import styled from 'styled-components'

import RLogo from '@/assets/img/white-r-icon@3x.png'

export const DiscoverWrapper = styled.div`

  .topWrap {
    background-color: #C20C0C;
    height: 30px;
    box-sizing: border-box;
    padding-top: 2px;
    width: 100%;
  }
  
  .navWrap {
    margin-left: 185px;

  }

  .navWrap a.active {
    background-color: #9B0909;
    border-radius: 20px;
  }

  .navWrap a {
    display: inline-block;
    padding: 0 13px;
    margin: 0 17px;
    color: #fff;
    text-decoration: none;
    position: relative
  }

  .navWrap a:nth-child(3)::after{
    display: block;
    content: '';
    position: absolute;
    right: 2px;
    top: 0;
    width: 12px;
    height: 12px;
    background: url(${RLogo}) no-repeat;
    transform: scale(0.7)
  }
`