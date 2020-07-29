import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { EDITOR_API_KEY } from '../config';
//useDispatch - hook e vor@ veradardznum e hxum depi Redux store.
import { useDispatch } from 'react-redux';
// import enq anum add funkcian
import { add } from '../store/posts';
//useHistory ֊ ը հասանելի է սարքրւմ history֊ի օրինակը, որը կարող ենք օգտագործել նավիգացիայի համար․
import { useHistory } from 'react-router-dom';



function Former() {
    //hasaneli enq dardzum redux store @
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    //useHistory ֊ ը հասանելի է սարքրւմ history֊ի օրինակը, որը կարող ենք օգտագործել նավիգացիայի համար․
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(content.length === 0){
            return;
        }
        //ogtagorcum enq tvylaner@ poxanclu hamar
        dispatch(add({
            name: e.target.elements['post-name'].value, 
            author: e.target.elements['author-name'].value, 
            date: new Date().toISOString().slice(0,10), 
            content
        }));
        history.push('/');
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className="subform">
                <label htmlFor="fname">Имя автора</label><br></br>
                <input required type="text" id="author-name" name="author-name" ></input><br></br>
                <label htmlFor="fname">Заголовок записи</label><br></br>
                <input required type="text" id="post_name" name="post-name" ></input><br></br>
                <label htmlFor="lname">Контент записи</label><br></br>
                <Editor
                    initialValue="<p></p>"
                    apiKey={EDITOR_API_KEY}
                    required
                    initialValue='Опишите ваш пост...'
                    value={content}
                    onEditorChange={setContent}
                />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}


export default Former;