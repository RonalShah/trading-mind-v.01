import './App.css'
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase';
import React, { useEffect } from 'react'
import {useInput} from './components/MainStoreProvider'
import Home from './components/home/Home';

function App() {



  const {chartData, dispatch} = useInput()

 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });
    return () => { unsubscribe(); };
  },
    [])



  return (
    <div className="App">


        {chartData.user ?        
          <Home/> : <SignIn />
        }



    </div>
  );
}

export default App;
