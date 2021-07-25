import React,{useEffect} from 'react';
import './_watchScreen.scss';

import Comments from "../../components/comments/Comments";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal"

import {useParams} from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import {useDispatch,useSelector} from 'react-redux';
import {getVideoById} from '../../redux/actions/videos.action'

const WatchScreen = () => {

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id))
  },[dispatch,id])

  const {video,loading} = useSelector(state => state.selectedVideo)
  

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
          {!loading ? <VideoMetaData video={video} videoId={id} /> : <h3>loading...</h3>}

          <Comments />
        </Col>
        <Col lg={4}>
          {[...Array(9)].map(() => (
            <VideoHorizontal />
          ))}
        </Col>
      </Row>
    );
}

export default WatchScreen
