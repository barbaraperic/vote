import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import middleware from './middleware/index'
import LoadingBar from 'react-redux-loading-bar'

const store = createStore(
  reducers,
  middleware
)

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
      <LoadingBar />
    </React.Fragment>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <ColorfulBorder />
    <App />
  </Provider>,
  document.getElementById('root')
);

