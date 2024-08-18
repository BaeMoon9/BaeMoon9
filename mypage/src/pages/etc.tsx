import React, { ReactElement } from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";


function Etc () {

	type Contact = {
		name: string;
		date: string;
		text: ReactElement;
	}

	const Contacts: Contact[] = [
		{
			name: "정보처리 산업기사",
			date: "2022.11",
			text: (
				<>
					
				</>
			)
		},
		{
			name: "영남이공대학교 소프트웨어융합과",
			date: "2023.03~",
			text: (
				<>
					현재 대학교 내 학과 소속 조교로 근무하고 있습니다.<br />
					학과 강의실의 pc 및 장비들을 관리하고 있으며 교수님및 재학생들과 소통하며 학과 환경 개선에 신경쓰고 있습니다.
				</>
			)
		},
	]

	const { screenType } = useScreenSize()

	return(
		<Container screenType={screenType}>
		<SkillContent screenType={screenType}>
			<Title>Etc.</Title>
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
	min-width: ${(props) => (props.screenType === 'Pc' ? '600px' :
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
    min-width: ${(props) => (props.screenType === 'Pc' ? '260px' :
		(props.screenType === 'Tablet' ? '250px' : '160px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '270px' :
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

export default Etc;