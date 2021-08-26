import React from 'react';
import {useDispatch} from 'react-redux';
import {deletePost} from '../../../actions/posts';
import "./style.css"

const DeleteAlert = ({ id, deleteAlert, setDeleteAlert }) => {

	const dispatch = useDispatch()

	const deletePostFunction = () => {
		dispatch(deletePost(id))
		setDeleteAlert(false)
	}

	const cancelDelete = () => {
		setDeleteAlert(false)
	}

	return(
		<>
			<div className="delete-alert-overlay">
				<div className="delete-alert-container">

					<h1 className="delete-alert-message">Are you sure you want to delete this post?</h1>

					<div className="delete-alert-buttons">
						<button className="delete-cancel-button" onClick={	cancelDelete}>No, take me back.</button>
						<button className="delete-alert-button" onClick={deletePostFunction}>Yes, delete.</button>
					</div>

				</div>

			</div>
		</>
		)
}

export default DeleteAlert;
