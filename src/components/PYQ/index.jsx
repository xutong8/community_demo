import React from "react";
import "./index.css";
import Card from "./Card";
import user_image from "../../assets/images/user_image.jpg";
import score from "../../assets/images/score.svg";
import register from '../../assets/images/register.svg';

const PYQ = () => {
  const list = new Array(10).fill("");

  return (
    <div className="pyq">
      <div className="info">
        <div className="detail_info">
          <div className="img">
            <img alt="头像" src={user_image} />
          </div>
          <div className="text">
            <div className="title">天麓镇流动人口交流平台</div>
            <div className="subtitle">成员148人</div>
          </div>
        </div>
        <div className="icons">
          <div className="score_icon">
            <img alt="积分" src={score} />
            <span style={{ marginLeft: 8 }}>积分</span>
          </div>
          <div className="score_icon">
            <img alt="积分" src={register} />
            <span style={{ marginLeft: 8 }}>签到</span>
          </div>
        </div>
        <div className="notice">
          <div className="notice_content">
            <div className="notice_left">政府公告</div>
            <div className="notice_right">村里设立村名意见收集箱!</div>
          </div>
        </div>
      </div>
      <div className="list">
        {list.map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default PYQ;
