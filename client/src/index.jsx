import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import Jobs from './components/Jobs.jsx';

const App = () => {
  return (
    <div>
    <Form />
    <Jobs />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));