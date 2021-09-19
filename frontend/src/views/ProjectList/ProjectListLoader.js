import React from "react"

const ProjectListLoader = props => {
    return (
        <div>
            <div className='projects__post loading'>
                <div className='projects__post_info loading'>
                    <div className='projects__post_info_title h2'></div>
                    <p className='projects__post_info_desc'></p>
                </div>
                <div className='projects__post_preview loading'>
                    <div className='projects__post_preview_image img'/>
                </div>
            </div>
            <div className='projects__post loading'>
                <div className='projects__post_info loading'>
                    <div className='projects__post_info_title h2'></div>
                    <p className='projects__post_info_desc'></p>
                </div>
                <div className='projects__post_preview loading'>
                    <div className='projects__post_preview_image img'/>
                </div>
            </div>
        </div>
    )
}

export default ProjectListLoader;