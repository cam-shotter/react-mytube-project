import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyBMn5EZDM6vWku0QxoCWhV2RFwn-XzOIdU"


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render( <App />, document.querySelector('.container'));
