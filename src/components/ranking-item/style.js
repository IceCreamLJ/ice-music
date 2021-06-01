import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
  width: 230px;

  a {
    color: #333;
  }
`

export const RankingTitle = styled.div`
  height: 120px;
  padding: 20px 0px 0px 20px;
  display: flex;

  .titleLeft {
    position: relative;
    width: 80px;
    height: 80px;
  }

  .rankCover {
    width: 80px;
    height: 80px;
  }

  .titleRight {
    margin: 6px 0px 0px 10px;

    .name {
      font-size: 14px;
      font-weight: 700;
    }

    .icon {
      margin-top: 10px;
      display: flex;
    }

    .play {
      width: 23px;
      height: 23px;
      background-position: -266px -205px;
      margin-right: 10px;

      &:hover {
        background-position: -266px -235px;
      }
    }

    .collect {
      width: 23px;
      height: 23px;
      background-position: -299px -206px;

      &:hover {
        background-position: -299px -236px;
      }
    }
  }
  
`

export const RankingCenter = styled.div`

  ol {
    margin-left: 18px;
  
    li {
      position: relative;
      line-height: 32px;
      display: flex;
      align-items: center;

      &:nth-child(-n+3) .number{
        color: rgb(193, 13, 12);
      }

      &:hover {
        justify-content: space-between;
      }

      .left a {
        width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }  

      &:hover .left a{
        width: 100px;
      }

      &:hover .right {
        display: flex;
        margin-right: 10px;
      }

      .left {
        display: flex; 
        position: relative;
      }

      .right {
        display: none;
        position: relative;
      }

      .playItem {
        width: 19px;
        height: 18px;
        background-position: -266px -267px;
      }

      .addItem {
        width: 14px;
        height: 18px;
        background-position: 0px -698px;
        margin: 0 5px;
      }

      .collectItem {
        width: 19px;
        height: 18px;
        background-position: -295px -267px;
      }

      a {
        display: block;
      }

      .number { 
        width: 35px;
        text-align: center;
        font-size: 16px;
      }
    }
    
  }

`

export const RankingFooter = styled.div`
  display: flex;
  line-height: 32px;
  justify-content: flex-end;

  a {
    padding-right: 10px;
  }
`