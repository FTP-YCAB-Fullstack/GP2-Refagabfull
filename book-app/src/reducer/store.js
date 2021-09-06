import { createStore } from 'redux'
import reducer from '../reducer/redux'

const store = createStore(reducer)

export default store