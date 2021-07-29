import React,{useEffect} from 'react';
import './_watchScreen.scss';

import Comments from "../../components/comments/Comments";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal"

import {useParams} from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import {useDispatch,useSelector} from 'react-redux';
import {
  getVideoById,
  getRelatedVideos,
} from "../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const WatchScreen = () => {

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id))
    dispatch(getRelatedVideos(id));
  },[dispatch,id])

  const {video,loading} = useSelector(state => state.selectedVideo);
  // const { videos, loading:relatedVideosLoading } = useSelector((state) => state.relatedVideo);
  const { videos } = useSelector((state) => state.relatedVideo);
  
  const commentCount = video?.statistics;
  

    return (
      <Row>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title={video?.snippet?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
          {!loading ? (
            <VideoMetaData video={video} videoId={id} />
          ) : (
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
              <Skeleton width="100%" height="130px" count={15} />
            </SkeletonTheme>
          )}

          <Comments videoId={id} commentCount={commentCount} />
        </Col>
        <Col lg={4}>
          {!loading ? (
            videos
              ?.filter((video) => video.snippet)
              .map((video) => (
                <VideoHorizontal video={video} key={video.id.videoId} />
              ))
          ) : (
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
              <Skeleton width="100%" height="130px" count={15} />
            </SkeletonTheme>
          )}
        </Col>
      </Row>
    );
}

export default WatchScreen
