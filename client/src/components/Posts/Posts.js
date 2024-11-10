import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <div className={classes.container}>
        {posts.map((post) => (
          <div key={post._id} className={classes.post}>
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    )
  );
};

export default Posts;
