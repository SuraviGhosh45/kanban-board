import React from 'react';
import Brand from './components/Brand';
import Menu from './components/Menu';
import Section from './components/Section';

const App = () => {
  return (
    <div className="w-[90vw] min-h-screen bg-opacity-70 mx-auto my-10 rounded-2xl shadow-2xl bg-white relative p-4">
      <header className="w-full px-6 py-4">
        <Brand />
      </header>
      <Menu />
      <Section />
    </div>
  );
};

export default App;
