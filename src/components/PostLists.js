import React from 'react';

const PostLists = ({posts}) => {
    console.log(posts)
    return (
        <ul>
            {posts.map(post=><li key={post.id}>{post.title}</li>)}
        </ul>
    );
};

export default PostLists;