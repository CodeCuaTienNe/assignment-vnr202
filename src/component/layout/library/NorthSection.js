"use client";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./NorthSection.css";

export default function NorthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [expandedSections, setExpandedSections] = useState({});

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="north-section">
      {/* Section 3.1: Khôi phục và Cải tạo */}
      <div className="subsection-header">
        <div className="subsection-number">3.1</div>
        <h3 className="subsection-title">
          Khôi phục và Cải tạo XHCN (1954–1960)
        </h3>
      </div>

      <div className="image-story-container">
        <div className="story-block">
          <div className="story-image-wrapper aspect-16-9">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Khôi phục miền Bắc"
              preview={false}
            />
            <div className="story-image-caption">
              Khôi phục kinh tế sau chiến tranh
            </div>
          </div>
          <div className="story-content-brief">
            <h4>Hàn gắn Vết thương Chiến tranh</h4>
            <p>
              Nhiệm vụ trọng tâm:{" "}
              <span className="key-point">
                Khôi phục kinh tế, ổn định xã hội
              </span>
              , chuẩn bị đưa miền Bắc quá độ lên CNXH.
            </p>
            <Button
              className="expand-button"
              onClick={() => toggleSection("recovery")}
              icon={
                expandedSections.recovery ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections.recovery ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.recovery && (
              <div className="expanded-content">
                <p>
                  <strong>Trọng tâm:</strong> Lấy khôi phục và phát triển sản
                  xuất nông nghiệp làm trọng tâm, kết hợp với Cải cách Ruộng
                  đất để giải phóng sức sản xuất nông thôn.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="story-block reverse">
          <div className="story-image-wrapper aspect-4-3">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Cải cách ruộng đất"
              preview={false}
            />
            <div className="story-image-caption">
              Cải cách Ruộng đất - Nông dân được chia đất
            </div>
          </div>
          <div className="story-content-brief">
            <h4>Cải cách Ruộng đất</h4>
            <p>
              Xóa bỏ chế độ phong kiến, chia{" "}
              <span className="key-point">810,000 ha ruộng đất</span> cho hơn 9
              triệu nông dân lao động.
            </p>
            <Button
              className="expand-button"
              onClick={() => toggleSection("landreform")}
              icon={
                expandedSections.landreform ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections.landreform ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.landreform && (
              <div className="expanded-content">
                <p>
                  <strong>Sai lầm và Sửa chữa:</strong> Cải cách ruộng đất mắc
                  phải sai lầm nghiêm trọng do giáo điều, chủ quan. Đảng đã
                  nghiêm khắc tự phê bình và sửa sai kịp thời (Hội nghị Trung
                  ương 10, 9/1956), thể hiện bản chất cách mạng và trách nhiệm
                  với nhân dân.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 3.2: Xây dựng CNXH */}
      <div className="subsection-header">
        <div className="subsection-number">3.2</div>
        <h3 className="subsection-title">
          Xây dựng Chủ nghĩa Xã hội (1960–1965)
        </h3>
      </div>

      <div className="image-gallery">
        <div
          className="gallery-item"
          onClick={() =>
            openModal(
              "Công nghiệp hóa",
              "Xây dựng cơ sở vật chất - kỹ thuật của CNXH, phát triển công nghiệp nặng, tạo nền tảng kinh tế độc lập tự chủ."
            )
          }
        >
          <Image
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Công nghiệp hóa"
            preview={false}
          />
          <div className="gallery-overlay">
            <div className="gallery-title">Công nghiệp hóa</div>
            <div className="gallery-description">
              Xây dựng cơ sở vật chất CNXH
            </div>
          </div>
        </div>

        <div
          className="gallery-item"
          onClick={() =>
            openModal(
              "Hợp tác xã hóa",
              "Cải tạo quan hệ sản xuất nông nghiệp và tiểu thủ công nghiệp, xây dựng hợp tác xã, giải phóng sức sản xuất."
            )
          }
        >
          <Image
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Hợp tác xã"
            preview={false}
          />
          <div className="gallery-overlay">
            <div className="gallery-title">Hợp tác xã hóa</div>
            <div className="gallery-description">
              Cải tạo quan hệ sản xuất
            </div>
          </div>
        </div>

        <div
          className="gallery-item"
          onClick={() =>
            openModal(
              "Cách mạng văn hóa",
              "Xây dựng nền văn hóa mới, xóa mù chữ, phát triển giáo dục, y tế, nâng cao dân trí và đời sống văn hóa tinh thần."
            )
          }
        >
          <Image
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Cách mạng văn hóa"
            preview={false}
          />
          <div className="gallery-overlay">
            <div className="gallery-title">Cách mạng Văn hóa</div>
            <div className="gallery-description">
              Xóa mù, nâng cao dân trí
            </div>
          </div>
        </div>
      </div>

      {/* Section 3.3: Chiến tranh Phá hoại */}
      <div className="subsection-header">
        <div className="subsection-number">3.3</div>
        <h3 className="subsection-title">
          Đương đầu Chiến tranh Phá hoại (1965–1973)
        </h3>
      </div>

      <div className="image-story-container">
        <div className="story-block">
          <div className="story-image-wrapper aspect-16-9">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Chiến tranh phá hoại"
              preview={false}
            />
            <div className="story-image-caption">
              Chiến tranh phá hoại của Mỹ ở miền Bắc
            </div>
          </div>
          <div className="story-content-brief">
            <h4>⚔️ Chiến tranh Phá hoại Mỹ</h4>
            <p>
              Từ 2/1965, Mỹ leo thang chiến tranh, ném bom dữ dội lên miền Bắc,
              âm mưu{" "}
              <span className="key-point">
                phá hoại hậu phương, cắt đứt sự chi viện cho miền Nam
              </span>
              .
            </p>
            <Button
              className="expand-button"
              onClick={() => toggleSection("bombing")}
              icon={
                expandedSections.bombing ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections.bombing ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.bombing && (
              <div className="expanded-content">
                <p>
                  <strong>Quyết tâm:</strong> "Vừa sản xuất, vừa chiến đấu".
                  Nhân dân miền Bắc kiên cường đương đầu, bảo vệ bầu trời, duy
                  trì sản xuất, chi viện cho miền Nam. Chiến tranh không làm
                  miền Bắc khuất phục.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="story-block reverse">
          <div className="story-image-wrapper aspect-square">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Vietnam.svg"
              alt="Điện Biên Phủ trên không"
              preview={false}
            />
            <div className="story-image-caption">
              Chiến thắng "Điện Biên Phủ trên không" (12/1972)
            </div>
          </div>
          <div className="story-content-brief">
            <h4>Điện Biên Phủ trên không (12/1972)</h4>
            <p>
              Đánh bại cuộc tập kích bằng{" "}
              <span className="key-point">máy bay B-52</span>, buộc Mỹ phải ký
              Hiệp định Paris (1/1973).
            </p>
            <Button
              className="expand-button"
              onClick={() => toggleSection("dbpair")}
              icon={
                expandedSections.dbpair ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections.dbpair ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.dbpair && (
              <div className="expanded-content">
                <p>
                  <strong>Ý nghĩa:</strong> Thắng lợi chấn động thế giới, chứng
                  minh ý chí bất khuất của dân tộc. Mỹ phải chấp nhận đàm phán,
                  ký Hiệp định Paris, rút quân khỏi Việt Nam.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 3.4: Vai trò Hậu phương */}
      <div className="subsection-header">
        <div className="subsection-number">3.4</div>
        <h3 className="subsection-title">Vai trò Hậu phương Quyết định</h3>
      </div>

      <div className="story-block full-width">
        <div className="story-content-brief" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h4>🏆 Hậu phương Vững mạnh - Tiền tuyến Thắng lợi</h4>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            Miền Bắc giữ vai trò{" "}
            <span className="key-point">quyết định nhất</span> đối với sự phát
            triển của toàn bộ cách mạng. Cung cấp nguồn lực vật chất, tinh thần,
            nhân lực cho chiến trường miền Nam.
          </p>
          <Button
            className="expand-button"
            onClick={() => toggleSection("rearbase")}
            icon={
              expandedSections.rearbase ? <UpOutlined /> : <DownOutlined />
            }
          >
            {expandedSections.rearbase ? "Thu gọn" : "Tìm hiểu thêm"}
          </Button>
          {expandedSections.rearbase && (
            <div className="expanded-content">
              <p>
                <strong>Sự chi viện to lớn:</strong> Không có hậu phương miền
                Bắc vững mạnh, không thể có thắng lợi ở miền Nam. Miền Bắc đã
                cung cấp hàng triệu tấn lương thực, vũ khí, trang bị, cùng hàng
                trăm nghìn chiến sĩ chi viện cho chiến trường. Đây là minh chứng
                cho sức mạnh của khối đại đoàn kết toàn dân tộc.
              </p>
            </div>
          )}
        </div>
      </div>

      <Modal
        title={
          <h3 style={{ color: "var(--lacquer-red)" }}>
            {modalContent.title}
          </h3>
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
