import styled from 'styled-components';

export const ContactContainer = styled.div`
	width: 100%;
	height: 400px;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const NameWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
	margin-bottom: 10px;
	// background: red;
`


export const Name = styled.input`
	width: 50%;
	border: solid #4470ad 1px;

`

export const Nothing = styled.div`
	width: 1%;
`

export const Email = styled.input`
	margin-bottom: 10px;
	width: 40%;
	border: solid #4470ad 1px;
`

export const TypeArea = styled.textarea`
	width: 40%;
	height: 100px;
	border: solid #4470ad 1px;
`

export const Heading = styled.h1`
	font-weight: bold;
	text-align: left;
	font-size: 48px;
	color: #4470ad;
	margin-bottom: 50px;

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`

export const ButtonWrap = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`

export const Message = styled.p`
	color: green;
`