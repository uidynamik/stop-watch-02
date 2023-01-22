import React from 'react';
import './style.css';
import { Header } from './components/Header';
import { Time } from './components/Time';
import { Actions } from './components/Actions';

export default function App() {
  return (
    <div className="parent">
      <div className="main">
        <Header />
        <Time hours="00" minutes="00" seconds="00" milliseconds="00" />
        <Actions />
      </div>
    </div>
  );
}
