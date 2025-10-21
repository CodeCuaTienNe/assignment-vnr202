"use client";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./SouthSection.css";

export default function SouthSection() {
  const [expandedSections, setExpandedSections] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  return (
    <div className="south-section">
      {/* Hero Banner */}
      <div className="image-story-container">
        <div className="image-wrapper aspect-16-9">
          <Image
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Miền Nam tiền tuyến lớn"
            preview={true}
            className="story-image"
          />
          <div className="image-caption-overlay">
            Miền Nam: Tiền tuyến Lớn Chiến Đấu (1954-1975)
          </div>
        </div>
      </div>

      {/* 4.1 Nghị quyết 15 và Đồng khởi */}
      <div className="image-grid-layout">
        <h3 className="section-heading">
          <span className="section-number">4.1</span>
          Nghị quyết 15 và Phong trào Đồng khởi (1954–1960)
        </h3>

        <div className="story-block">
          <div className="image-wrapper aspect-4-3">
            <Image
              src="https://img.nhandan.vn/Files/Images/2022/08/20/Dong_khoi_-1661004346.jpg"
              alt="Phong trào Đồng khởi"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">
              Phong trào Đồng khởi Bến Tre 1960
            </div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <p>
                <strong>Nghị quyết 15 (1/1959)</strong>: Xác định con đường cách
                mạng miền Nam là{" "}
                <strong>
                  sử dụng bạo lực cách mạng, kết hợp đấu tranh chính trị với đấu
                  tranh vũ trang
                </strong>
                , tiến tới khởi nghĩa giành chính quyền.
              </p>
              <p>
                <strong>Đồng khởi Bến Tre (1/1960)</strong> bùng nổ và lan rộng
                khắp miền Nam, phá vỡ cơ cấu chính quyền địch, chuyển cách mạng
                từ thế giữ gìn sang <strong>thế tiến công</strong>.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("nghiquyet15")}
              icon={
                expandedSections["nghiquyet15"] ? (
                  <UpOutlined />
                ) : (
                  <DownOutlined />
                )
              }
            >
              {expandedSections["nghiquyet15"] ? "Thu gọn" : "Tìm hiểu thêm"}
            </Button>

            {expandedSections["nghiquyet15"] && (
              <div className="expanded-detail">
                <h5>Bối cảnh lịch sử</h5>
                <p>
                  Sau năm 1954, cách mạng miền Nam chuyển từ đấu tranh vũ trang
                  sang đấu tranh chính trị. Tuy nhiên, chính quyền Mỹ-Diệm thi
                  hành chính sách khủng bố dã man, đỉnh điểm là{" "}
                  <strong>Luật 10/59</strong>, sử dụng Tòa án quân sự đặc biệt
                  đàn áp người yêu nước. Tình thế cách mạng miền Nam lâm vào thế
                  "hiểm nghèo".
                </p>
                <h5>Quyết định chiến lược</h5>
                <p>
                  Đáp lại yêu cầu sinh tồn và sự phát triển của mâu thuẫn giai
                  cấp, dân tộc,{" "}
                  <strong>Hội nghị Trung ương lần thứ 15 (1/1959)</strong> xác
                  định con đường cách mạng miền Nam là sử dụng bạo lực, kết hợp
                  đấu tranh chính trị với vũ trang, tiến tới khởi nghĩa giành
                  chính quyền.
                </p>
                <h5>Thắng lợi Đồng khởi</h5>
                <p>
                  Phong trào <strong>Đồng khởi Bến Tre (1/1960)</strong> bùng nổ
                  và lan rộng khắp miền Nam, phá vỡ cơ cấu chính quyền cơ sở của
                  địch, chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang
                  thế tiến công. Dẫn đến sự ra đời của{" "}
                  <strong>
                    Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (12/1960)
                  </strong>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4.2 Đánh bại Chiến lược Chiến tranh của Mỹ */}
      <div className="image-grid-layout">
        <h3 className="section-heading">
          <span className="section-number">4.2</span>
          Đánh bại các Chiến lược Chiến tranh của Mỹ (1961–1973)
        </h3>

        {/* Chiến tranh Đặc biệt */}
        <div className="story-block">
          <div className="image-wrapper aspect-16-9">
            <Image
              src="https://image.baophapluat.vn/zoom/680_0/Uploaded/2024/ecilozx/2024_01_02/chien-thang-ap-bac-1-2-1963-2-1577.jpg"
              alt="Chiến thắng Ấp Bắc"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">Chiến thắng Ấp Bắc 1963</div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <h4>A. Đánh bại Chiến tranh Đặc biệt (1961–1965)</h4>
              <p>
                <strong>Chiến lược Mỹ</strong>: "Cố vấn, vũ khí Mỹ + Quân chủ
                lực Việt Nam Cộng hòa", xây dựng 17,000 "ấp chiến lược".
              </p>
              <p>
                <strong>Đáp trả</strong>: Giữ vững thế tiến công, phá Ấp Chiến
                lược. <strong>Chiến thắng Ấp Bắc (1/1963)</strong> - trận đột
                phá đầu tiên, khẳng định khả năng đánh thắng quân đội được Mỹ
                trang bị hiện đại.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("ctdb")}
              icon={
                expandedSections["ctdb"] ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections["ctdb"] ? "Thu gọn" : "Chi tiết chiến lược"}
            </Button>

            {expandedSections["ctdb"] && (
              <div className="expanded-detail">
                <p>
                  Đảng chỉ đạo giữ vững thế tiến công, phá Ấp Chiến lược. Sự kết
                  hợp giữa đấu tranh vũ trang và nổi dậy của quần chúng đã làm
                  phá sản quốc sách "ấp chiến lược" và chiến lược "Chiến tranh
                  Đặc biệt" của Mỹ. Chiến thắng Ấp Bắc (1/1963) khẳng định khả
                  năng đánh thắng quân đội Sài Gòn được trang bị hiện đại của
                  Mỹ.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Chiến tranh Cục bộ */}
        <div className="story-block">
          <div className="image-wrapper aspect-4-3">
            <Image
              src="https://tintuc.vn/static/vnw/images/vn/default_vn-235x132.png"
              alt="Tổng tiến công Mậu Thân"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">Tổng tiến công Mậu Thân 1968</div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <h4>B. Đánh bại Chiến tranh Cục bộ (1965–1968)</h4>
              <p>
                <strong>Chiến lược Mỹ</strong>: Đưa quân chiến đấu trực tiếp vào
                miền Nam.
              </p>
              <p>
                <strong>Đáp trả</strong>: Phát động kháng chiến chống Mỹ toàn
                quốc. <strong>Chiến thắng Vạn Tường (8/1965)</strong> mở đầu cao
                trào "tìm diệt" Mỹ.
              </p>
              <p>
                <strong>Đỉnh cao</strong>:{" "}
                <strong>Tổng tiến công và Nổi dậy Xuân Mậu Thân (1968)</strong>{" "}
                - Bước ngoặt chiến lược, buộc Mỹ phải đàm phán tại Paris và chấm
                dứt chiến tranh phá hoại miền Bắc.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("ctcb")}
              icon={
                expandedSections["ctcb"] ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections["ctcb"] ? "Thu gọn" : "Chi tiết bước ngoặt"}
            </Button>

            {expandedSections["ctcb"] && (
              <div className="expanded-detail">
                <h5>Bước ngoặt Mậu Thân 1968</h5>
                <p>
                  Cuộc tiến công chiến lược đánh thẳng vào các đô thị, căn cứ
                  đầu não của Mỹ-Ngụy, gây tổn thất lớn và tạo ra bước ngoặt
                  chiến lược, buộc Mỹ phải chấp nhận đàm phán tại Paris và chấm
                  dứt chiến tranh phá hoại miền Bắc.
                </p>
                <h5>Bài học tự phê bình</h5>
                <p>
                  Sau thắng lợi lớn Mậu Thân, Đảng đã "chuyển chậm" và có biểu
                  hiện chủ quan, tiếp tục mở các đợt tiến công vào đô thị khi
                  không còn yếu tố bất ngờ, dẫn đến tổn thất. Tuy nhiên, việc
                  Đảng công khai thừa nhận những sai lầm chiến lược cho thấy{" "}
                  <strong>bản chất cách mạng, khả năng tự phê bình</strong> và
                  sửa chữa khuyết điểm.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Việt Nam hóa Chiến tranh */}
        <div className="story-block">
          <div className="image-wrapper aspect-16-9">
            <Image
              src="https://media.doisongphapluat.com/files/content/2022/12/27/b52-080116.jpg"
              alt="Điện Biên Phủ trên không"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">
              Chiến thắng Điện Biên Phủ trên không 1972
            </div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <h4>C. Đánh bại Việt Nam hóa Chiến tranh (1969–1973)</h4>
              <p>
                <strong>Chiến lược Mỹ</strong>: "Dùng người Việt Nam đánh người
                Việt Nam", bình định nông thôn.
              </p>
              <p>
                <strong>Đáp trả</strong>: Kiên định khẩu hiệu{" "}
                <strong>"Đánh cho Mỹ cút, đánh cho Ngụy nhào"</strong>. Các cuộc
                tấn công chiến lược: Đường 9 - Nam Lào (1971), Chiến dịch
                Xuân-Hè 1972.
              </p>
              <p>
                <strong>Thắng lợi lớn</strong>:{" "}
                <strong>Điện Biên Phủ trên không (12/1972)</strong> và{" "}
                <strong>Hiệp định Paris (1/1973)</strong> - Mỹ phải rút hết quân
                viễn chinh và quân chư hầu ra khỏi miền Nam.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("vnhct")}
              icon={
                expandedSections["vnhct"] ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections["vnhct"] ? "Thu gọn" : "Hiệp định Paris"}
            </Button>

            {expandedSections["vnhct"] && (
              <div className="expanded-detail">
                <h5>Chiến lược Việt Nam hóa</h5>
                <p>
                  Chiến lược này nhằm "dùng người Việt Nam đánh người Việt Nam"
                  và tập trung vào bình định nông thôn. Đảng chủ động mở các
                  cuộc tấn công chiến lược lớn như Chiến thắng Đường 9 - Nam Lào
                  (1971) và Chiến dịch Xuân-Hè 1972.
                </p>
                <h5>Ý nghĩa Hiệp định Paris</h5>
                <p>
                  Hiệp định Paris (1/1973) buộc Mỹ phải chấm dứt chiến tranh,
                  rút hết quân viễn chinh và quân chư hầu ra khỏi miền Nam. Đây
                  là thắng lợi quan trọng hàng đầu, hoàn thành mục tiêu{" "}
                  <strong>"đánh cho Mỹ cút"</strong>, mở ra cơ hội chuyển sang
                  giai đoạn <strong>"đánh cho Ngụy nhào"</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4.3 Tổng tiến công 1975 */}
      <div className="image-grid-layout">
        <h3 className="section-heading">
          <span className="section-number">4.3</span>
          Tổng Tiến công và Nổi dậy Mùa Xuân 1975
        </h3>

        <div className="story-block">
          <div className="image-wrapper aspect-16-9">
            <Image
              src="https://nld.mediacdn.vn/291774122806476800/2021/4/30/3-1619753925903968281421.jpg"
              alt="30 tháng 4 năm 1975"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">
              30 tháng 4 năm 1975 - Giải phóng hoàn toàn miền Nam
            </div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <p>
                <strong>Chiến thắng Phước Long (1/1975)</strong>: Đòn thăm dò
                chiến lược, chứng tỏ khả năng giải phóng hoàn toàn đã chín muồi
                khi Mỹ không thể can thiệp trở lại.
              </p>
              <p>
                <strong>Quyết tâm chiến lược</strong>: Bộ Chính trị chuyển kế
                hoạch giải phóng trong hai năm thành quyết tâm giải phóng ngay
                trong năm 1975.
              </p>
              <p>
                <strong>Mệnh lệnh lịch sử</strong>:{" "}
                <em>"Thần tốc, thần tốc hơn nữa, táo bạo, táo bạo hơn nữa"</em>
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("tt1975")}
              icon={
                expandedSections["tt1975"] ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections["tt1975"]
                ? "Thu gọn"
                : "Chiến dịch Hồ Chí Minh"}
            </Button>

            {expandedSections["tt1975"] && (
              <div className="expanded-detail">
                <h5>Bối cảnh sau Hiệp định Paris</h5>
                <p>
                  Sau Hiệp định Paris, Mỹ và chính quyền Nguyễn Văn Thiệu phá
                  hoại hiệp định, tiếp tục lấn chiếm vùng giải phóng. Đảng nhận
                  định con đường cách mạng miền Nam vẫn là bạo lực cách mạng,
                  phải giữ vững thế tiến công chiến lược.
                </p>
                <h5>Nghệ thuật nắm bắt thời cơ</h5>
                <p>
                  Chiến thắng Phước Long (1/1975) là đòn thăm dò chiến lược quan
                  trọng, chứng tỏ khả năng giải phóng hoàn toàn đã chín muồi khi
                  Mỹ không có khả năng can thiệp trở lại. Dựa trên nhận định
                  này, Bộ Chính trị chuyển kế hoạch giải phóng miền Nam trong
                  hai năm (1975–1976) thành quyết tâm giải phóng ngay trong năm
                  1975.
                </p>
                <h5>Thắng lợi lịch sử</h5>
                <p>
                  Cuộc <strong>Tổng tiến công và Nổi dậy Mùa Xuân 1975</strong>,
                  mở đầu bằng Chiến dịch Tây Nguyên, tiến đến{" "}
                  <strong>Chiến dịch Hồ Chí Minh lịch sử</strong>, kết thúc
                  thắng lợi vào <strong>ngày 30 tháng 4 năm 1975</strong>, giải
                  phóng hoàn toàn miền Nam, thống nhất đất nước.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery các sự kiện 1975 */}
        <div className="image-gallery">
          <div className="gallery-item">
            <div className="image-wrapper aspect-1-1">
              <Image
                src="https://cdnphoto.dantri.com.vn/EahMYsfR-gTloIQgWpwUMWf3u8w=/thumb_w/990/2021/04/27/chien-thang-tay-nguyen-1975-1619512618595.jpeg"
                alt="Chiến dịch Tây Nguyên"
                preview={true}
                className="story-image"
              />
              <div className="image-caption">Chiến dịch Tây Nguyên 3/1975</div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="image-wrapper aspect-1-1">
              <Image
                src="https://image.baophapluat.vn/800x450/Uploaded/2024/qhjtktvoq/2024_04_26/bang-ten-duong-nguyen-hue-thuoc-phuong-hue-thuong-thanh-pho-hue-tinh-thua-thien-hue-0734.JPG"
                alt="Chiến dịch Huế - Đà Nẵng"
                preview={true}
                className="story-image"
              />
              <div className="image-caption">
                Chiến dịch Huế - Đà Nẵng 3/1975
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="image-wrapper aspect-1-1">
              <Image
                src="https://img.nhandan.vn/Files/Images/2022/04/27/Chien_dich_Ho_Chi_Minh-1651033653.jpg"
                alt="Chiến dịch Hồ Chí Minh"
                preview={true}
                className="story-image"
              />
              <div className="image-caption">Chiến dịch Hồ Chí Minh 4/1975</div>
            </div>
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
