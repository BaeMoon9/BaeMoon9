import React from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";

function Experience () {

    type Contact = {
		name: string;
        date: string;
		text: string;
	}
	
	const Contacts: Contact[] = [
		{
			name: "2022 LINK3.0 캡스톤디자인",
            date: "323",
			text: "dfasdfasdfasdfasfasasdfasdffasdfafdfasfsdfasfsdfasdfdfasfsadf"
		},
		{
			name: "Github",
            date: "323",
			text: "내용",
		},
		{
			name: "Velog",
            date: "323",
			text: "내용",
		}
	]

    const { screenWidth, screenHeight, screenType, isLoaded } = useScreenSize()


    return(
        <Container screenType={screenType}>
            <SkillContent screenType={screenType}>
            <Title>Experience</Title>
            <Content>
            {Contacts.map((contact, idx) => (
          <MyExperience key={idx}>
            <ExperienceTitle screenType={screenType}>{contact.name}<br />{contact.date}</ExperienceTitle>
            <ExperienceContent screenType={screenType}>{contact.text}</ExperienceContent>
          </MyExperience>
        ))}
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
	max-width: ${(props) => (props.screenType === 'Pc' ? '600px' :
		(props.screenType === 'Tablet' ? '500px' : '400px')
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
    list-style-type: none;
`

const MyExperience = styled.div`
    display: flex;
    flex-direction: row;
`

const ExperienceTitle = styled.div<{screenType : string}>`
    min-width: ${(props) => (props.screenType === 'Pc' ? '140px' :
		(props.screenType === 'Tablet' ? '130px' : '100px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '140px' :
		(props.screenType === 'Tablet' ? '130px' : '100px')
	)};

`

const ExperienceContent = styled.div<{screenType : string}>`
    min-width: ${(props) => (props.screenType === 'Pc' ? '400px' :
		(props.screenType === 'Tablet' ? '400px' : '300px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '600px' :
		(props.screenType === 'Tablet' ? '450px' : '300px')
	)};
	background-color: blue;
    word-wrap: break-word;

`

export default Experience;