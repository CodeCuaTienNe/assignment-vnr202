"use client";

import { BookOutlined, MenuOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "./MuseumHeader.css";

const { Header } = Layout;

export default function MuseumHeader({ activeSection, setActiveSection }) {
  const menuItems = [
    { key: "hero", label: "Trang chủ", icon: <StarOutlined /> },
    { key: "foundation", label: "I. Bối cảnh", icon: <BookOutlined /> },
    { key: "strategy", label: "II. Chuyển hướng", icon: <BookOutlined /> },
    { key: "north", label: "III. Miền Bắc", icon: <BookOutlined /> },
    { key: "south", label: "IV. Thắng lợi", icon: <BookOutlined /> },
    { key: "victory", label: "V. Ý nghĩa", icon: <BookOutlined /> },
    { key: "footer", label: "📋 Thông tin", icon: <StarOutlined /> },
  ];

  const handleMenuClick = (e) => {
    // Directly change chapter instead of scrolling
    setActiveSection(e.key);
  };

  return (
    <Header className="museum-header">
      <div className="header-container">
        {/* Brand Section */}
        <div className="header-brand">
          <img
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Logo Đảng"
            className="header-logo"
          />
          <div className="header-title-group">
            <h1 className="header-title">Lịch sử Đảng Cộng sản Việt Nam</h1>
            <p className="header-subtitle">
              <StarOutlined className="subtitle-icon" />
              Nhóm 5 - Haft_2 SE1737 | VNR202
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={menuItems}
          onClick={handleMenuClick}
          className="header-menu"
        />

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="menu-mobile-btn"
        />
      </div>
    </Header>
  );
}
