import React, {useState, useEffect} from 'react';
import "./style.css";
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts'

import Alert from '../Alert'

const PostCreation = ({ currentId, setCurrentId }) => {

	const [postData, setPostData] = useState({
		title: "",
		tags: "",
		content: ""
	});

	const [raiseAlert, setRaiseAlert] = useState(false)
	const [alertMessage, setAlertMessage] = useState("")

	const dispatch = useDispatch();

	const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null);

	useEffect(() => {
		if(post) {
			setPostData(post)
		}
	}, [])


	const handleSubmit = (e) => {
		e.preventDefault()

		if (postData.title === "") {
			setRaiseAlert(true)
			setAlertMessage("Title ")
		} else if (postData.content === "") {
			setRaiseAlert(true)
			setAlertMessage("Content ")
		} else {

			if(currentId) {
			dispatch(updatePost(currentId, postData))
			} else {
				dispatch(createPost(postData));
			}

			setPostData({
			title: "",
			tags: "",
			content: ""
			})
		}
	}

	const RenderAlert = () => {
		if (raiseAlert) {
			return(
					<Alert color={"red"} message={`${alertMessage} cannot be empty.`} />
				)
		} else {
			return (
					<>
					</>
				)
		}
	}

	const cancel = () => {

	}

  	return (
  		<>
  			<div className="form-container">

	  			<form autoComplete="off" noValidate onSubmit={handleSubmit}>

	  			{RenderAlert()}

  				<h1 className="form-heading">Write Post</h1>

	  				<div className="inputs">

	  					<div className="ind-input">
		  					<input
	  						value={postData.title}
	  						onChange={(e) => setPostData({ ...postData, title: e.target.value})}
		  					 className="text-input" type="text" autoComplete="off" required name="title"/>
		  					<label  className="label">
		  						<span className="content">Title*</span>
		  					</label>
		  				</div>

	  					<div className="ind-input">
		  					<input 
	  						value={postData.tags}
	  						onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}
		  					className="text-input" type="text" autoComplete="off" required name="tags"  />
		  					<label  className="label">
		  						<span className="content">Tags (eg: #nav)</span>
		  					</label>
		  				</div>

	  					<div className="ind-input-area">
		  					<textarea 
		  					value={postData.content}
	  						onChange={(e) => setPostData({ ...postData, content: e.target.value})}
		  					className="area-input" type="text" autoComplete="off" required name="content"  />
		  					<label  className="label-area">
		  						<span className="content-area">Content*</span>
		  					</label>
		  				</div>

	  				</div>

	  				<div className="buttons">
	  					<button className="cancel-button" onClick={cancel}>Cancel</button>
	  					<button className="post-button" type="submit">Post</button>
	  				</div>

	  			</form>
  			</div>
  		</>
    
    );
}

export default PostCreation;