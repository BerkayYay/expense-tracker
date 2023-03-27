import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from './reducers';
export default configureStore({
  reducer: categoryReducer,
});
