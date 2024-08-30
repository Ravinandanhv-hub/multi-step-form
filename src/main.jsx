import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import stepCountReducer from './Reducers/StepCount'
import formDataReducer from './Reducers/formData.js'

const rootReducers = combineReducers({
  step: stepCountReducer,
  formData: formDataReducer
});

const  store = createStore(rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
