import React from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";

function Education() {

	type Contact = {
		name: string;
		date: string;
	}

	const Contacts: Contact[] = [
		{
			name: "영남이공대학교 소프트웨어콘텐츠학과 학사",
			date: "2018.03 ~ 2024.02",
		},
	]

	const { screenType } = useScreenSize()


	return (
		<Container screenType={screenType}>
			<SkillContent screenType={screenType}>
				<Title>Education</Title>
				<Content>
					{Contacts.map((contact, idx) => (
						<MyExperience key={idx}>
							<ExperienceTitle screenType={screenType}>{contact.date}</ExperienceTitle>
							<ExperienceContent screenType={screenType}>{contact.name}</ExperienceContent>
						</MyExperience>
					))}
				</Content>
			</SkillContent>
		</Container>
	)
}

const Container = styled.div<{ screenType: string }>`
	display: flex;
	flex-direction: column;
	min-width: ${(props) => (props.screenType === 'Pc' ? '1100px' :
		(props.screenType === 'Tablet' ? '600px' : '400px')
	)};
    
`

const SkillContent = styled.div<{ screenType: string }>`
	flex-direction: row;
	
	flex-wrap: wrap;
	min-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '1050px' :
		(props.screenType === 'Tablet' ? '700px' : '400px')
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

const MyExperience = styled.div`
    display: flex;
    flex-direction: row;
		flex-wrap: wrap;
		margin-top: 5px;
		margin-bottom: 20px;
`

const ExperienceTitle = styled.div<{ screenType: string }>`
    min-width: ${(props) => (props.screenType === 'Pc' ? '300px' :
		(props.screenType === 'Tablet' ? '250px' : '160px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '320px' :
		(props.screenType === 'Tablet' ? '250px' : '200px')
	)}
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 1.13em;
`

const ExperienceContent = styled.div<{ screenType: string }>`
    	min-width: ${(props) => (props.screenType === 'Pc' ? '400px' :
		(props.screenType === 'Tablet' ? '400px' : '300px')
	)};
		max-width: ${(props) => (props.screenType === 'Pc' ? '650px' :
		(props.screenType === 'Tablet' ? '450px' : '400px')
	)};
   		word-wrap: break-word;
`

export default Education;