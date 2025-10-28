"use client";

import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./StrategySection.css";

export default function StrategySection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 2);
  const section21 = chapter.sections.find((s) => s.section_id === "2.1");
  const section22 = chapter.sections.find((s) => s.section_id === "2.2");

  return (
    <div className="strategy-section">
      {/* Section 2.1: Nghị quyết 15 */}
      <div className="resolution-block">
        <div className="subsection-header">
          <div className="subsection-number">2.1</div>
          <h3 className="subsection-title">{section21.title}</h3>
          <Button
            type="text"
            icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
            onClick={() =>
              openModal(
                "Nghị quyết 15 - Bối cảnh",
                <div>
                  <p>
                    <strong>Bối cảnh:</strong> {section21.content.context}
                  </p>
                  <p>
                    <strong>Hội nghị:</strong>{" "}
                    {section21.content.conference.name}
                  </p>
                  <p>
                    <strong>Thời gian:</strong>{" "}
                    {section21.content.conference.date}
                  </p>
                  <p>
                    <strong>Ý nghĩa:</strong>{" "}
                    {section21.content.conference.significance}
                  </p>
                </div>
              )
            }
          />
        </div>

        <div className="resolution-content">
          <div className="context-warning">
            <strong>⚠ Tình hình:</strong> {section21.content.context}
          </div>

          <div className="key-decisions-grid">
            <div className="decision-card">
              <div className="decision-header">Nhiệm vụ cơ bản</div>
              <p>{section21.content.key_decisions.basic_mission}</p>
            </div>

            <div className="decision-card highlight">
              <div className="decision-header">Con đường phát triển</div>
              <p>{section21.content.key_decisions.development_path}</p>
            </div>

            <div className="decision-card">
              <div className="decision-header">Phương thức</div>
              <p>{section21.content.key_decisions.method}</p>
            </div>

            <div className="decision-card success">
              <div className="decision-header">Tác động</div>
              <p>{section21.content.key_decisions.impact}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2.2: Đồng Khởi và Chiến tranh Đặc biệt */}
      <div className="dongkhoi-block">
        <div className="subsection-header">
          <div className="subsection-number">2.2</div>
          <h3 className="subsection-title">{section22.title}</h3>
        </div>

        {/* Phong trào Đồng Khởi */}
        <div className="dongkhoi-content">
          <h4 className="content-subtitle">Phong trào Đồng Khởi (1960)</h4>

          <div className="split-image-content">
            <div className="content-side">
              <div className="info-item">
                <strong>Khởi đầu:</strong>{" "}
                {section22.content.dong_khoi_uprising.start_location} (
                {section22.content.dong_khoi_uprising.start_date})
              </div>
              <div className="info-item">
                <strong>Lan tỏa:</strong>{" "}
                {section22.content.dong_khoi_uprising.spread}
              </div>
              <div className="achievement-box">
                <strong>
                  Thành tựu (
                  {section22.content.dong_khoi_uprising.achievements.end_period}
                  ):
                </strong>
                <ul>
                  <li>
                    {section22.content.dong_khoi_uprising.achievements.impact}
                  </li>
                  <li>
                    <strong>Chuyển đổi chiến lược:</strong>{" "}
                    {
                      section22.content.dong_khoi_uprising.achievements
                        .strategic_shift
                    }
                  </li>
                </ul>
              </div>
            </div>

            <div className="image-side">
              <Image
                src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/SFfTTOy0Fe/vna_potal_90_nam_dcs_viet_nam_dong_khoi_ben_tre_17_-_1_-_1960__151893050_stand-665x395.jpg"
                alt="Đồng Khởi Bến Tre"
                preview={true}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p className="image-caption">
                Phong trào Đồng Khởi tại Bến Tre (1/1960)
              </p>
            </div>
          </div>
        </div>

        {/* Chiến tranh Đặc biệt */}
        <div className="special-war-content">
          <h4 className="content-subtitle">
            Chiến lược "Chiến tranh Đặc biệt" (1961-1965)
            <Button
              type="text"
              size="small"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Chiến tranh Đặc biệt",
                  <div>
                    <p>
                      <strong>Thời kỳ:</strong>{" "}
                      {section22.content.special_war_strategy.period}
                    </p>
                    <p>
                      <strong>Tổng thống Mỹ:</strong>{" "}
                      {
                        section22.content.special_war_strategy.us_strategy
                          .president
                      }
                    </p>
                    <p>
                      <strong>Phương thức:</strong>{" "}
                      {
                        section22.content.special_war_strategy.us_strategy
                          .method
                      }
                    </p>
                    <p>
                      <strong>Mục tiêu:</strong>{" "}
                      {section22.content.special_war_strategy.us_strategy.goal}
                    </p>
                  </div>
                )
              }
            />
          </h4>

          <div className="war-response-grid">
            <div className="response-card us-strategy">
              <h5>Chiến lược của Mỹ</h5>
              <p>
                <strong>Tên:</strong>{" "}
                {section22.content.special_war_strategy.us_strategy.name}
              </p>
              <p>
                <strong>Phương thức:</strong>{" "}
                {section22.content.special_war_strategy.us_strategy.method}
              </p>
              <p>
                <strong>Mục tiêu:</strong>{" "}
                {section22.content.special_war_strategy.us_strategy.goal}
              </p>
            </div>

            <div className="response-card party-response">
              <h5>Đáp trả của Đảng</h5>
              <p>
                <strong>Chiến lược:</strong>{" "}
                {section22.content.special_war_strategy.party_response.strategy}
              </p>
              <p>
                <strong>Chuyển đổi:</strong>{" "}
                {
                  section22.content.special_war_strategy.party_response
                    .transition
                }
              </p>
              <p>
                <strong>Chiến thuật:</strong>{" "}
                {section22.content.special_war_strategy.party_response.tactics}
              </p>
            </div>
          </div>

          {/* Chiến thắng quyết định */}
          <div className="victories-section">
            <h5 className="victories-title">Chiến thắng Quyết định</h5>
            <div className="victories-grid">
              {section22.content.special_war_strategy.decisive_victories.map(
                (victory, idx) => (
                  <div key={idx} className="victory-card">
                    <div className="victory-name">{victory.name}</div>
                    <div className="victory-date">{victory.date || ""}</div>
                    <p className="victory-significance">
                      {victory.significance || victory.result}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="final-outcome">
              <strong>
                Kết quả cuối cùng (
                {section22.content.special_war_strategy.final_outcome.date}):
              </strong>
              <p>
                {section22.content.special_war_strategy.final_outcome.result}
              </p>
              <p>
                <em>
                  {
                    section22.content.special_war_strategy.final_outcome
                      .consequence
                  }
                </em>
              </p>
            </div>
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
        <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </div>
      </Modal>
    </div>
  );
}
