import React, { memo } from 'react';

import { discoverNav } from '@/common/data-relation'
import { renderRoutes } from 'react-router-config'

import { NavLink } from 'react-router-dom'
import { DiscoverWrapper } from './style';

const IceDiscover = memo((props) => {
  return (
    <DiscoverWrapper>
        <div className="topWrap">
          <div className="wrap-v1">
            <div className="navWrap">
              {discoverNav.map(item=>(
                <NavLink key={item.title} to={item.link}>{item.title}</NavLink>
              ))}
            </div>
          </div>
        </div>
 
      {renderRoutes(props.route.routes)}
            
    </DiscoverWrapper>
  );
});

export default IceDiscover;