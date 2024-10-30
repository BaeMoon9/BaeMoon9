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

	const  { screenType } = useScreenSize()

	return(
		<Container screenType={screenType}>
			<TitleContent screenType={screenType}>
				<Title>
					About Me
				</Title>
				<Content>
					안녕하세요 신입 개발자 배문규입니다.<br />
					배우고 성장할 수 있다는것에 늘 감사하고 행복한 개발자 입니다.
					아직 많이 부족하기에 노력하고 성장해서 제 주변에 도움이 되는 개발자가 되고싶습니다.<br />
					여러 사람들과의 의사소통을 중요하게 생각합니다.
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
            <a href={contact.link} target='_blank' style={{ color: "lightslategray"}}>{contact.text || contact.link}</a>
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
		(props.screenType === 'Tablet' ? '390px' : '390px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '550px' :
		(props.screenType === 'Tablet' ? '390px' : '390px')
	)};
	margin-right:10px;
`

const ContactContent = styled.div<{screenType : string}>`
	flex-direction: row;
	min-width: ${(props) => (props.screenType === 'Pc' ? '540px' :
		(props.screenType === 'Tablet' ? '400px' : '400px')
	)};
	max-width: ${(props) => (props.screenType === 'Pc' ? '540px' :
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
	margin-left: 4px;
	
`

const ContactName = styled.span`
	font-weight: bold;
	font-size: 1.1em;
	color: #1f4596;
`



