import React from 'react';
import Post from './Post'
import "./posts.css";
import {useSelector} from 'react-redux';


const PostPresentation = ({ currentId, setCurrentId }) => {

	const posts = useSelector((state) => state.posts);

  return (
  		<>
  			<div className="posts-container">
	  			{ 
  					posts.map(post => {
  						return (
  								<Post post={post} currentId={currentId} setCurrentId={setCurrentId} />
  							)
  					})
  				}
  			</div>
  		</>
    
    );
}

export default PostPresentation;