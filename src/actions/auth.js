import * as api from '../api';

export const signin = (data, history) => async (dispatch) => {

	try {

		const {data} = awaitapi.signIn{data};

		dispatch(type: "AUTH", data)

		history.push("/");

	} catch (error) {
		console.log(error)
	}
}