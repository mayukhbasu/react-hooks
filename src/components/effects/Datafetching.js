import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Datafetching = () => {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdfromButtonClick] = useState(1);

    const handleClick = () => {
        setIdfromButtonClick(id);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(res => {
            console.log(res);
            setPost(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [idFromButtonClick])
    return (
        <div>
            <input value={id} onChange={(e) => setId(e.target.value)}/>
            <button type='button' onClick={handleClick}>Fetch Post</button>
            {/* <ul>
                {
                    posts.map((post) => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
            <div>{post.title}</div>
        </div>
    );
};

export default Datafetching;