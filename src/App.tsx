import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<QuestionPage />} path="/Question" />
        <Route element={<ResultPage />} path="/Result" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
