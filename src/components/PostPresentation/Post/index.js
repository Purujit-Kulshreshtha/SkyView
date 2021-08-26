import React, {useState}  from 'react';
import './style.css';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import User from '../../../images/user.svg';
import DeleteAlert from './DeleteAlert'


const Post = ({post, currentId, setCurrentId}) => {

	// const [profilePicture, setProfilePicture] = useState("");
	var profilePicture; //temporary until login API is complete. Once user has logged in, DP will be fetched and stored in the above useState.

	// const [username, setUsername] = useState()
	var username; //same as profile picture
	const [deleteAlert, setDeleteAlert] = useState(false)

	const editPost = () => {
		setCurrentId(post._id)
	}

	const deletePostFunctioin = () => {
		// dispatch(deletePost(post._id))

		setDeleteAlert(true)
		
	}

	const RenderDeleteAlert = () => {
		if (deleteAlert) {
			return (
				<DeleteAlert id={post._id} deleteAlert={deleteAlert} setDeleteAlert={setDeleteAlert} />
				)
		} else {
			return (
				<>
				</>
				)
		}
	}

	return(
		<>
			{RenderDeleteAlert()}
			<div className="post-container">
				<div className='header-container'>

					<img className="profile-picture" src={profilePicture || User} width="60" alt="User's profile." />

					<div className="title-container">
						<h1 className="post-title">{post.title}</h1>
						<h6 className="username">{username || "Unknown User"}</h6>
					</div>

					<div className="icons-container">
						<FaEdit className="edit-icon" onClick={editPost} />
						<FaTrashAlt className="trash-icon" onClick={deletePostFunctioin}/>
					</div>

				</div>
				<div className="tags-container">
					{
						post.tags.map(tag => {
							return(
									<h3 className="post-tag">{`#${tag}`} &nbsp;</h3>
								)
						})
					}
				</div>
				<p className="post-content">{post.content}</p>
			</div>
		</>
		)
}

export default Post;