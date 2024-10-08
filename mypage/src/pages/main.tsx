import React from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";
import About from "./about";
import Skill from "./skill";
import Education from "./education";
import Experience from "./experience";
import Etc from "./etc";

function Main(){

	const { screenType } = useScreenSize()

	return(
		<Container screenType={screenType}>
				{/* 스크린 타입은 {screenType} 입니다.
				스크린 크기는 {screenWidth} 입니다. */}
				<About />
				<Divider screenType={screenType}/>
				<Skill />
				<Divider screenType={screenType}/>
				<Education />
				<Divider screenType={screenType}/>
				<Experience />
				<Divider screenType={screenType}/>
				<Etc />
 		</Container>
	)
}

export default Main;

const Container = styled.div<{screenType : string}>`
	display: flex;
	flex-direction: column;
	min-width: ${(props) => (props.screenType === 'Pc' ? '1200px' :
		(props.screenType === 'Tablet' ? '600px' : '400px')
	)};
	align-items: center;
	margin-bottom: 40px;
	
`

const Divider = styled.hr<{screenType : string}>`
	width: ${(props) => (props.screenType === 'Pc' ? '1100px' :
		(props.screenType === 'Tablet' ? '800px' : '400px')
	)};
	border: 0px;
 	border-top: 1px solid;
	border-color: lightgray;
  	margin-top: ${(props) => (props.screenType === 'Pc' ? '20px' :
		(props.screenType === 'Tablet' ? '15px' : '10px')
	)};
  	margin-bottom: ${(props) => (props.screenType === 'Pc' ? '20px' :
		(props.screenType === 'Tablet' ? '15px' : '10px')
	)};
`
