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
					<a href="https://www.youtube.com/watch?v=8rDKsbk1xuQ&list=PLwWUOs74Y2rJxDaK2EeHyXxZjFszMfPXe&index=29"
						style={{ color: "lightslategray" }}
					>('읽기장' 소개영상)</a>
				</>
			)
		},
		{
			name: "태국 방콕 기술 전시회",
			date: "2023.02",
			text: (
				<>
					좋은 기회로 태국 방콕 기술 전시회에 참여하였습니다.< br/>
					음식물 상태 확인이 가능한 '셀프 반찬통' 프로젝트에 참여하였습니다.<br />
					프론트엔드 부분을 맡아 React-Native로 UI를 제작하였습니다.<br />
					<a href="https://www.nspna.com/country/?mode=view&newsid=622828"
					style={{ color: "lightslategray" }}
					>(전시회 체험수기 발표회)</a>
				</>
			),
		},
		{
			name: "노트북 대여",
			date: "2024.03~2024.05",
			text: (
				<>
					대학교 학과 내 노트북을 재학생에게 대여 및 관리하는 페이지 입니다.< br/>
					평소에 수기형식으로 관리를 하던 노트북 정보를 좀더 쉽고 안전하게 관리하기 위해 만들게 되었습니다.<br />
					React 기반 웹 페이지로 Nodejs, MariaDB를 이용하여 노트북의 정보를 관리하고 있습니다.
					개인적으로 반응형 css의 부재와 redux를 이용한 state 관리가 없다는것이 아쉬웠습니다.< br/>
					첫 개인 프로젝트인만큼 부족함과 개선해야할 점이 많은 프로젝트입니다.<br />
					<a href="https://github.com/BaeMoon9/laptop"
					style={{ color: "lightslategray"}}
					>(Github - laptop)</a>
				</>
			),
		},
		{
			name: "포트폴리오",
			date: "2024.08~",
			text: (
				<>
					지금 현재 페이지인 포트폴리오 페이지 입니다.< br/>
					Typescript, React, styled-component를 이용하여 노트북 대여 프로젝트에 없었던 반응형 스타일을 추가하게 되었습니다.<br />
					
					<a href="https://github.com/BaeMoon9/BaeMoon9"
					style={{ color: "lightslategray"}}
					>(Github - BaeMoon9)</a>
				</>
			),
		}
	]

const { screenType } = useScreenSize()


return (
	<Container screenType={screenType}>
		<SkillContent screenType={screenType}>
			<Title>Experience & Projects</Title>
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
		(props.screenType === 'Tablet' ? '750px' : '400px')
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
	font-size: 1.12em;
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

export default Experience;