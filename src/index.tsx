import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import {App} from './App';


createServer({
  routes(){
    this.namespace = 'api';
    
    this.get('/inspections', () => {
      return [
        {
          id: 1,
          name: 'Gabriel Lopes',
          planned: 10,
          done: 10,
          createdAt: new Date()
        }
      ]
    })
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App/>

 
  </React.StrictMode>,
  document.getElementById('root')
);

