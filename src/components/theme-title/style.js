import styled from 'styled-components'
import sprite_02 from '@/assets/img/sprite_02.png'

export const RcmTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #C10D0C;
  background-color: #fff;
  line-height: 35px;
`

export const RcmTitleLeft = styled.div`
  display: flex;
  
  .hotTitle {
    position: relative;
    font-size: 20px;
    padding: 0 10px 0 35px;
  }

  .hotTitle::before {
    position: absolute;
    top: 9px;
    left: 10px;
    content: '';
    width: 16px;
    height: 16px;
    background: url(${sprite_02}) no-repeat -234px -163px;
  }

  .titleItem {
    padding-left: 16px;

      &:last-child a{
      border-right: none
    }
  }


  .titleItem a{
    padding-right: 16px;
    border-right: 1px solid #ccc;
  }

`

export const RcmTitleRight = styled.div`
   position: relative;
   padding-right: 30px;
   cursor: pointer;

  &::after {
    position: absolute;
    right: 10px;
    top: 11px;
    content: '';
    width: 13px;
    height: 13px;
    background: url(${sprite_02}) no-repeat 0 -240px;
  }
`