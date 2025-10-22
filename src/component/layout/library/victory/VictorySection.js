"use client";

import {
  BulbOutlined,
  DownOutlined,
  GlobalOutlined,
  HeartOutlined,
  StarOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./VictorySection.css";

export default function VictorySection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [expandedSections, setExpandedSections] = useState({});

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <div className="victory-section">
      {/* 5.1 Ý nghĩa Lịch sử */}
      <div className="image-focus-block">
        <div className="subsection-header">
          <div className="subsection-number">5.1</div>
          <h3 className="subsection-title">
            Ý nghĩa Lịch sử và Tầm vóc Thời đại
          </h3>
        </div>

        <div className="image-grid-layout">
          <div className="image-wrapper aspect-16-9 featured">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Thắng lợi vĩ đại 1975"
              preview={true}
            />
            <div className="image-caption-overlay">
              Chiến thắng 30/4/1975 - Thống nhất Đất nước
            </div>
          </div>

          <div className="brief-content highlight-box">
            <h4 className="content-title">
              <TrophyOutlined
                style={{ color: "var(--lacquer-gold)", marginRight: "0.5rem" }}
              />
              Thắng lợi Vĩ đại
            </h4>
            <p className="key-summary">
              Thắng lợi chống Mỹ (1954-1975) là{" "}
              <span className="highlight-text">
                sự kiện ý nghĩa lịch sử to lớn
              </span>
              , không chỉ với Việt Nam mà còn có tầm vóc thời đại.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.victory ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("victory")}
            >
              {expandedSections.victory ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.victory && (
              <div className="expanded-detail">
                <ul>
                  <li>
                    <strong>Hoàn thành giải phóng dân tộc:</strong> Kết thúc 30
                    năm chiến tranh, thống nhất đất nước
                  </li>
                  <li>
                    <strong>Khẳng định ý chí:</strong> Chứng minh tinh thần bất
                    khuất của dân tộc
                  </li>
                  <li>
                    <strong>Mở đường xây dựng CNXH:</strong> Tạo điều kiện phát
                    triển đất nước
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="image-wrapper aspect-circle">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Vietnam.svg"
              alt="Lá cờ thống nhất"
              preview={true}
            />
            <div className="image-caption-overlay">Lá cờ Độc lập</div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">
              <GlobalOutlined
                style={{ color: "var(--jade-green)", marginRight: "0.5rem" }}
              />
              Ý nghĩa Quốc tế
            </h4>
            <p className="key-summary">
              Đánh bại đế quốc Mỹ - siêu cường số một, cổ vũ phong trào giải
              phóng dân tộc toàn thế giới.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.international ? (
                  <UpOutlined />
                ) : (
                  <DownOutlined />
                )
              }
              onClick={() => toggleSection("international")}
            >
              {expandedSections.international ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.international && (
              <div className="expanded-detail">
                <ul>
                  <li>
                    <strong>Đánh bại siêu cường:</strong> Lần đầu quốc gia nhỏ
                    chiến thắng siêu cường
                  </li>
                  <li>
                    <strong>Cổ vũ toàn cầu:</strong> Nguồn cảm hứng cho phong
                    trào giải phóng
                  </li>
                  <li>
                    <strong>Thay đổi cục diện:</strong> Làm lung lay chiến lược
                    toàn cầu của đế quốc
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5.2 Nguồn Sức mạnh */}
      <div className="image-focus-block">
        <div className="subsection-header">
          <div className="subsection-number">5.2</div>
          <h3 className="subsection-title">Bốn Nguồn Sức mạnh Chiến thắng</h3>
        </div>

        <div className="image-grid-layout">
          <div className="image-wrapper aspect-4-3">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Lãnh đạo của Đảng"
              preview={true}
            />
            <div className="image-caption-overlay">
              Sự lãnh đạo sáng suốt của Đảng
            </div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">
              <StarOutlined
                style={{ color: "var(--lacquer-red)", marginRight: "0.5rem" }}
              />
              01. Lãnh đạo Đúng đắn của Đảng
            </h4>
            <p className="key-summary">
              Đảng vạch ra{" "}
              <span className="highlight-text">
                đường lối chiến lược độc lập, sáng tạo
              </span>
              , phù hợp điều kiện Việt Nam.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.leadership ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("leadership")}
            >
              {expandedSections.leadership ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.leadership && (
              <div className="expanded-detail">
                <ul>
                  <li>
                    <strong>Đường lối đồng thời:</strong> Xây dựng miền Bắc +
                    Giải phóng miền Nam
                  </li>
                  <li>
                    <strong>Độc lập tự chủ:</strong> Tự lực cánh sinh, không lệ
                    thuộc
                  </li>
                  <li>
                    <strong>Sáng tạo linh hoạt:</strong> Vận dụng Mác-Lênin vào
                    Việt Nam
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="image-wrapper aspect-4-3">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Đại đoàn kết"
              preview={true}
            />
            <div className="image-caption-overlay">
              Khối đại đoàn kết toàn dân
            </div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">
              <TeamOutlined
                style={{ color: "var(--jade-green)", marginRight: "0.5rem" }}
              />
              02. Khối Đại đoàn kết Dân tộc
            </h4>
            <p className="key-summary">
              Sức mạnh{" "}
              <span className="highlight-text">khối đại đoàn kết toàn dân</span>{" "}
              - nguồn lực vô tận của thắng lợi.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={expandedSections.unity ? <UpOutlined /> : <DownOutlined />}
              onClick={() => toggleSection("unity")}
            >
              {expandedSections.unity ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.unity && (
              <div className="expanded-detail">
                <ul>
                  <li>
                    <strong>Đoàn kết giai cấp:</strong> Công nhân, nông dân, trí
                    thức
                  </li>
                  <li>
                    <strong>54 dân tộc:</strong> Anh em cùng nhà, cùng chiến đấu
                  </li>
                  <li>
                    <strong>Đoàn kết quốc tế:</strong> Hỗ trợ từ bạn bè năm châu
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="image-wrapper aspect-circle">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Vietnam.svg"
              alt="Lực lượng vũ trang"
              preview={true}
            />
            <div className="image-caption-overlay">
              Quân đội nhân dân Việt Nam
            </div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">
              <ThunderboltOutlined
                style={{ color: "var(--lacquer-gold)", marginRight: "0.5rem" }}
              />
              03. Lực lượng Vũ trang Nhân dân
            </h4>
            <p className="key-summary">
              Quân đội nhân dân -{" "}
              <span className="highlight-text">trung thành tuyệt đối</span> với
              Đảng, nhân dân và Tổ quốc.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.military ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("military")}
            >
              {expandedSections.military ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.military && (
              <div className="expanded-detail">
                <ul>
                  <li>
                    <strong>Bản chất giai cấp:</strong> Từ nhân dân mà ra, vì
                    nhân dân phục vụ
                  </li>
                  <li>
                    <strong>Nghệ thuật quân sự:</strong> Kết hợp chiến tranh
                    chính quy và du kích
                  </li>
                  <li>
                    <strong>Ý chí chiến đấu:</strong> Quyết tâm cao, dũng cảm hy
                    sinh
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="image-wrapper aspect-4-3">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Đường lối đối ngoại"
              preview={true}
            />
            <div className="image-caption-overlay">Đoàn kết quốc tế</div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">
              <GlobalOutlined
                style={{ color: "var(--lacquer-red)", marginRight: "0.5rem" }}
              />
              04. Đường lối Đối ngoại Đúng đắn
            </h4>
            <p className="key-summary">
              Kết hợp{" "}
              <span className="highlight-text">
                sức mạnh dân tộc với sức mạnh thời đại
              </span>
              , tranh thủ ủng hộ quốc tế.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.diplomacy ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("diplomacy")}
            >
              {expandedSections.diplomacy ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.diplomacy && (
              <div className="expanded-detail">
                <ul>
                  <li>
                    <strong>Tranh thủ ủng hộ:</strong> Từ các nước XHCN và bạn
                    bè thế giới
                  </li>
                  <li>
                    <strong>Độc lập tự chủ:</strong> Không lệ thuộc vào bất kỳ
                    ai
                  </li>
                  <li>
                    <strong>Đấu tranh ngoại giao:</strong> Vạch trần âm mưu của
                    đế quốc
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5.3 Bài học Lãnh đạo */}
      <div className="image-focus-block">
        <div className="subsection-header">
          <div className="subsection-number">5.3</div>
          <h3 className="subsection-title">Ba Bài học Lãnh đạo Cốt lõi</h3>
        </div>

        <div className="image-grid-layout">
          <div className="image-wrapper aspect-16-9 featured">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Bài học lãnh đạo"
              preview={true}
            />
            <div className="image-caption-overlay">
              Bài học từ lịch sử cho tương lai
            </div>
          </div>

          <div className="brief-content highlight-box">
            <h4 className="content-title">
              <BulbOutlined
                style={{ color: "var(--lacquer-gold)", marginRight: "0.5rem" }}
              />
              01. Độc lập, Tự chủ
            </h4>
            <p className="key-summary">
              Kiên định{" "}
              <span className="highlight-text">
                độc lập dân tộc gắn với CNXH
              </span>
              , không lệ thuộc bất kỳ thế lực nào.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.lesson1 ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("lesson1")}
            >
              {expandedSections.lesson1 ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.lesson1 && (
              <div className="expanded-detail">
                <p>
                  Đảng đã giữ vững lập trường độc lập, tự chủ trong mọi tình
                  huống, không để bất kỳ thế lực nào chi phối đường lối của
                  mình. Đây là yếu tố then chốt giúp Việt Nam giành thắng lợi.
                </p>
              </div>
            )}
          </div>

          <div className="brief-content">
            <h4 className="content-title">
              <HeartOutlined
                style={{ color: "var(--lacquer-red)", marginRight: "0.5rem" }}
              />
              02. Gắn bó Nhân dân
            </h4>
            <p className="key-summary">
              Xuất phát từ lợi ích nhân dân,{" "}
              <span className="highlight-text">dựa vào nhân dân</span>, phục vụ
              nhân dân.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.lesson2 ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("lesson2")}
            >
              {expandedSections.lesson2 ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.lesson2 && (
              <div className="expanded-detail">
                <p>
                  Đảng luôn đặt lợi ích của nhân dân lên trên hết, gắn bó mật
                  thiết với quần chúng, lắng nghe ý kiến nhân dân. "Dân là gốc
                  nước" - đây là nguồn sức mạnh vô tận.
                </p>
              </div>
            )}
          </div>

          <div className="brief-content">
            <h4 className="content-title">
              <StarOutlined
                style={{ color: "var(--jade-green)", marginRight: "0.5rem" }}
              />
              03. Sáng tạo, Không Ngừng Đổi mới
            </h4>
            <p className="key-summary">
              Vận dụng sáng tạo lý luận,{" "}
              <span className="highlight-text">
                không giáo điều, không chủ quan
              </span>
              .
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.lesson3 ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("lesson3")}
            >
              {expandedSections.lesson3 ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.lesson3 && (
              <div className="expanded-detail">
                <p>
                  Đảng không ngừng đổi mới tư duy, phương pháp lãnh đạo, vận
                  dụng sáng tạo Chủ nghĩa Mác-Lênin vào thực tiễn Việt Nam. Dám
                  thử nghiệm, dám sửa sai, không ngừng hoàn thiện.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        title={
          <h3 style={{ color: "var(--lacquer-red)" }}>{modalContent.title}</h3>
        }
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={700}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </p>
      </Modal>
    </div>
  );
}
