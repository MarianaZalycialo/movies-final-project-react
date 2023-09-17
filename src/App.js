import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes, Navigate} from "react-router-dom";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import GenresList from "./components/GenresList/GenresList";
import classnames from 'classnames';
import {useState} from "react";

function App() {

    const [mode, setMode] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  useEffect(()=> {
      setMode(localStorage.getItem('theme'));
  }, []);


  const themeMode = (newMode) => {
      setMode(newMode);
  }

  const classNames = classnames({
      'App': true,
      'light': mode === 'light',
      'dark': mode === 'dark'
  })

  return (
    <div className={classNames}>
      <Header themeMode={themeMode}/>
      <Routes>
          <Route path="/" element={ <Navigate to="/movies" /> } />
        <Route path="/movies" element={<MoviesList type={'movies'}/>} />
        <Route path="/movie-details/:id" element={<MovieDetails/>} />
        <Route path="/genres" element={<GenresList/>} />
        <Route path="/genres/:id" element={<MoviesList type={'genres'}/>} />
        <Route path="/search" element={<MoviesList type={'search'}/>} />
      </Routes>
    </div>
  );
}

export default App;
