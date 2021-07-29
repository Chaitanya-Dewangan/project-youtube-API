import React from 'react'
import './_comment.scss';
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment';

const Comment = ({comment}) => {
    
    return (
      <div className="comment p-2 d-flex">
        <Avatar
          className="comment__userImg mr-3 pointer-cursor"
          src={comment?.authorProfileImageUrl}
          alt=""
        />
        <div className="comment__body ">
          <p className="comment__header mb-0  ">
            {comment?.authorDisplayName} <span className="mr-3">•</span>
            {moment(comment?.publishedAt).fromNow()}
          </p>
          <p className="mb-0">{comment?.textOriginal}</p>
        </div>
      </div>
    );
}

export default Comment
