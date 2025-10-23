"use client";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./StrategySection.css";

export default function StrategySection() {
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
    <div className="strategy-section">
      {/* Section 2.1: Bối cảnh */}
      <div className="subsection-header">
        <div className="subsection-number">2.1</div>
        <h3 className="subsection-title">Bối cảnh và Xác định Nhiệm vụ Mới</h3>
      </div>

      <div className="image-story-container">
        <div className="story-block">
          <div className="story-image-wrapper aspect-9-16">
            <Image
              src="https://i.redd.it/6klzdarshpwd1.jpeg"
              alt="Đất nước bị chia cắt"
              preview={false}
            />
            <div className="story-image-caption">
              Đất nước bị chia cắt làm hai miền (1954)
            </div>
          </div>
          <div className="story-content-brief">
            <h4>Đất nước Chia cắt</h4>
            <p>
              Sau 1954, đất nước bị chia cắt làm hai miền:{" "}
              <span className="key-point">Miền Bắc được giải phóng</span>, xây
              dựng CNXH. <span className="key-point">Miền Nam</span> dưới sự
              kiểm soát của Mỹ-Diệm, chủ nghĩa thực dân mới.
            </p>
            <Button
              className="expand-button"
              onClick={() => toggleSection("divided")}
              icon={
                expandedSections.divided ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections.divided ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.divided && (
              <div className="expanded-content">
                <p>
                  <strong>Âm mưu của Mỹ:</strong> Chia cắt lâu dài Việt Nam,
                  biến miền Nam thành tiền đồn chống Cộng sản. Tình thế đòi hỏi
                  Đảng phải vạch ra đường lối chiến lược mới, phù hợp với đặc
                  điểm quốc gia bị chia cắt nhưng có chung mục tiêu thống nhất.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 2.2: Đại hội III */}
      <div className="subsection-header">
        <div className="subsection-number">2.2</div>
        <h3 className="subsection-title">Đại hội III (9/1960)</h3>
      </div>

      <div className="image-story-container">
        <div className="story-block reverse">
          <div className="story-image-wrapper aspect-4-3">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2024/10/18/upload_2094/dai-hoi-iii.jpg"
              alt="Đại hội III"
              preview={false}
              style={{ image: "cover" }}
            />
            <div className="story-image-caption">
              Đại hội Đại biểu Toàn quốc lần thứ III (9/1960)
            </div>
          </div>
          <div className="story-content-brief">
            <h4>Đường lối Chiến lược Đồng thời</h4>
            <p>
              Đại hội III xác định:{" "}
              <span className="key-point">
                Tiến hành đồng thời hai chiến lược cách mạng
              </span>{" "}
              - XHCN ở miền Bắc và DTDCND ở miền Nam, cùng hướng tới thống nhất
              đất nước.
            </p>
            <Button
              className="expand-button"
              onClick={() => toggleSection("congress3")}
              icon={
                expandedSections.congress3 ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections.congress3 ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.congress3 && (
              <div className="expanded-content">
                <p>
                  <strong>Chủ đề Đại hội:</strong> "Đại hội xây dựng chủ nghĩa
                  xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà".
                  Đây là thành công chiến lược to lớn, cân bằng giữa nhiệm vụ
                  xây dựng và chiến đấu.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mối quan hệ Biện chứng - Gallery */}
      <div className="subsection-header">
        <div className="subsection-number">2.3</div>
        <h3 className="subsection-title">Mối quan hệ Biện chứng Hai Miền</h3>
      </div>

      <div className="image-gallery">
        <div
          className="gallery-item"
          onClick={() =>
            openModal(
              "Miền Bắc - Hậu phương Lớn",
              "Tiến hành Cách mạng XHCN, xây dựng tiềm lực và bảo vệ căn cứ địa của cả nước. Vai trò quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam."
            )
          }
        >
          <Image
            src="https://file3.qdnd.vn/data/images/0/2024/10/14/upload_2094/duong-truong-son.jpg?dpi=150&quality=100&w=870"
            alt="Miền Bắc"
            preview={false}
          />
          <div className="gallery-overlay">
            <div className="gallery-title">Miền Bắc - Hậu phương Lớn</div>
            <div className="gallery-description">
              Xây dựng CNXH, cung cấp nguồn lực
            </div>
          </div>
        </div>

        <div
          className="gallery-item"
          onClick={() =>
            openModal(
              "Miền Nam - Tiền tuyến Lớn",
              "Tiến hành Cách mạng DTDCND, vai trò quyết định trực tiếp đối với việc giải phóng miền Nam, thực hiện thống nhất đất nước. Chiến trường trực tiếp, nơi các chiến thắng diễn ra."
            )
          }
        >
          <Image
            src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg"
            alt="Miền Nam"
            preview={false}
          />
          <div className="gallery-overlay">
            <div className="gallery-title">Miền Nam - Tiền tuyến Lớn</div>
            <div className="gallery-description">
              Giải phóng, thống nhất đất nước
            </div>
          </div>
        </div>

        <div
          className="gallery-item"
          onClick={() =>
            openModal(
              "Sự Kết hợp Sức mạnh",
              "Kết hợp sức mạnh hậu phương và tiền tuyến, tranh thủ tối đa nguồn lực dân tộc và sự ủng hộ quốc tế. Nếu miền Bắc không vững mạnh, không thể có sự chi viện cho Miền Nam."
            )
          }
        >
          <Image
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Kết hợp sức mạnh"
            preview={false}
          />
          <div className="gallery-overlay">
            <div className="gallery-title">Kết hợp Toàn diện</div>
            <div className="gallery-description">
              Hậu phương vững, tiền tuyến thắng
            </div>
          </div>
        </div>
      </div>

      {/* Section 2.4: Độc lập Tự chủ */}
      <div className="subsection-header">
        <div className="subsection-number">2.4</div>
        <h3 className="subsection-title">Tính Độc lập, Tự chủ và Sáng tạo</h3>
      </div>

      <div className="story-block full-width">
        <div
          className="story-content-brief"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <h4>🔥 Bản lĩnh Độc lập, Tự chủ</h4>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            Đảng giương cao ngọn cờ{" "}
            <span className="key-point">Độc lập Dân tộc gắn liền với CNXH</span>
            , vận dụng sáng tạo Mác-Lênin vào thực tiễn, tìm ra "quy luật riêng
            của cách mạng Việt Nam".
          </p>
          <Button
            className="expand-button"
            onClick={() => toggleSection("independence")}
            icon={
              expandedSections.independence ? <UpOutlined /> : <DownOutlined />
            }
          >
            {expandedSections.independence ? "Thu gọn" : "Tìm hiểu thêm"}
          </Button>
          {expandedSections.independence && (
            <div className="expanded-content">
              <p>
                <strong>Trong bối cảnh quốc tế phân hóa:</strong> Việt Nam giữ
                vững thế chủ động, tranh thủ sự ủng hộ từ cả Liên Xô và Trung
                Quốc, duy trì nguồn viện trợ chiến lược. Sự lãnh đạo đúng đắn và
                sáng tạo này là nhân tố hàng đầu quyết định thắng lợi.
              </p>
            </div>
          )}
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
