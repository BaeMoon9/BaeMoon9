import React from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";
import { stringify } from "querystring";
import About from "./about";

function Main(){

	const { screenWidth, screenHeight, screenType, isLoaded } = useScreenSize()

	return(
		<Container screenType={screenType}>
				{/* 스크린 타입은 {screenType} 입니다.
				스크린 크기는 {screenWidth} 입니다. */}
				<About />
 		</Container>
	)
}

export default Main;

const Container = styled.div<{screenType : string}>`
	display: flex;
	flex-direction: column;
	min-width: ${(props) => (props.screenType === 'Pc' ? '1280px' :
		(props.screenType === 'Tablet' ? '600px' : '450px')
	)};
	align-items: center;
`
