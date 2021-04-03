import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import About from "./routes/about"
import Home from "./routes/home"
import Navigation from "./components/Navigation"
import Detail from "./components/Detail"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}
export default App;