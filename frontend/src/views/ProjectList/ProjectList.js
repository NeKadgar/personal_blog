import React, {useEffect} from 'react';
import PostItem from './Posts/PostItem';
import { Link } from 'react-router-dom';

import './ProjectList.css'

const ProjectList = props => {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
     fetch('http://localhost:8000/api/posts/')
      .then(response => response.json())
      .then(posts => {
        setTimeout(() => {
          setPosts(posts)
          setLoading(false)
        }, 1)
      })
  }, []);

  return (
      <div className='projects'>
        <h1 className='projects_title'>Projects</h1>
        {posts.map((post, index) => {
          return (<Link to={"/Projects/"+post.id}><PostItem post={post} index={index} key={post.id}/></Link>)
        })}
      </div>
    );
}

export default ProjectList;