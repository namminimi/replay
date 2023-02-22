import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostLists from '../components/PostLists';
import { getPosts } from '../modules/posts';

const PostContainer = () => {
    const {data, loading, error} = useSelector(state=>state.posts.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
    if(loading) return <div>로딩중입니다....</div>
    if(error) return <div>에러발생!!!!!!</div>
    if(!data) return <div>데이터없습니다.</div>
    console.log(data)
    return (
        <PostLists posts={data}/>
    );
};

export default PostContainer;