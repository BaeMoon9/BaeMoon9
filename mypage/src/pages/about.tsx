import React from "react";
import styled from 'styled-components';
import useScreenSize from "../hooks/screenSize";



function About() {

	type Contact = {
		name: string;
		link: string;
		text?: string;
	}
	
	const Contacts: Contact[] = [
		{
			name: "Email",
			link: "bmgbm9@naver.com",
		},
		{
			name: "Github",
			link: "https://github.com/BaeMoon9",
		},
		{
			name: "Velog",
			link: "https://velog.io/@9yubm/posts"
		}
	]

	const { screenWidth, screenHeight, screenType, isLoaded } = useScreenSize()

	return(
		<Container screenType={screenType}>
			<TitleContent screenType={screenType}>
				<Title>
					About Me
				</Title>
				<Content>
					안녕하세요 프론트엔드 개발자 배문규입니다.<br />
					현재 대학교 학과에서 근무하고 있습니다.<br />
					
				</Content>
			</TitleContent>
			<ContactContent screenType={screenType}>
				<Title>
					Contact
				</Title>
				<Content>
					{Contacts.map((contact, idx) => (
          <div key={idx}>
            <ContactName>{contact.name}</ContactName>&nbsp;
            <a href={contact.link}>{contact.text || contact.link}</a>
          </div>
        ))}
				</Content>
			</ContactContent>
		</Container>
	)

}

export default About;

const Container = styled.div<{screenType : string}>`
	display: flex;
	justify-content: center; 
	flex-direction: row;
	flex-wrap: wrap;
	min-width: ${(props) => (props.screenType === 'Pc' ? '1280px' :
		(props.screenType === 'Tablet' ? '600px' : '450px')
	)};
	
`

const TitleContent = styled.div<{screenType : string}>`
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

const ContactContent = styled.div<{screenType : string}>`
	flex-direction: row;
	
	min-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	background-color: lightgreen;
	
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
	margin-left: 4px;
	
`

const ContactName = styled.span`
	font-weight: bold;
	font-size: 1.1em;
	color: #1f4596;
`



