import "./_comments.scss";

import React,{useEffect,useState} from "react";
import {useDispatch,useSelector } from 'react-redux';
import {getCommentsOfVideoById,addComment} from "../../redux/actions/comments.action"

import { Avatar } from "@material-ui/core";
import Comment from '../../components/comment/Comment'
import numeral from "numeral"

const Comments = ({videoId,commentCount}) => {

  const {user}   = useSelector(state => state.auth);

  const [text,setText]=useState("")
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const _commentCount = numeral(commentCount?.commentCount).format("0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               a");

  const {comments} = useSelector(state => state.commentList);
  const _comments  =  comments?.map(comment => comment.snippet.topLevelComment.snippet);
  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));

    setText("");
  };



  return (
    <div className="comments">
      <p>{_commentCount} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <Avatar
          className="mr-3"
          src={user?.photoURL}
          alt=""
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2 ">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.slice(0, 6)?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
