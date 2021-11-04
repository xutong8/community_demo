import React from "react";
import { Select } from "antd";
import "./index.css";
import qr_code from "../../assets/images/qr_code.png";

const { Option } = Select;

const Talk = () => {
  return (
    <div className="talk">
      <div className="header">
        <Select defaultValue="天禄村" style={{ width: "100%" }}>
          <Option value="天禄村">天禄村</Option>
          <Option value="新手村2">新手村2</Option>
          <Option value="新手村3">新手村3</Option>
        </Select>
      </div>
      <div className="content">
        <img alt="qr_code" src={qr_code} />
      </div>
    </div>
  );
};

export default Talk;
