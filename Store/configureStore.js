import {createStore} from 'redux'
import toggleFavorite from './Reducer/favoriteReducer'
import setAvatar from './Reducer/avatarReducer'
import { persistCombineReducers } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const rootPersistconfig = {
    key: 'root',
    storage: storage
}

export default createStore(persistCombineReducers(rootPersistconfig,{toggleFavorite, setAvatar}));