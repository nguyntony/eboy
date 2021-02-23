import {combineReducers} from 'redux'
// in order to have a master reducers directory you will need to import the combinedReducers and you can create an allReducers or rootReducers like so.
import gamesReducer from './gamesReducer'

const rootReducer = combineReducers({
  games: gamesReducer,
})

export default rootReducer
// export so that we can import this into our index.js (root)