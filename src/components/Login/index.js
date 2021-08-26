import React from 'react';
import {GoogleLogin} from 'react-google-login';
import Icon from './icon';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import "./style.css"

const Login = () => {

	const dispatch = useDispatch();
	const history = useHistory();

	const googleSuccsess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;

		try {
			dispatch({type: "AUTH", data: { result, token }})

			history.push('/')
		} catch (error) {
			console.log(error)
		}
	}

	const googleFailure = (error) => {
		console.log(error)
		console.log("Google Login failed. Try again.")
	}


	return(
		<>
			<div className="login-main-container">

				<div className="login-modal-container">

					<h1 className="login-modal-heading">Login</h1>

					<p className="login-modal-explain">Login using your Google account in order to save and share routes and write posts. </p>

					<GoogleLogin
					clientId="807122675015-br61qvckrimp5nvd35m7uf13khlp1dhu.apps.googleusercontent.com"
					render={(renderProps) => (
						<button className="google-login-button"
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
						startIcon={<Icon />}
						>Sign In With Google</button>)}

						onSuccess={googleSuccsess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"			
					 />

					 <button className="login-home-button" onClick={() => history.push('/')}>Back To Home
						</button>

				</div>
			</div>
			
		</>
		)
};

export default Login;