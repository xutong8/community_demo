import React from 'react';
import './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import news from '../../../assets/images/news.png';
import Icon from '../../Icon';
import transmit from '../../../assets/images/transmit.svg';
import comment from '../../../assets/images/comment.svg';
import good from '../../../assets/images/good.svg';

const Card = () => {
  return (
    <div className="card">
      <div className="header">
        <Avatar size="large" icon={<UserOutlined />} />
        <div className="desc">
          <div className="title">张三丰</div>
          <div className="date">周三 17:34 浏览18次</div>
        </div>
      </div>
      <div className="content">
        <span className="anchor">
          #政府发布
        </span>
        <span className="text">天禄镇招收工人若干名，包吃住，男女不限</span>
      </div>
      <div className="img">
        <img src={news} width={359} alt="news"  />
      </div>
      <div className="icons">
        <Icon img={transmit} />
        <Icon img={comment} />
        <Icon img={good} />
      </div>
    </div>
  )
};

export default Card;