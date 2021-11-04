import React from "react";
import "./index.css";
import { List, Avatar } from "antd";

const data = [
  {
    title: "就业、失业登记",
    content: '就业失业登记证申请表，身份证或社保卡，户口簿，2寸照片',
  },
  {
    title: "优抚对象年审",
    content: '办理人身份证，村委会拍照'
  },
  {
    title: "临时救助待遇核定",
    content: '柜台咨询'
  },
  {
    title: "建立集体户口登记",
    content: '柜台咨询'
  },
];

const Service = () => {
  return (
    <div className="service">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <div>
                  <span>{item.content}</span>
                  <span style={{ marginLeft: 8, fontWeight: 500, textDecoration: 'underline' }}>开始办理</span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Service;
