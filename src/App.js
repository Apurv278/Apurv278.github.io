import React, { useEffect, useState } from 'react';
import Pages from './pages';
import { ErrorBoundary } from './ErrorBoundry';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/apurv278')
      .then(res => res.json())
      .then(user => {
         setUser(user); 
    });
  }, []);

  if(!user){
    return <div />;
  }

  return <ErrorBoundary> <Pages user = {user} /> </ErrorBoundary>;
}

export default App;
