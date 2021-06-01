import React, { memo, useState } from 'react';

import { titleRelations } from '@/common/data-relation';
import classnames from 'classnames'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight } from '../app-header/style'

const getLink = (item=>{
  if(item.jumpOtherLink){
    return <a target="_blank" rel="noreferrer" key={item.title} href={item.link}>{item.title}</a>
  }else {
    return <Link exact="true" key={item.title} to={item.link}>{item.title}</Link>
  }
})

const IceAppHeader = memo(() => {
  const [checkId, setChecked] = useState(0)

  return (
    <HeaderWrapper>
      <div className="header">
        <div className="wrap-v1 flex-header">
          <HeaderLeft>
            <a href="/#" className="logo sprite_01"></a>

            <div className="titleBox">
              {titleRelations.map((item,index)=>(
                <div className={classnames('titleItem', { checked: checkId == index})}
                     onClick={()=> setChecked(index <=2 ? index : checkId )}
                     key={item.title}>
                  {getLink(item,index)}
                </div>
              ))}
            </div>
           
          </HeaderLeft>
          
          <HeaderRight>
               <Input className="search"
                      placeholder="音乐/视频/电台/用户" 
                      prefix={<SearchOutlined />} />   

               <div className="center">
                 <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter">
                   创作者中心</a>
                 </div>
               <div className="login"><a>登录</a></div>       
          </HeaderRight>
        </div>
      </div> 
      <div className="line"></div>
    </HeaderWrapper>
  );
});

export default IceAppHeader;