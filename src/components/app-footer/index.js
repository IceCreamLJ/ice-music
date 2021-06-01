import React, { memo } from 'react';

import { footerLink, certificateInfo } from '@/common/data-relation'
import { iconTitleList } from '../../common/data-relation'

import { FooterWrapper, FooterLeft, FooterRight } from './style'

const getRulesPosition = ((item)=>(
  <div className="certItem" key={item.id}>{item.title}
    { item.link && <a target="_blank" rel="noreferrer" href={item.link}>{item.content}</a>}
  </div>
))

const IceAppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrap-v2 footer">
        <FooterLeft>
          <div className="footerLine">
            {footerLink.map(item=>(
              <a className="help" 
                target="_blank" 
                key={item.title} 
                href={item.link}>
                  {item.title}
              </a>
            ))}
          </div>

          <div className="certficateGroup">
            {certificateInfo.map(item=>getRulesPosition(item))}
          </div>    

        </FooterLeft>

        <FooterRight>
           {iconTitleList.map(item=>(
             <div className="iconWrap" key={item}>
                <div className="footItem sprite_footer"></div>
                <div>{item}</div>
             </div>
            ))} 
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});

export default IceAppFooter;