import React from "react";
import "./index.css";
import user_image from "../../assets/images/user_image.jpg";
import code from "../../assets/images/code.svg";
import pay from "../../assets/images/pay.svg";
import { RightOutlined } from "@ant-design/icons";
import relation_graph from "../../assets/images/relation_graph.png";

const User = () => {
  return (
    <div className="user_page">
      <div className="info">
        <div className="img">
          <img alt="头像" src={user_image} />
        </div>
        <div className="desc">
          <div className="name">张三丰</div>
          <div className="number">
            微信号: abcde <img src={code} alt="二维码" />
          </div>
        </div>
      </div>
      {/* <div className="function">
        <div className="item">
          <img src={pay} alt="支付" />
          <span>支付</span>
        </div>
        <RightOutlined />
      </div> */}
      <div className="contents">
        <div className="content">
          <div className="content_title">球源村徐文勤在外亲属关系图</div>
          <img src={relation_graph} alt="关系图" />
        </div>
        <div className="content">
          <div className="content_title">球源村徐文勤在外亲属关系图</div>
          <img src={relation_graph} alt="关系图" />
        </div>
        <div className="content">
          <div className="content_title">球源村徐文勤在外亲属关系图</div>
          <img src={relation_graph} alt="关系图" />
        </div>
      </div>
    </div>
  );
};

export default User;
