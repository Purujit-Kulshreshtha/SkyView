import React from 'react';
import PostCreation from '../components/PostCreation'
import PostPresentation from '../components/PostPresentation'

const Temp = ({currentId, setCurrentId}) => {
  return (
  		<>
  			<PostCreation currentId={currentId} setCurrentId={setCurrentId}/>
  			<PostPresentation currentId={currentId} setCurrentId={setCurrentId}/>
  		</>
    
    );
}

export default Temp;