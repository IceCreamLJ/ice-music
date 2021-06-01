import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  position: relative;
  width: ${props => props.width + 'px'};
  height: 150px;
  margin-left: 11px;


  img {
    width: ${props => props.size + 'px'};
    margin-bottom: 7px;
  }

  .mask {
    width: ${props => props.width + 'px'};
    height: ${props => props.size + 'px'};
    background-position: 0px ${props => props.bgp }
  }

  a {
    width: ${props => props.size + 'px'};
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 18px;
  }

  .name {
    color: #000;
  }

  .user {
    color: rgb(102, 102, 102);
  }
`