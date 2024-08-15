import React from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";

function Education () {

    const { screenType } = useScreenSize()


    return(
        <Container screenType={screenType}>
            <SkillContent screenType={screenType}>
            <Title>Education</Title>
            <Content>
                {/* <ContentLi>2018.03 ~ 2023.02 영남이공대학교 컴퓨터정보과</ContentLi> */}
                <ContentLi>2018.03 ~ 2024.02 영남이공대학교 소프트웨어콘텐츠학과 학사</ContentLi>
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
    list-style-type: none;
`

export default Education;