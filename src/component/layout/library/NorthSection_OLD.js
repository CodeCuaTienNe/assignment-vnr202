"use client";

import { GlobalOutlined, RocketOutlined } from "@ant-design/icons";
import { Col, Image, Modal, Row, Typography } from "antd";
import { useState } from "react";
import "./NorthSection.css";

const { Paragraph } = Typography;

export default function NorthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <div className="north-section">
      {/* Hình ảnh chính */}
      <div className="section-image-container">
        <Image
          src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
          alt="Miền Bắc hậu phương chiến lược"
          className="section-main-image"
          preview={true}
        />
        <div
          className="section-image-caption"
          onClick={() =>
            openModal(
              "Miền Bắc là hậu phương lớn, xây dựng nền tảng XHCN, cung cấp nguồn lực cho cách mạng thống nhất đất nước. Sự vững mạnh của miền Bắc quyết định thắng lợi chung."
            )
          }
          style={{ cursor: "pointer" }}
        >
          Miền Bắc: Hậu phương Chiến lược (1954-1975)
        </div>
      </div>

      {/* 3.1 Khôi phục và Cải tạo XHCN */}
      <div className="subsection-header">
        <div className="subsection-number">3.1</div>
        <h3 className="subsection-title">
          Giai đoạn Khôi phục và Cải tạo XHCN (1954–1960)
        </h3>
      </div>

      {/* Layout bất quy tắc với hình ảnh xen kẽ */}
      <div className="content-mosaic">
        <div className="mosaic-text">
          <p>
            Sau Hiệp định Giơnevơ, nhiệm vụ trọng tâm của miền Bắc là hàn gắn
            vết thương chiến tranh, khôi phục kinh tế quốc dân, ổn định xã hội.
          </p>
        </div>
        <Image
          src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
          alt="Khôi phục miền Bắc"
          className="inline-image shape-landscape"
          preview={true}
        />
        <div className="mosaic-text">
          <p>
            Đảng chỉ đạo lấy khôi phục và phát triển sản xuất nông nghiệp làm
            trọng tâm, kết hợp với Cải cách Ruộng đất để xóa bỏ chế độ chiếm hữu
            ruộng đất phong kiến.
          </p>
        </div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/HCM_1946.jpg"
          alt="Cải cách ruộng đất"
          className="inline-image shape-portrait"
          preview={true}
        />
        <div className="mosaic-text">
          <p>
            Cải cách Ruộng đất đã chia hơn 810,000 ha ruộng đất cho hơn 9 triệu
            người nông dân lao động, tạo nên chuyển biến cách mạng trong nền
            kinh tế và xã hội.
          </p>
        </div>
      </div>

      {/* 3.2 Chiến tranh Phá hoại */}
      <div className="subsection-header">
        <div className="subsection-number">3.2</div>
        <h3 className="subsection-title">
          Miền Bắc trong Chiến tranh Phá hoại (1965–1975)
        </h3>
      </div>

      <div className="content-mosaic">
        <div className="mosaic-text">
          <div className="card-header">
            <RocketOutlined
              className="card-icon"
              style={{ color: "var(--lacquer-red)" }}
            />
            <h4 className="card-title">Đứng vững trước Chiến tranh Phá hoại</h4>
          </div>
          <div className="card-content">
            <div className="quote-box">
              <p className="quote-text">"Không có gì quý hơn độc lập, tự do"</p>
              <p className="quote-author">— Chủ tịch Hồ Chí Minh (7/1966)</p>
            </div>

            <p className="lead-text">
              Nghị quyết Trung ương 11 và 12 (1965):{" "}
              <span className="highlight-text">
                "Kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ
                trong bất cứ tình huống nào"
              </span>
            </p>
          </div>
        </div>
        <Image
          src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
          alt="Chiến tranh phá hoại"
          className="inline-image shape-circle"
          preview={true}
        />
        <div className="mosaic-text">
          <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
            <Col xs={24} md={8}>
              <div className="feature-box">
                <span style={{ fontSize: "2.5rem" }}>🔥</span>
                <h5>Ba sẵn sàng</h5>
                <p>Phong trào thanh niên</p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="feature-box">
                <span style={{ fontSize: "2.5rem" }}>💪</span>
                <h5>Ba đảm đang</h5>
                <p>Phong trào phụ nữ</p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="feature-box">
                <span style={{ fontSize: "2.5rem" }}>🌾</span>
                <h5>Tay cày tay súng</h5>
                <p>Phong trào nông dân</p>
              </div>
            </Col>
          </Row>

          <div
            className="highlight-box"
            style={{
              marginTop: "2rem",
              background:
                "linear-gradient(135deg, rgba(139, 26, 26, 0.1), rgba(212, 175, 55, 0.1))",
            }}
          >
            <h5 style={{ color: "var(--lacquer-red)", marginBottom: "1rem" }}>
              Chiến thắng "Điện Biên Phủ trên không" (12/1972)
            </h5>
            <p className="lead-text">
              Quân và dân miền Bắc đã{" "}
              <strong>bắn rơi 84 máy bay, trong đó có 34 máy bay B52</strong>.
              Thắng lợi này buộc Mỹ phải tuyên bố ngừng mọi hoạt động phá hoại
              và ký kết{" "}
              <span className="highlight-text">Hiệp định Paris (1/1973)</span>.
            </p>
          </div>
        </div>
      </div>

      {/* 3.3 Chi viện Chiến lược */}
      <div className="subsection-header">
        <div className="subsection-number">3.3</div>
        <h3 className="subsection-title">
          Chi viện Chiến lược và Đường Hồ Chí Minh
        </h3>
      </div>

      <div className="content-mosaic">
        <div className="mosaic-text">
          <div className="card-header">
            <GlobalOutlined
              className="card-icon"
              style={{ color: "var(--lacquer-gold)" }}
            />
            <h4 className="card-title">Hậu phương Lớn Chi viện Tiền tuyến</h4>
          </div>
          <div className="card-content">
            <p className="lead-text">
              Miền Bắc đã hoàn thành xuất sắc vai trò{" "}
              <span className="highlight-text">"Hậu phương lớn"</span>, chi viện
              ở mức cao nhất cho chiến trường miền Nam:
            </p>
          </div>
        </div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Vietnam.svg"
          alt="Chi viện chiến lược"
          className="inline-image shape-square"
          preview={true}
        />
        <div className="mosaic-text">
          <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
            <Col xs={24} md={8}>
              <div className="stat-card">
                <div className="stat-number">80%</div>
                <div className="stat-label">Bộ đội chủ lực</div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="stat-card">
                <div className="stat-number">70%</div>
                <div className="stat-label">Vũ khí & Lương thực</div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="stat-card">
                <div className="stat-number">65%</div>
                <div className="stat-label">Thực phẩm</div>
              </div>
            </Col>
          </Row>

          <div className="highlight-box" style={{ marginTop: "2rem" }}>
            <h5 style={{ color: "var(--lacquer-red)" }}>
              Tuyến đường Hồ Chí Minh
            </h5>
            <ul className="custom-list">
              <li>
                <strong>Đường 559 (trên bộ):</strong> Huyết mạch chiến lược nối
                hậu phương với tiền tuyến
              </li>
              <li>
                <strong>Đường 759 (trên biển):</strong> Vận chuyển vũ khí và
                lương thực
              </li>
              <li>Duy trì liên tục bất chấp sự đánh phá ác liệt của địch</li>
              <li>Biểu tượng của ý chí thống nhất đất nước</li>
            </ul>
          </div>

          <Paragraph
            style={{
              marginTop: "2rem",
              fontSize: "1.1rem",
              lineHeight: "1.9",
            }}
          >
            Miền Bắc cũng hoàn thành <strong>nghĩa vụ quốc tế cao cả</strong>,
            chi viện cho cách mạng Lào và Campuchia, giúp tạo ra một mặt trận
            thống nhất Đông Dương chống Mỹ.
          </Paragraph>
        </div>
      </div>

      <Modal
        title="Chi tiết"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
}
