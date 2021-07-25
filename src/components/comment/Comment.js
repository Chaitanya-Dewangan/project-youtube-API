import React from 'react'
import './_comment.scss';
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment';

const Comment = () => {
    return (
      <div className="comment p-2 d-flex">
        <Avatar
          className="comment__userImg mr-3"
          src="https://yt3.ggpht.com/ytc/AKedOLRIec7gUC89wc0OGstCraoIatVagBJHOpLW-n5QrQ=s48-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div className="comment__body ">
          <p className="comment__header mb-0">
            One Plus • {moment("2017-05-06").fromNow()}
          </p>
          <p className="mb-0">Nice Video DUDE!!</p>
        </div>
      </div>
    );
}

export default Comment
