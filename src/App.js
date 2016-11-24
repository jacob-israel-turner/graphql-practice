import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import './App.css';
import 'graphiql/graphiql.css'

function graphiqlFetcher(params) {
  return fetch('http://localhost:9001/q', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  }).then(response => response.json());
}

class App extends Component {
  render() {
    return (
      <div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0
			}}>
				<GraphiQL fetcher={graphiqlFetcher} />
      </div>
    );
  }
}

export default App;
