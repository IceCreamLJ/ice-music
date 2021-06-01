import { Redirect } from 'react-router-dom'

// 一级路由
import Discover from '@/pages/discover'
import Mine from '@/pages/mine'
import Friend from '@/pages/friend'

// 发现页 二级路由
import Recommend from '@/pages/discover/c-pages/recommend'
import TopList from '@/pages/discover/c-pages/toplist'
import PlayList from '@/pages/discover/c-pages/playlist'
import DJRaio from '@/pages/discover/c-pages/djradio'
import Artist from '@/pages/discover/c-pages/artist'
import Album from '@/pages/discover/c-pages/album'


const routeList = [
  {
    path: '/',
    exact: true,
    render: ()=>(
      <Redirect to="/discover"/>
    )
  },
  {
    path: '/discover',
    component: Discover,
    routes:[
      {
        path: '/discover',
        exact: true,
        render: ()=>(
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/toplist',
        component: TopList
      },
      {
        path: '/discover/playlist',
        component: PlayList
      },
      {
        path: '/discover/djradio',
        component: DJRaio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Album
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  }
]

export default routeList