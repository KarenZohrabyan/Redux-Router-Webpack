import React from 'react';
import Nav from '../components/nav';
import Post from '../components/post';
import { useSelector } from 'react-redux';

function MPage() {

    //useSelector ֊ ը թույլ է տալիս ստանալ տվյալներ Redux֊ի store֊ից
    const count = useSelector(state => state.posts);
    return (
        <div className="main-page">
            <Nav />
            <Post data={count} />
        </div>
    );
}


export default MPage;