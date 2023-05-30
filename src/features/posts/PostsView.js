import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const PostsView = () => {

    const {isLoading, posts, error} = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

  return (
    <div className='fetch'>
        <h1>POSTS INFORMATION</h1>
        {isLoading && <h3>Loading ...</h3>}
        {error && <h3>{error}</h3>}
        <section>
        {posts && posts.map((post) => {
            return (
                <article key={post.id}>
                  <h5>{post.title}</h5><br></br>
                  <p>{post.body}</p>
                </article>
              )
        })}
        </section>
    </div>
  )
}

export default PostsView
