
import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import MainRouter from './mainRouter'
import Home from './home'
import TradeScreen from './tradeScreen'

import Header from './header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainRouter/>
    </BrowserRouter>
  );
}
