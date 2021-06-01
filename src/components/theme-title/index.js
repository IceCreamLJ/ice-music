import React, { memo } from 'react';

import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import { RcmTitleWrapper, RcmTitleLeft, RcmTitleRight } from "./style";


const IceThemeTitle = memo((props) => {
  return (
    <RcmTitleWrapper>
      <RcmTitleLeft>
        <div className="hotTitle">{props.title}</div>
        { props.keywords.map(item=>(
          <div key={item.id} className="titleItem">
            <NavLink to={item.link}>{item.name}</NavLink></div>
        ))} 
      </RcmTitleLeft>
      
      <RcmTitleRight>
        更多
      </RcmTitleRight>
    </RcmTitleWrapper>
  );
});

IceThemeTitle.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

IceThemeTitle.defaultProps = {
  keywords: []
}

export default IceThemeTitle;


