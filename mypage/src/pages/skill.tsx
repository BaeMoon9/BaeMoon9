import React from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";

function Skill () {

    const { screenWidth, screenHeight, screenType, isLoaded } = useScreenSize()


    return(
        <Container screenType={screenType}>
            <SkillContent screenType={screenType}>
            <Title>Skill</Title>
            <Content>
                <ContentLi>Front-End: JavaScript, TypeScript, React.js</ContentLi>
                <ContentLi>Back-End: Node.js</ContentLi>
                <ContentLi>DataBase: MySQL, MariaDB</ContentLi>
            </Content>
            </SkillContent>
        </Container>
    )
}

const Container = styled.div<{screenType : string}>`
	display: flex;
	flex-direction: column;
	min-width: ${(props) => (props.screenType === 'Pc' ? '1100px' :
		(props.screenType === 'Tablet' ? '600px' : '400px')
	)};
    background-color: gray;
`

const SkillContent = styled.div<{screenType : string}>`
	flex-direction: row;
	
	flex-wrap: wrap;
	min-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	background-color: lightblue;
	
`

const Title = styled.h2`
	font-size: 1.5em;
    font-weight: bold;
	color: #1f4596;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	line-height: 1.7;
`
const ContentLi = styled.li`
    margin-left: 4px;
`

export default Skill