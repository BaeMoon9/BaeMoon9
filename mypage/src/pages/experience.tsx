import React, { ReactElement } from "react";
import useScreenSize from "../hooks/screenSize";
import styled from "styled-components";

function Experience() {

	type Contact = {
		name: string;
		date: string;
		text: ReactElement;
	}

	const Contacts: Contact[] = [
		{
			name: "LINC3.0 캡스톤디자인 경진대회",
			date: "2022.10",
			text: (
				<>
					독서 장려 애플리케이션 '읽기장' 프로젝트로 장려상을 수상했습니다. <br />
					프론트엔드 부분을 맡아 React-Native로 UI를 제작하였습니다.<br />
					<a>'읽기장' 소개영상</a>
				</>
			)
		},
		{
			name: "태국 방콕 기술 전시회",
			date: "2023.02",
			text: (
				<>
				</>
			),
		},
		{
			name: "Velog",
			date: "323",
			text: (
				<>
				</>
			),
		}
	]

const { screenWidth, screenHeight, screenType, isLoaded } = useScreenSize()


return (
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

const Container = styled.div<{ screenType: string }>`
	display: flex;
	flex-direction: column;
	min-width: ${(props) => (props.screenType === 'Pc' ? '1100px' :
		(props.screenType === 'Tablet' ? '600px' : '400px')
	)};
    background-color: gray;
`

const SkillContent = styled.div<{ screenType: string }>`
	flex-direction: row;
	
	flex-wrap: wrap;
	min-width: ${(props) => (props.screenType === 'Pc' ? '600px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '800px' :
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
		flex-wrap: wrap;
		margin-top: 2px;
		margin-bottom: 2px;
`

const ExperienceTitle = styled.div<{ screenType: string }>`
    min-width: ${(props) => (props.screenType === 'Pc' ? '230px' :
		(props.screenType === 'Tablet' ? '180px' : '160px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '250px' :
		(props.screenType === 'Tablet' ? '200px' : '200px')
	)};

`

const ExperienceContent = styled.div<{ screenType: string }>`
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