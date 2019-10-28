import React from 'react';
import PortfolioGridLayout from './PortfolioGrid';
import Landing from './landing';
import './main.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PortfolioGridLayout />
      </header>
    </div>
  );
}

export default App;
