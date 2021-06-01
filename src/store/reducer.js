import { combineReducers } from 'redux-immutable'
import { recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { playerReducer } from '@/pages/player/store'

const reducer = combineReducers({
  recommend: recommendReducer,
  songs: playerReducer
})

export default reducer