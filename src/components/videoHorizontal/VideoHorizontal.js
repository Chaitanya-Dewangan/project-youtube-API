import React from 'react'
import './_videoHorizontal.scss';
import moment from 'moment'
import numeral from 'numeral';

import {Row , Col } from 'react-bootstrap'
import {AiFillEye} from "react-icons/ai";
import {Avatar} from "@material-ui/core";
import request from '../../api';
import { LazyLoadImage } from "react-lazy-load-image-component";


const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} lg={4} className="videoHorizontal__left">
        <LazyLoadImage
          effect="blur"
          src="https://images.macrumors.com/t/jXqUxBjwyt16A254unbNN51zn9A=/1920x/https://images.macrumors.com/article-new/2019/02/MR-Future-Products-2020-2.png"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumnnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} lg={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          PPAP Pen Pineapple Apple Pen PPAP
        </p>
        <div className="videoHorizontal__top__details">
          <AiFillEye /> {numeral(1000000).format("0.a").toLocaleUpperCase()}
          <span>Views</span>•<span>{moment("2021-01-06").fromNow()}</span>
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            effect="blur"
            src="https://images.macrumors.com/t/jXqUxBjwyt16A254unbNN51zn9A=/1920x/https://images.macrumors.com/article-new/2019/02/MR-Future-Products-2020-2.png"
            
          /> */}
          <h6>NIKE</h6>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
