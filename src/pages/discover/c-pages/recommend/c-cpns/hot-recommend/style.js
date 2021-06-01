import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  padding-bottom: 35px;

  .albumCover {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
  }

  .coverItem {
    width: 140px;
    margin: 0 0 30px 42px;

    &:nth-child(4n+1) {
      margin-left: 0;
    }
  }
`