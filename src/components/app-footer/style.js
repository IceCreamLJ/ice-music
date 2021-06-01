import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
  height: 172px;

  .footer {
    display: flex;
  }
  
`

export const FooterLeft = styled.div`
  flex: 4;

  .footerLine {
    margin-top: 14px;
    line-height: 24px;

    a:first-child{
      padding-left: 0px;
    }
  }


  .help {
    padding: 0 10px;
    border-right: 1px solid #d3d3d3;
    color: #999;
  }

  .help::first-child {
    padding: 0 10px 0 0;
  }

  .certficateGroup {
    display: flex;
    flex-wrap: wrap;
  }

  .certItem {
    margin-right: 14px;
    line-height: 24px;
  }
`

export const FooterRight = styled.div`
  padding-top: 30px;
  flex: 3;
  display: flex;
  color: #666;
  justify-content: space-between;

  .iconWrap {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }

  .footItem {
    margin: 0 auto;
    height: 50px;
    width: 50px;
    margin-bottom: 3px;
  }

  .footItem + div {
    transform: scale(.9)
  }

  .iconWrap:nth-child(1) .footItem{
    background-position: -65px -495px;
  }
  .iconWrap:nth-child(2) .footItem{
    background-position: -64px -109px;
  }
  .iconWrap:nth-child(3) .footItem{
    background-position: 0px 0px;
  }
  .iconWrap:nth-child(4) .footItem{
    background-position: -66px -54px;
  }
  .iconWrap:nth-child(5) .footItem{
    background-position: 0px -110px;
  }
`