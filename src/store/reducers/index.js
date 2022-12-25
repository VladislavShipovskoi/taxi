import {combineReducers} from "redux";
import auth from '../../features/Auth/reducer'
import registration from '../../features/Registration/reducer'
import address from '../../features/Address/reducer'
import routes from '../../features/Routes/reducer'
import card from '../../features/Profile/reducer'

export default combineReducers({auth, registration, address, routes, card})