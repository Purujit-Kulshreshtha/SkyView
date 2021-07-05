import React, {useState} from 'react';
import {ContactContainer, NameWrapper, Name, Email, TypeArea, Heading, ButtonWrap, Nothing, Message} from './ContactElements'
import {ButtonNormal as Button} from '../ButtonElement'

const Contact = () => {

	const [message, setMessage] = useState();

	const submit = () => {
		setMessage("Thank you for contacting us. Your response has been submitted!")
	}

	return(
		<ContactContainer id="contact">

			<Heading>Contact Us</Heading>

			<NameWrapper>
				<Name placeholder="First-Name"/>
				<Nothing />
				<Name placeholder="Last-Name"/>
			</NameWrapper>

			<Email placeholder="Email"/>

			<TypeArea placeholder="Comments, queries or feedback..." />
			<ButtonWrap>
				<Button  onClick={submit} primary={true} dark={true}>Submit</Button>
			</ButtonWrap>
			<Message>{message}</Message>
		</ContactContainer>
		)
};

export default Contact