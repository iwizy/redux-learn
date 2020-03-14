import { createStore, combineReducers } from 'redux';
import applicationReducer from 'src/app/reducer';

const rootReducer = combineReducers({
  applicationReducer: applicationReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;