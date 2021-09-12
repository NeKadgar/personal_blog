import React from 'react'


const PostItem = post => {
    console.log('props', post.post)
    return (
        <div className='projects__post'>
            <div className='projects__post_info'>
                <h2 className='projects__post_info_title'>{post.post.title}</h2>
                <p className='projects__post_info_desc'>{post.post.description}</p>
            </div>
            <div className='projects__post_preview'>
                <img className='projects__post_preview_image' src={"http://localhost:8000"+post.post.preview_image} />
            </div>
        </div>
    )
}

export default PostItem