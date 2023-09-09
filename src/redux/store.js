// tạo kho lưu global state của cả dự án ở đây
import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducer'
// cài thêm dev tool dành riêng cho redux
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools()

const store = createStore(rootReducer, composedEnhancers)

export default store