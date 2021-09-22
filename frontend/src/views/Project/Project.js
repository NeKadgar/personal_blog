import React, {useEffect} from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../EditorTools';
import './Project.css'


const Project = props => {
    const [post, setPosts] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        document.title = "Project"
        fetch('/api/posts/'+props.match.params.id)
         .then(response => response.json())
         .then(post => {
             setPosts(post)
             setLoading(false)
             document.title = post.title
         });
     }, [props.match.params.id]);

    return (
        <div className='project'>
            <h1 className='project_title'>{ post.title }</h1>
            {loading || <EditorJs readOnly={true} data={post.body_editorjs} tools={EDITOR_JS_TOOLS} editorInstance={instance => (this.editorInstance = instance)} />}
            {/* <EditorJs editorInstance={instance => (this.editorInstance = instance)} data={post.body_editorjs} tools={EDITOR_JS_TOOLS}/> */}
        </div>
    );
}

export default Project;