"use client";

import {
  DownOutlined,
  InfoCircleOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./FoundationSection.css";

export default function FoundationSection() {
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
    <div className="foundation-section">
      {/* 1.1 Tính Tất yếu */}
      <div className="image-focus-block">
        <div className="subsection-header">
          <div className="subsection-number">1.1</div>
          <h3 className="subsection-title">
            Tính Tất yếu của Sự Lựa chọn Lịch sử
          </h3>
        </div>

        <div className="section-content">
          <div className="inline-pair">
            <div className="image-wrapper aspect-16-9">
              <Image
                src="https://www.tapchicongsan.org.vn/documents/20182/115688290/HCM.jpg/921a222c-8cf4-424f-bf6b-13ab7d741184?t=1622793973647"
                alt="Khủng hoảng đường lối cứu nước đầu thế kỷ XX"
                preview={true}
              />
              {/* <div className="image-caption-overlay">
                Khủng hoảng đường lối cứu nước đầu thế kỷ XX
              </div> */}
            </div>

            <div className="brief-content">
              <h4 className="content-title">Khủng hoảng Đường lối Cứu nước</h4>
              <p className="key-summary">
                Các phong trào yêu nước từ phong kiến (Cần Vương) đến tư sản,
                tiểu tư sản (Việt Nam Quốc dân Đảng) đều thất bại. Đất nước{" "}
                <span className="highlight-text">
                  "đen tối như không có đường ra"
                </span>
                .
              </p>
              <Button
                type="primary"
                className="learn-more-btn"
                icon={
                  expandedSections.crisis ? <UpOutlined /> : <DownOutlined />
                }
                onClick={() => toggleSection("crisis")}
              >
                {expandedSections.crisis ? "Thu gọn" : "Tìm hiểu thêm"}
              </Button>
              {expandedSections.crisis && (
                <div className="expanded-detail">
                  <p>
                    <strong>Nguyên nhân thất bại:</strong> Thiếu đường lối chính
                    trị đủ khả năng giải quyết triệt để mâu thuẫn cơ bản của xã
                    hội thuộc địa. Các phong trào chỉ dựa vào hệ tư tưởng lạc
                    hậu hoặc thiếu sự lãnh đạo của giai cấp công nhân.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="inline-pair">
            <div className="brief-content">
              <h4 className="content-title">Bước ngoặt: Chủ nghĩa Mác-Lênin</h4>
              <p className="key-summary">
                Nguyễn Ái Quốc tìm đường cứu nước, tiếp cận và vận dụng{" "}
                <span className="highlight-text">Chủ nghĩa Mác-Lênin</span> vào
                thực tiễn Việt Nam - bước ngoặt quyết định.
              </p>
              <Button
                type="primary"
                className="learn-more-btn"
                icon={
                  expandedSections.turning ? <UpOutlined /> : <DownOutlined />
                }
                onClick={() => toggleSection("turning")}
              >
                {expandedSections.turning ? "Thu gọn" : "Tìm hiểu thêm"}
              </Button>
              {expandedSections.turning && (
                <div className="expanded-detail">
                  <p>
                    Người đã tìm ra con đường cứu nước duy nhất: kết hợp vận
                    động giải phóng dân tộc với cách mạng vô sản. Chủ nghĩa
                    Mác-Lênin cung cấp nền tảng lý luận khoa học và phương pháp
                    cách mạng đúng đắn.
                  </p>
                </div>
              )}
            </div>
            <Image
              src="https://imgcdn.tapchicongthuong.vn/tcct-media/20/1/24/nguyen-ai-quoc.jpg"
              alt="Nguyễn Ái Quốc - Hồ Chí Minh"
              preview={true}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="inline-pair">
            <Image
              src="https://cdn-images.vtv.vn/zoom/700_438/2020/6/8/photo-1-15916299088202067720891.jpg"
              alt="Ra đời Đảng Cộng sản Việt Nam"
              preview={true}
            />

            <div className="brief-content highlight-box">
              <h4 className="content-title">Ra đời Đảng Cộng sản (2/1930)</h4>
              <p className="key-summary">
                Sản phẩm tất yếu của sự kết hợp:{" "}
                <strong>
                  Chủ nghĩa Mác-Lênin + Phong trào Công nhân + Phong trào Yêu
                  nước
                </strong>
              </p>
              <Button
                type="primary"
                className="learn-more-btn"
                icon={
                  expandedSections.party ? <UpOutlined /> : <DownOutlined />
                }
                onClick={() => toggleSection("party")}
              >
                {expandedSections.party ? "Thu gọn" : "Tìm hiểu thêm"}
              </Button>
              {expandedSections.party && (
                <div className="expanded-detail">
                  <p>
                    Đảng ra đời với Cương lĩnh chính trị đầu tiên đúng đắn, mở
                    ra thời kỳ phát triển mới cho cách mạng và dân tộc. Đảng
                    khẳng định vai trò tiên phong của giai cấp công nhân và đại
                    diện trung thành lợi ích của toàn thể nhân dân lao động.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 1.2 Cách mạng Tháng Tám */}
      <div className="image-focus-block">
        <div className="subsection-header">
          <div className="subsection-number">1.2</div>
          <h3 className="subsection-title">
            Cách mạng Tháng Tám 1945: Đỉnh cao Lãnh đạo
          </h3>
        </div>

        <div className="image-grid-layout">
          <div className="image-wrapper aspect-16-9 featured">
            <Image
              src="https://tonghop.kiengiang.dcs.vn/uploads/news/2023_08/anh-3.jpg"
              alt="Cách mạng Tháng Tám 1945"
              preview={true}
            />
            <div className="image-caption-overlay">
              Cách mạng Tháng Tám 1945 - Thắng lợi Vĩ đại
            </div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">Thắng lợi Vĩ đại 8/1945</h4>
            <p className="key-summary">
              Đỉnh cao lãnh đạo của Đảng: Tổng khởi nghĩa thành công, thành lập{" "}
              <span className="highlight-text">
                nước Việt Nam Dân chủ Cộng hòa
              </span>{" "}
              - Kỷ nguyên mới lịch sử dân tộc.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={<InfoCircleOutlined />}
              onClick={() =>
                openModal(
                  <span
                    style={{
                      color: "#1890ff",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Cách mạng Tháng Tám 1945
                  </span>,
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "#f9f9f9",
                      borderRadius: "8px",
                    }}
                  >
                    <p style={{ marginBottom: "15px" }}>
                      <strong style={{ color: "#d32f2f" }}>
                        Tháng 8/1945:
                      </strong>{" "}
                      Tổng khởi nghĩa giành chính quyền trên toàn quốc.
                    </p>
                    <Image
                      src="https://tonghop.kiengiang.dcs.vn/uploads/news/2023_08/anh-3.jpg"
                      alt="Cách mạng Tháng Tám 1945"
                      preview={true}
                      style={{ marginBottom: "15px", borderRadius: "8px" }}
                    />
                    <p style={{ marginBottom: "15px" }}>
                      <strong style={{ color: "#d32f2f" }}>2/9/1945:</strong>{" "}
                      Tuyên ngôn Độc lập - "Nước Việt Nam có quyền hưởng tự do
                      và độc lập, và sự thật đã trở thành một nước tự do độc
                      lập."
                    </p>
                    <Image
                      src="https://file3.qdnd.vn/data/images/0/2025/08/05/upload_2126/3.jpg?dpi=150&quality=100&w=870"
                      alt="Tuyên ngôn độc lập 1945"
                      preview={true}
                      style={{ marginBottom: "15px", borderRadius: "8px" }}
                    />
                    <p style={{ marginBottom: "15px" }}>
                      Đây là bước ngoặt vĩ đại, chứng minh sự lãnh đạo đúng đắn
                      của Đảng trong thực tiễn cách mạng.
                    </p>
                  </div>
                )
              }
            >
              Tìm hiểu thêm
            </Button>
          </div>

          <div className="image-wrapper aspect-circle">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Vietnam.svg"
              alt="Quốc kỳ Việt Nam"
              preview={true}
            />
            <div className="image-caption-overlay">Lá cờ Độc lập</div>
          </div>
        </div>
      </div>

      {/* 1.3 Kháng chiến Chống Pháp */}
      <div className="image-focus-block">
        <div className="subsection-header">
          <div className="subsection-number">1.3</div>
          <h3 className="subsection-title">
            Kháng chiến Chống Pháp (1945–1954)
          </h3>
        </div>

        <div className="image-grid-layout">
          <div className="aspect-4-3">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Kháng chiến chống Pháp"
              preview={true}
            />
            <div className="image-caption-overlay">
              Kháng chiến Toàn dân, Toàn diện
            </div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">Đường lối Kháng chiến</h4>
            <p className="key-summary">
              Đảng cầm quyền đối mặt tình thế{" "}
              <span className="highlight-text">"ngàn cân treo sợi tóc"</span>.
              Đề ra đường lối: <strong>Toàn dân, Toàn diện, Lâu dài</strong>.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.resistance ? <UpOutlined /> : <DownOutlined />
              }
              onClick={() => toggleSection("resistance")}
            >
              {expandedSections.resistance ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.resistance && (
              <div className="expanded-detail">
                <ul>
                  <li>
                    <strong>Toàn dân:</strong> Động viên toàn thể nhân dân
                  </li>
                  <li>
                    <strong>Toàn diện:</strong> Đánh trên mọi mặt trận - quân
                    sự, chính trị, ngoại giao
                  </li>
                  <li>
                    <strong>Lâu dài:</strong> Chuẩn bị tinh thần và vật chất
                  </li>
                  <li>
                    <strong>Dựa vào sức mình là chính:</strong> Tự lực cánh
                    sinh, độc lập tự chủ
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="image-wrapper aspect-16-9 featured">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Chiến thắng Điện Biên Phủ"
              preview={true}
            />
            <div className="image-caption-overlay">
              Điện Biên Phủ 5/1954 - "Lừng lẫy Năm Châu, Chấn động Địa Cầu"
            </div>
          </div>

          <div className="brief-content highlight-box">
            <h4 className="content-title">Điện Biên Phủ (5/1954)</h4>
            <p className="key-summary">
              Chiến thắng lịch sử buộc Pháp ký{" "}
              <span className="highlight-text">Hiệp định Giơnevơ</span> (7/1954)
              - Công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ
              Việt Nam.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={expandedSections.dbp ? <UpOutlined /> : <DownOutlined />}
              onClick={() => toggleSection("dbp")}
            >
              {expandedSections.dbp ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.dbp && (
              <div className="expanded-detail">
                <p>
                  <strong>Chiến dịch Điện Biên Phủ</strong> là đỉnh cao nghệ
                  thuật quân sự Việt Nam, kết hợp sức mạnh quân sự và chính trị.
                  Thắng lợi này không chỉ đánh bại thực dân Pháp mà còn lay
                  chuyển hệ thống thuộc địa trên toàn thế giới.
                </p>
                <p>
                  <strong>Hiệp định Giơnevơ 7/1954:</strong> Công nhận độc lập,
                  chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, Lào,
                  và Campuchia.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 1.4 Thách thức Mới */}
      <div className="image-focus-block">
        <div className="subsection-header">
          <div className="subsection-number">1.4</div>
          <h3 className="subsection-title">Thách thức Mới: Can thiệp của Mỹ</h3>
        </div>

        <div className="image-grid-layout">
          <div className="image-wrapper aspect-16-9 featured">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
              alt="Đế quốc Mỹ can thiệp"
              preview={true}
            />
            <div className="image-caption-overlay">
              Mỹ thay thế Pháp - Chia cắt Đất nước (1954)
            </div>
          </div>

          <div className="brief-content">
            <h4 className="content-title">Đế quốc Mỹ Can thiệp</h4>
            <p className="key-summary">
              Ngay sau Hiệp định Giơnevơ, Mỹ thay Pháp, áp đặt{" "}
              <span className="highlight-text">chủ nghĩa thực dân mới</span>,
              chia cắt đất nước tại vĩ tuyến 17, lập chính quyền tay sai Ngô
              Đình Diệm.
            </p>
            <Button
              type="primary"
              className="learn-more-btn"
              icon={
                expandedSections.usintervention ? (
                  <UpOutlined />
                ) : (
                  <DownOutlined />
                )
              }
              onClick={() => toggleSection("usintervention")}
            >
              {expandedSections.usintervention ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>
            {expandedSections.usintervention && (
              <div className="expanded-detail">
                <p>
                  <strong>Âm mưu của Mỹ:</strong> Chia cắt lâu dài Việt Nam,
                  biến miền Nam thành tiền đồn chống Cộng sản và căn cứ quân sự.
                </p>
                <p>
                  <strong>Hậu quả:</strong> Gián đoạn tiến trình thống nhất, đặt
                  đất nước trước cuộc đối đầu mới phức tạp và khốc liệt hơn
                  nhiều.
                </p>
              </div>
            )}
          </div>

          <div className="image-wrapper aspect-circle">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Vietnam.svg"
              alt="Chia cắt đất nước"
              preview={true}
            />
            <div className="image-caption-overlay">Đất nước bị chia cắt</div>
          </div>
        </div>
      </div>

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={700}
      >
        <div style={{ lineHeight: 1.8 }}>{modalContent.content}</div>
      </Modal>
    </div>
  );
}
