"use client";

import { FlagOutlined, StarOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import "./MuseumHero.css";

const { Title, Paragraph } = Typography;

export default function MuseumHero() {
  return (
    <div className="museum-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <StarOutlined className="badge-icon" />
          <span>VNR202 - Nhóm 5 - Haft_2 SE1737</span>
        </div>

        <Title level={1} className="hero-main-title">
          Sự Lãnh đạo Độc lập, Sáng tạo
          <br />
          của Đảng Cộng sản Việt Nam
        </Title>

        <div className="hero-divider">
          <span className="divider-star">✦</span>
        </div>

        <Title level={2} className="hero-subtitle">
          Trong Kháng chiến Chống Mỹ
          <br />
          và Hoàn thành Thống nhất Đất nước
        </Title>

        <div className="hero-years">
          <FlagOutlined className="years-icon" />
          <span>1954 – 1975</span>
        </div>

        <div className="hero-learning-outcomes">
          <div className="outcome-badge">
            <span className="outcome-label">CLO2</span>
            <span className="outcome-text">
              Phân tích sự lãnh đạo của Đảng trong kháng chiến chống Mỹ
            </span>
          </div>
          <div className="outcome-badge">
            <span className="outcome-label">CLO4</span>
            <span className="outcome-text">
              Củng cố niềm tin vào sự lãnh đạo của Đảng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
