import React from 'react';
import './App.css'
import Header from './Header';
import Bio from './Bio';
import Hobbies from './Hobbies';
import Footer from './Footer';

function App() {
  const name = 'Mahesh Kumar';
  const bio = 'I am a passionate developer learning React to build amazing applications.';
  const hobbies = ['Coding', 'Reading', 'Gaming'];
  const email = 'mahesh@example.com';

  return (
    <div>
      <Header name={name} />
      <Bio bio={bio} />
      <Hobbies hobbies={hobbies} />
      <Footer email={email} />
    </div>
  );
}

export default App;
