"use client";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./OrientationSection.css";

export default function OrientationSection() {
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
    <div className="orientation-section">
      {/* Hero Banner */}
      <div className="image-story-container">
        <div className="image-wrapper aspect-16-9">
          <Image
            src="https://baotuyenquang.com.vn/media/images/2021/01/img_20210119125253.jpg"
            alt="Định hướng lý tưởng sinh viên"
            preview={true}
            className="story-image"
          />
          <div className="image-caption-overlay">
            Định hướng Lý tưởng Cách mạng cho Sinh viên
          </div>
        </div>
      </div>

      {/* Giới thiệu */}
      <div className="image-grid-layout">
        <div className="story-block">
          <div className="image-wrapper aspect-circle">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Vietnam.svg"
              alt="Lý tưởng cách mạng"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">Lý tưởng Cách mạng</div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <p>
                Từ những bài học lịch sử vĩ đại của cuộc kháng chiến chống Mỹ,
                cứu nước (1954-1975), thế hệ sinh viên hôm nay cần{" "}
                <strong>tiếp thu, vận dụng và phát huy</strong> để trở thành
                những người công dân có trách nhiệm.
              </p>
              <p>
                Lý tưởng cách mạng hiện nay chính là mục tiêu xây dựng đất nước
                theo định hướng xã hội chủ nghĩa:{" "}
                <strong>
                  "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ba hướng định hướng chính */}
      <div className="image-grid-layout">
        <h3 className="section-heading">
          <span className="section-number">6.1</span>
          Ba Định hướng Cốt lõi cho Sinh viên
        </h3>

        {/* Định hướng 1: Học tập và Nghiên cứu */}
        <div className="story-block">
          <div className="image-wrapper aspect-4-3">
            <Image
              src="https://www.ulis.vnu.edu.vn/files/uploads/2023/02/thanh-nien-nghien-cuu-khoa-hoc.jpg"
              alt="Học tập và nghiên cứu"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">Học tập và Nghiên cứu Khoa học</div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <h4>📚 Trang bị Tri thức Toàn diện</h4>
              <p>
                Sinh viên cần không ngừng <strong>học tập, nghiên cứu</strong>{" "}
                để nâng cao trình độ chuyên môn, kiến thức lý luận chính trị, và
                kỹ năng thực hành.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("hoctap")}
              icon={
                expandedSections["hoctap"] ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections["hoctap"] ? "Thu gọn" : "Chi tiết hướng dẫn"}
            </Button>

            {expandedSections["hoctap"] && (
              <div className="expanded-detail">
                <h5>01. Học tập Lý luận Chính trị</h5>
                <p>
                  Nghiên cứu sâu về Chủ nghĩa Mác-Lênin, Tư tưởng Hồ Chí Minh,
                  Đường lối Đảng Cộng sản Việt Nam. Hiểu rõ lịch sử Đảng và
                  truyền thống cách mạng để vững tin vào con đường xã hội chủ
                  nghĩa.
                </p>
                <h5>02. Nâng cao Chuyên môn</h5>
                <p>
                  Tiếp thu kiến thức khoa học-công nghệ tiên tiến, phát triển kỹ
                  năng nghề nghiệp để đáp ứng yêu cầu phát triển đất nước. Tích
                  cực nghiên cứu khoa học, sáng tạo, tạo ra giá trị mới.
                </p>
                <h5>03. Rèn luyện Kỹ năng Thực hành</h5>
                <p>
                  Chủ động tham gia thực tập, thực hành, làm việc nhóm, rèn
                  luyện kỹ năng giao tiếp, tư duy phản biện, và khả năng giải
                  quyết vấn đề thực tiễn.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Định hướng 2: Rèn luyện Đạo đức */}
        <div className="story-block">
          <div className="image-wrapper aspect-16-9">
            <Image
              src="https://baotintuc.vn/stores/news_dataimages/diannt/022022/28/15/nhung-guong-mat-tre-tieu-bieu-trong-phong-trao-thanh-nien-tap-trung-kinh-te-moi-20220228151754.jpg"
              alt="Rèn luyện đạo đức"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">Rèn luyện Đạo đức, Lối sống</div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <h4>💪 Phẩm chất Cách mạng</h4>
              <p>
                Noi gương các thế hệ chiến sĩ cộng sản, phát huy{" "}
                <strong>đức hy sinh, tính tiên phong gương mẫu</strong>. Chống
                lại các biểu hiện tiêu cực như tham nhũng, suy thoái tư tưởng.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("daoduc")}
              icon={
                expandedSections["daoduc"] ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections["daoduc"] ? "Thu gọn" : "Các giá trị cốt lõi"}
            </Button>

            {expandedSections["daoduc"] && (
              <div className="expanded-detail">
                <h5>Tinh thần Yêu nước, Tự lực, Tự cường</h5>
                <p>
                  Chuyển hóa bài học{" "}
                  <strong>"dựa vào sức mình là chính"</strong> từ cuộc kháng
                  chiến thành hành động sáng tạo: Làm chủ khoa học công nghệ, tự
                  chủ về kiến thức và chuyên môn, tạo ra giá trị mới cho đất
                  nước.
                </p>
                <h5>Đức Trung thành với Đảng, Tận tụy với Dân</h5>
                <p>
                  Kiên định lý tưởng cách mạng, tin tưởng vào sự lãnh đạo của
                  Đảng, phục vụ nhân dân hết lòng, đặt lợi ích tập thể lên trên
                  lợi ích cá nhân.
                </p>
                <h5>Tinh thần Đoàn kết, Hợp tác</h5>
                <p>
                  Phát huy truyền thống đại đoàn kết dân tộc, biết hợp tác, làm
                  việc nhóm hiệu quả, tôn trọng sự khác biệt, xây dựng môi
                  trường học tập, làm việc tích cực.
                </p>
                <h5>Lối sống Lành mạnh, Văn minh</h5>
                <p>
                  Sống giản dị, chân thật, tránh xa các tệ nạn xã hội, sống có
                  trách nhiệm với bản thân, gia đình và xã hội, góp phần xây
                  dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Định hướng 3: Hành động và Cống hiến */}
        <div className="story-block">
          <div className="image-wrapper aspect-4-3">
            <Image
              src="https://minhchien.binhdinh.gov.vn/documents/89621/6551834/thanh+nien+xung+phong/3d24d5ce-9ca4-4a7f-ba71-e05c65eecbec?t=1709086922513"
              alt="Hành động và cống hiến"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">Hành động và Cống hiến</div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <h4>🚀 Hành động Cụ thể</h4>
              <p>
                Chuyển hóa lý tưởng thành <strong>hành động thiết thực</strong>,
                tích cực tham gia các hoạt động xã hội, tình nguyện, xây dựng
                cộng đồng và đóng góp vào sự phát triển của đất nước.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("hanhdong")}
              icon={
                expandedSections["hanhdong"] ? <UpOutlined /> : <DownOutlined />
              }
            >
              {expandedSections["hanhdong"] ? "Thu gọn" : "Cách thức cống hiến"}
            </Button>

            {expandedSections["hanhdong"] && (
              <div className="expanded-detail">
                <h5>Tham gia Hoạt động Xã hội</h5>
                <p>
                  Tích cực tham gia các chương trình tình nguyện, hoạt động cộng
                  đồng, phong trào thanh niên, đóng góp trí tuệ và sức trẻ vào
                  các công trình, dự án phát triển địa phương và quốc gia.
                </p>
                <h5>Sáng tạo và Khởi nghiệp</h5>
                <p>
                  Phát huy tinh thần sáng tạo, dám nghĩ, dám làm, khởi nghiệp để
                  tạo việc làm cho bản thân và cộng đồng, góp phần phát triển
                  kinh tế-xã hội.
                </p>
                <h5>Bảo vệ Chủ quyền và An ninh</h5>
                <p>
                  Nâng cao ý thức bảo vệ chủ quyền lãnh thổ, an ninh quốc gia,
                  đấu tranh phản bác các quan điểm sai trái, thù địch trên không
                  gian mạng và trong đời sống.
                </p>
                <h5>Xây dựng Đất nước và Hội nhập Quốc tế</h5>
                <p>
                  Chuẩn bị sẵn sàng trở thành nguồn nhân lực chất lượng cao,
                  thực hiện khát vọng cống hiến cho sự nghiệp xây dựng và bảo vệ
                  Tổ quốc, hội nhập sâu rộng vào nền kinh tế thế giới.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lời kêu gọi cuối */}
      <div className="image-story-container">
        <div className="story-block">
          <div className="image-wrapper aspect-16-9">
            <Image
              src="https://img.nhandan.vn/Files/Images/2024/01/29/nhan_dan_31-1706520063082.jpg"
              alt="Thế hệ trẻ Việt Nam"
              preview={true}
              className="story-image"
            />
            <div className="image-caption">
              Thế hệ trẻ Việt Nam - Tiếp nối Lửa đỏ
            </div>
          </div>

          <div className="story-content">
            <div className="brief-content">
              <h4>🔥 Lời kêu gọi</h4>
              <p className="lead-text">
                <em>
                  "Lịch sử 1954–1975 chứng minh rằng Đảng Cộng sản Việt Nam có
                  khả năng đưa ra những quyết sách độc lập, sáng tạo, vượt qua
                  mọi thách thức hiểm nghèo."
                </em>
              </p>
              <p>
                Điều này cung cấp <strong>cơ sở lịch sử vững chắc</strong> để
                thế hệ trẻ tin tưởng tuyệt đối vào sự lãnh đạo của Đảng trong
                công cuộc đổi mới và hội nhập toàn diện hiện nay.
              </p>
            </div>

            <Button
              type="link"
              className="learn-more-btn"
              onClick={() => toggleSection("loikeu goi")}
              icon={
                expandedSections["loikeugoi"] ? (
                  <UpOutlined />
                ) : (
                  <DownOutlined />
                )
              }
            >
              {expandedSections["loikeugoi"]
                ? "Thu gọn"
                : "Thông điệp cho thế hệ trẻ"}
            </Button>

            {expandedSections["loikeugoi"] && (
              <div className="expanded-detail">
                <h5>Niềm tin vào Đảng</h5>
                <p>
                  Lịch sử đã chứng minh sự lãnh đạo đúng đắn, sáng tạo của Đảng
                  qua những thời kỳ khó khăn nhất. Thế hệ trẻ cần tiếp tục tin
                  tưởng và đồng hành cùng Đảng trong con đường xây dựng đất
                  nước.
                </p>
                <h5>Tiếp nối Truyền thống</h5>
                <p>
                  Mỗi sinh viên là một mắt xích trong chuỗi truyền thống vẻ vang
                  của dân tộc. Hãy học tập, rèn luyện, cống hiến để xứng đáng
                  với sự hy sinh của các thế hệ đi trước.
                </p>
                <h5>Vững tin Tương lai</h5>
                <p>
                  Với nền tảng vững chắc từ lịch sử và sự lãnh đạo sáng suốt của
                  Đảng, tương lai đất nước sẽ ngày càng tươi sáng. Hãy là một
                  phần của tương lai đó!
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
