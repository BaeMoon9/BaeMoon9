import React from 'react';
import './App.css';
import Main from './pages/main';
import styled from 'styled-components';
import useScreenSize from './hooks/screenSize';
import { Routes, Route } from 'react-router-dom'

function App() {

	const { screenWidth, screenHeight, screenType, isLoaded } = useScreenSize()

  return (
    <Container screenType={screenType}>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Container>
  );
}

export default App;


const Container = styled.div<{screenType : string}>`
	display: flex;
	justify-content: center;
	min-height: 700px;
	margin-top: ${(props) => (props.screenType === 'Pc' ? '20px' :
		(props.screenType === 'Tablet' ? '15px' : '10px')
	)};
	)}
	
`