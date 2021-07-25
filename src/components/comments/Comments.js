import React from "react";
import "./_comments.scss";
import { Avatar } from "@material-ui/core";
import Comment from '../../components/comment/Comment'
const Comments = () => {
  const handleSubmit = () => {

  }
  return (
    <div className="comments">
      <p>12K Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <Avatar
          className="mr-3"
          src="https://i.gadgets360cdn.com/large/Oneplus_newlogo_thumb1_1584519552912.jpg"
          alt=""
        />
        <form onSubmit={handleSubmit} className="d-flex flex-grow-1">
            <input 
                type='text'
                className='flex-grow-1'
                placeholder='Write a comment...'
            />
            <button className="border-0 p-2 ">Comment</button>

        </form>
      </div>
      <div className="comments__list" >
          {
              [...Array(15)].map(() => <Comment/> )
          }
      </div>
    </div>
  );
};

export default Comments;
