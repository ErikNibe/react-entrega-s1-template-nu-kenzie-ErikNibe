import { useState } from 'react';
import './App.css';

import { HomePage } from './components/HomePage';
import { IndexPage } from './components/IndexPage';



function App() {
  const [isIndex, setIsIndex] = useState(true)

  function handleIndexPage() {
    if(isIndex) {
      setIsIndex(false);
    }
    else {
      setIsIndex(true);
    }
  }

  return (
    <div className='App'>
      {isIndex ? 
        <IndexPage handleIndexPage={handleIndexPage} />
      :
        <HomePage handleIndexPage={handleIndexPage}/>
      }
    </div>
  )
}

export default App
