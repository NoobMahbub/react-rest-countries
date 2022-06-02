
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Spinner from './components/Spinner/Spinner';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">

      {
        loading ? (
          <Spinner></Spinner>
        ) : (
          <Countries></Countries>
        )
      }
    </div>
  );



}



export default App;
