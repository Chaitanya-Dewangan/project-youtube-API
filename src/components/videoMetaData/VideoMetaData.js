import React,{useEffect} from "react";
import "./_videoMetaData.scss";

import numeral from "numeral";
import moment from "moment";

import { Avatar } from "@material-ui/core";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

import {useHistory} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux';
import {
  getChannelDetails,
  checkSubscriptionStatus,
} from "../../redux/actions/channel.action";

const VideoMetaData = ({video:{snippet,statistics},videoId}) => {

  const {title,description,channelId,channelTitle,publishedAt} = snippet;
  const { viewCount,dislikeCount, likeCount } = statistics;
  const history = useHistory();
  const handleChannelClick = () =>{
    history.push(`/channel/${channelId}`);
  }
  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  const {snippet:channelSnippet,statistics:channelStatistics}=useSelector(state => state.channelDetails.channel)
  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );
  return (
    <div className="VideoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1 ">
          <span>
            {numeral(viewCount).format("0.a").toLocaleUpperCase()}{" "}
            <span>Views</span> <span>{moment(publishedAt).fromNow()}</span>
          </span>

          <div>
            <span className="videoMetaData__top__likes mr-9">
              <MdThumbUp size={21} />
              <span className="mr-3">
                {numeral(likeCount).format("0.a").toLocaleUpperCase()}
              </span>
            </span>
            <span className="videoMetaData__top__dislikes mr-9">
              <MdThumbDown size={21} />
              <span className="mr-3">
                {numeral(dislikeCount).format("0.a").toLocaleUpperCase()}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3 ">
        <div className="d-flex pointer-cursor " onClick={handleChannelClick}>
          <Avatar
            className="mr-3"
            src={channelSnippet?.thumbnails?.default?.url}
            alt={channelTitle}
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              <span className="mrg-3">
                {numeral(channelStatistics?.subscriberCount)
                  .format("0.0a")
                  .toLocaleUpperCase()}
              </span>
              Subscriber
            </span>
          </div>
        </div>
        <button
          className={` border-0 p-2 m-2 ${
            subscriptionStatus ? "subscribed" : null
          } button `}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          <p>{description}</p>
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
