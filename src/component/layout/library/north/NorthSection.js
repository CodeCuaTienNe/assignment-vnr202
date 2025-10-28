"use client";

import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./NorthSection.css";

export default function NorthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 3);
  const section31 = chapter.sections.find((s) => s.section_id === "3.1");
  const section32 = chapter.sections.find((s) => s.section_id === "3.2");

  return (
    <div className="north-section">
      {/* Section 3.1: Xây dựng CNXH và Vai trò Hậu phương */}
      <div className="construction-block">
        <div className="subsection-header">
          <div className="subsection-number">3.1</div>
          <h3 className="subsection-title">{section31.title}</h3>
        </div>

        <div className="strategic-role-highlight">
          <p className="role-text">{section31.content.strategic_role}</p>
        </div>

        {/* Five Year Plan */}
        <div className="five-year-plan">
          <h4 className="plan-title">
            Kế hoạch 5 năm lần thứ nhất (
            {section31.content.first_five_year_plan.period})
          </h4>
          <p className="plan-goal">
            {section31.content.first_five_year_plan.goal}
          </p>
        </div>

        {/* Wartime Adjustment */}
        <div className="wartime-section">
          <div className="adjustment-header">
            <h4>Điều chỉnh Chiến lược trong Chiến tranh</h4>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Điều chỉnh Chiến lược",
                  <div>
                    <p>
                      <strong>Khởi đầu:</strong>{" "}
                      {section31.content.wartime_adjustment.trigger}
                    </p>
                    <p>
                      <strong>Đáp ứng:</strong>{" "}
                      {section31.content.wartime_adjustment.response}
                    </p>
                    <p>
                      <strong>Chiến lược:</strong>{" "}
                      {section31.content.wartime_adjustment.strategy}
                    </p>
                    <p>
                      <strong>Tinh thần:</strong>{" "}
                      <em>"{section31.content.wartime_adjustment.spirit}"</em>
                    </p>
                  </div>
                )
              }
            />
          </div>

          <div className="adjustment-content">
            <p>
              <strong>Khởi đầu:</strong>{" "}
              {section31.content.wartime_adjustment.trigger}
            </p>
            <p>
              <strong>Chiến lược:</strong>{" "}
              {section31.content.wartime_adjustment.strategy}
            </p>
            <div className="spirit-quote">
              "{section31.content.wartime_adjustment.spirit}"
            </div>
          </div>
        </div>

        {/* Emulation Movements */}
        <div className="emulation-movements">
          <h4 className="movements-title">Phong trào Thi đua Yêu nước</h4>
          <div className="movements-grid">
            {section31.content.emulation_movements.map((movement, idx) => (
              <div key={idx} className="movement-card">
                <div className="movement-name">{movement.name}</div>
                <div className="movement-target">
                  Đối tượng: {movement.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3.2: Đường Hồ Chí Minh */}
      <div className="trail-block">
        <div className="subsection-header">
          <div className="subsection-number">3.2</div>
          <h3 className="subsection-title">{section32.title}</h3>
        </div>

        <div className="trail-hero">
          <Image
            src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/j4_8gXMUyT/vna_potal_90_nam_dcs_viet_nam_doan_567_xuyen_nui_thong_duong_truong_son_10_-_1973__151900697_stand-998x665.jpg"
            alt="Đường Hồ Chí Minh"
            preview={true}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <p className="image-caption">
            Đoàn 567 xuyên núi thông Đường Trường Sơn (10/1973)
          </p>
        </div>

        <div className="trail-info-grid">
          <div className="trail-founding">
            <h4>Thành lập</h4>
            <p>
              <strong>Ngày:</strong> {section32.content.founding.date}
            </p>
            <p>
              <strong>Tên gọi:</strong> {section32.content.founding.name}
            </p>
            <p>
              <strong>Ý nghĩa:</strong>{" "}
              {section32.content.founding.significance}
            </p>
            <p>
              <strong>Chức năng:</strong> {section32.content.founding.function}
            </p>
          </div>

          <div className="trail-thinking">
            <h4>Tư tưởng Chiến lược</h4>
            <div className="thinking-quote">
              "{section32.content.strategic_thinking}"
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="specifications-section">
          <h4 className="spec-title">Quy mô và Thông số Kỹ thuật</h4>
          <div className="spec-grid">
            <div className="spec-item">
              <div className="spec-icon">⏱</div>
              <div className="spec-label">Thời gian hoạt động</div>
              <div className="spec-value">
                {section32.content.specifications.duration}
              </div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">🛣</div>
              <div className="spec-label">Đường bộ</div>
              <div className="spec-value">
                {section32.content.specifications.road_length}
              </div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">🛢</div>
              <div className="spec-label">Đường ống</div>
              <div className="spec-value">
                {section32.content.specifications.pipeline_length}
              </div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">📡</div>
              <div className="spec-label">Thông tin liên lạc</div>
              <div className="spec-value">
                {section32.content.specifications.communication_lines}
              </div>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="challenges-section">
          <h4>Thử thách và Khó khăn</h4>
          <div className="challenge-box">
            <p>
              <strong>Bom đạn địch:</strong>{" "}
              {section32.content.challenges.enemy_bombing}
            </p>
            <p>
              <strong>Chiến tranh hóa học:</strong>{" "}
              {section32.content.challenges.chemical_warfare}
            </p>
          </div>
        </div>

        {/* Support Results */}
        <div className="support-results">
          <h4 className="results-title">Kết quả Chi viện</h4>

          <div className="overall-support">
            <h5>Tổng thể (1959-1975)</h5>
            <div className="support-stats">
              <div className="stat-item">
                <div className="stat-value">
                  {section32.content.support_results.overall.troops}
                </div>
                <div className="stat-label">Bộ đội chủ lực</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  {section32.content.support_results.overall.weapons_food}
                </div>
                <div className="stat-label">Vũ khí & Lương thực</div>
              </div>
            </div>
          </div>

          <div className="campaign-1975">
            <h5>Chiến dịch Mùa Xuân 1975</h5>
            <div className="campaign-stats">
              <p>
                <strong>Thời gian:</strong>{" "}
                {section32.content.support_results["1975_campaign"].period}
              </p>
              <p>
                <strong>Quân số:</strong>{" "}
                {
                  section32.content.support_results["1975_campaign"]
                    .troops_transported
                }
              </p>
              <p>
                <strong>Hàng hóa:</strong>{" "}
                {
                  section32.content.support_results["1975_campaign"]
                    .supplies_transported
                }
              </p>
              <p>
                <strong>Điểm đến:</strong>{" "}
                {section32.content.support_results["1975_campaign"].destination}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper">
          <h4 className="table-title">
            {section32.content.comparison_table.title}
          </h4>
          <table className="trail-table">
            <thead>
              <tr>
                <th>Đặc điểm</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {section32.content.comparison_table.data.map((row, idx) => (
                <tr key={idx}>
                  <td className="characteristic-cell">{row.characteristic}</td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={700}
      >
        <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </div>
      </Modal>
    </div>
  );
}
