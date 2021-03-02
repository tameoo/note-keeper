import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import ErrorBoundary from './components/error-boundary';
import {NoteServiceProvider} from './components/note-service-context';
import NoteService from './services/';

const noteService = new NoteService();

ReactDOM.render(
  
  <Provider store={store}>
    <ErrorBoundary>
      <NoteServiceProvider value={noteService}>
        <Router>
          <App/>
        </Router>
      </NoteServiceProvider>
    </ErrorBoundary>
  </Provider>  

, document.getElementById('root'));
