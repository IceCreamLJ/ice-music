import styled from 'styled-components'
import sprite_01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  
  .header {
    width: 100%;
    height: 70px;
    background-color: #242424
  }

  .flex-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 180px;
    height: 70px;
    background-position: 0px 0px;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }

  .line {
    height: 5px;
    width: 100%;
    background-color: #C20C0C
  }
  
`

export const HeaderLeft = styled.div`
  display: flex;

  .titleBox {
    display: flex;
    line-height: 70px;
  }

  .titleItem {
    font-size: 14px;
    padding: 0 19px;
    position: relative;
  }

  .titleItem a {
    color: #ccc;
  }

  .titleItem:last-child::after {
    position: absolute;
    right: -16px;
    top: 18px;
    content: '';
    width: 26px;
    height: 13px;
    background-image: url(${sprite_01});
    background-repeat: no-repeat;
    background-position: -192px 0;
  }

  .titleItem.checked::after {
    position: absolute;
    left: 50%;
    bottom: 0;
    content: '';
    width: 12px;
    height: 6px;
    transform: translate(-50%, 0);
    background-image: url(${sprite_01});
    background-repeat: no-repeat;
    background-position: -226px 0;
  }

  .titleItem a:nth-child(6){
      font-size: 28px;

    &&::after {
      display: absolute;
      content: 'hello';
      top: 0;
      left: 0;
    }
  }

  .checked {
    background-color: #000;
  }

  .checked a {
    color: #fff;
  }
  
  a:hover,
  a:active {
    color: #fff;
  }

`

export const HeaderRight = styled.div`
  display: flex;
  height: 32px;

  .search {
    width: 158px;
    border-radius: 20px;
    font-size: 12px;
  }

  input::placeholder {
    font-size: 12px;
  }

  .center {
    margin: 0 12px;
    height: 30px;
    line-height: 30px;
    width: 90px;
    border: 1px solid #4F4F4F;;
    border-radius: 20px;
    text-align: center;
  }

  .center:hover,
  .center:active {
    border: 1px solid #ccc;
    
  }

  .center a {
    color: #ccc;
  }

  .center a:hover {
    color: #fff;
  }

  .login {
    margin: 0 12px;
    line-height: 32px;
  }

`