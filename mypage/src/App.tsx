import React from 'react';
import './App.css';
import Main from './pages/main';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Container>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Container>
  );
}

export default App;


const Container = styled.div`

`