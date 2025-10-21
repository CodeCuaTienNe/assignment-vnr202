"use client";

import { scrollToSection } from "@/hooks/library/library";
import { BookOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "./MuseumHeader.css";

const { Header } = Layout;

export default function MuseumHeader({ activeSection, setActiveSection }) {
  const menuItems = [
    { key: "intro", label: "I. Dẫn nhập", icon: <BookOutlined /> },
    { key: "strategy", label: "II. Chiến lược", icon: <BookOutlined /> },
    { key: "north", label: "III. Miền Bắc", icon: <BookOutlined /> },
    { key: "south", label: "IV. Miền Nam", icon: <BookOutlined /> },
    { key: "victory", label: "V. Thắng lợi", icon: <BookOutlined /> },
    { key: "orientation", label: "VI. Định hướng", icon: <BookOutlined /> },
  ];

  const handleMenuClick = (e) => {
    scrollToSection(e.key);
    setActiveSection(e.key);
  };

  return (
    <Header className="museum-header">
      <div className="header-container">
        <div className="header-brand">
          <img
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Logo"
            className="header-logo"
          />
          <div className="header-title-group">
            <h1 className="header-title">Lịch sử Đảng Cộng sản Việt Nam</h1>
            <p className="header-subtitle">1954 – 1975: Kháng chiến Chống Mỹ</p>
          </div>
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={menuItems}
          onClick={handleMenuClick}
          className="header-menu"
        />

        <Button
          type="text"
          icon={<MenuOutlined />}
          className="menu-mobile-btn"
        />
      </div>
    </Header>
  );
}
