import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SpellApiComponent from './components/spell/Spell';
import CharacterApiComponent from './components/character/Character';
import Menu from './components/menu/Menu';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/spells" element={<SpellApiComponent />} />
            <Route path="/characters" element={<CharacterApiComponent />} />
            <Route path="/books" element={<SpellApiComponent />} />
            <Route path="/houses" element={<CharacterApiComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;