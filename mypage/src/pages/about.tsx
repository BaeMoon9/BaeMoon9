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
					안녕하세요 프론트엔드 개발자가 되고싶은 배문규입니다.<br />
					제 페이지를 방문해주셔서 감사합니다.<br />
					123123123123123123123123123123123123123123
				</Content>
			</TitleContent>
			<ContactContent screenType={screenType}>
				<Title>
					Contact
				</Title>
				<Content>
					{Contacts.map((contact, idx) => (
          <div key={idx} className="break-all">
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
	
	background-color: lightyellow;
`

const TitleContent = styled.div<{screenType : string}>`
	flex-direction: row;
	background-color: lightblue;
	flex-wrap: wrap;
	min-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '250px' : '400px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	
`

const ContactContent = styled.div<{screenType : string}>`
	flex-direction: row;
	background-color : lightgreen;
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

const ContactName = styled.span`
	font-weight: bold;
	font-size: 1.1em;
	color: #1f4596;
`

