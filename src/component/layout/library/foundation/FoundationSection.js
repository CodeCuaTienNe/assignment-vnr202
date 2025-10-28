"use client";

import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./FoundationSection.css";

export default function FoundationSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter1 = contentData.chapters.find((ch) => ch.chapter_number === 1);
  const section11 = chapter1?.sections[0];
  const section12 = chapter1?.sections[1];

  return (
    <div className="foundation-section">
      {/* Section 1.1: Bối cảnh Quốc tế và Trong nước */}
      <div className="section-block">
        <div className="subsection-header">
          <div className="subsection-number">1.1</div>
          <h3 className="subsection-title">{section11?.title}</h3>
        </div>

        {/* Bối cảnh Quốc tế */}
        <div className="context-section international">
          <h4 className="context-title">
            <span className="title-marker">✦</span>
            Bối cảnh Quốc tế
            <Button
              type="text"
              size="small"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Bối cảnh Quốc tế - Chi tiết",
                  <div>
                    <h4>Thuận lợi:</h4>
                    <p>{section11?.content.international_context.favorable}</p>
                    <h4>Thách thức:</h4>
                    <ul>
                      {section11?.content.international_context.challenges.map(
                        (ch, i) => (
                          <li key={i}>{ch}</li>
                        )
                      )}
                    </ul>
                  </div>
                )
              }
            />
          </h4>

          <div className="split-content">
            <div className="text-content">
              <div className="favorable-block">
                <strong className="block-label favorable">Thuận lợi:</strong>
                <p className="context-text">
                  {section11?.content.international_context.favorable}
                </p>
              </div>

              <div className="challenges-block">
                <strong className="block-label challenges">Thách thức:</strong>
                <ul className="challenges-list">
                  {section11?.content.international_context.challenges.map(
                    (ch, i) => (
                      <li key={i} className="challenge-item">
                        {ch}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="image-content">
              <Image
                src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/N4sXSdLc8e/vna_potal_90_nam_dcs_viet_nam_chu_tich_ho_chi_minh_va_phai_doan_viet_nam_tai_hoi_nghi_giơnevơ_ve_dong_duong_7_-_1954__151896551_stand-665x459.jpg"
                alt="Hội nghị Giơnevơ 1954"
                preview={true}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p className="image-caption">
                Chủ tịch Hồ Chí Minh và phái đoàn Việt Nam tại Hội nghị Giơnevơ
                (7/1954)
              </p>
            </div>
          </div>
        </div>

        {/* Bối cảnh Trong nước */}
        <div className="context-section domestic">
          <h4 className="context-title">
            <span className="title-marker">✦</span>
            Bối cảnh Trong nước
          </h4>

          <div className="split-content reverse">
            <div className="image-content">
              <Image
                src="https://special.nhandan.vn/vi_tuyen_17_co_hien_luong/assets/gjnQroXSAz/ben-hai-1-2560x1440.jpg"
                alt="Vĩ tuyến 17 - Chia cắt đất nước"
                preview={true}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p className="image-caption">
                Vĩ tuyến 17 - Nỗi đau chia cắt đất nước
              </p>
            </div>

            <div className="text-content">
              <div className="region-info north">
                <h5 className="region-label">Miền Bắc</h5>
                <p className="region-text">
                  {section11?.content.domestic_context.north}
                </p>
              </div>

              <div className="region-info south">
                <h5 className="region-label">Miền Nam</h5>
                <p className="region-text">
                  <strong>Lãnh đạo:</strong>{" "}
                  {section11?.content.domestic_context.south.leadership}
                </p>
                <p className="region-text">
                  <strong>Vi phạm:</strong>{" "}
                  {section11?.content.domestic_context.south.violations}
                </p>
                <div className="terror-warning">
                  <strong>⚠ Khủng bố:</strong>{" "}
                  {section11?.content.domestic_context.south.terror_policy.name}
                  <Button
                    type="text"
                    size="small"
                    icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                    onClick={() =>
                      openModal(
                        "Luật 10/59 - Chính sách Khủng bố",
                        <div>
                          <p>
                            <strong>Mô tả:</strong>{" "}
                            {
                              section11?.content.domestic_context.south
                                .terror_policy.law_1059.description
                            }
                          </p>
                          <p>
                            <strong>Thời gian đỉnh điểm:</strong>{" "}
                            {
                              section11?.content.domestic_context.south
                                .terror_policy.law_1059.period
                            }
                          </p>
                          <p>
                            <strong>Nạn nhân:</strong>{" "}
                            {
                              section11?.content.domestic_context.south
                                .terror_policy.law_1059.victims
                            }
                          </p>
                          <Image
                            src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/Zp9YKWdFBf/vna_potal_90_nam_dcs_viet_nam_tham_du_hoi_nghi_thanh_lap_mat_tran_thong_nhat_giai_phong_mien_nam_viet_nam_12_-_1960__151892826_stand-665x398.jpg"
                            alt="Mặt trận Dân tộc Giải phóng miền Nam"
                            style={{
                              width: "100%",
                              marginTop: "1rem",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1.2: Đường lối Chiến lược Hai nhiệm vụ */}
      <div className="section-block">
        <div className="subsection-header">
          <div className="subsection-number">1.2</div>
          <h3 className="subsection-title">{section12?.title}</h3>
          <Button
            type="text"
            icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
            onClick={() =>
              openModal(
                "Đại hội III (9/1960)",
                <div>
                  <p>
                    <strong>Tên chính thức:</strong>{" "}
                    {section12?.content.congress_info.name}
                  </p>
                  <p>
                    <strong>Thời gian:</strong>{" "}
                    {section12?.content.congress_info.date}
                  </p>
                  <p>
                    <strong>Địa điểm:</strong>{" "}
                    {section12?.content.congress_info.location}
                  </p>
                  <p>
                    <strong>Ý nghĩa:</strong>{" "}
                    {section12?.content.congress_info.significance}
                  </p>
                  <Image
                    src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg"
                    alt="Đại hội III"
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )
            }
          />
        </div>

        {/* Dual Strategy Introduction */}
        <div className="strategy-intro">
          <p className="intro-text">
            {section12?.content.dual_strategy.description}
          </p>
          <p className="common-goal">
            <strong>Mục tiêu chung:</strong>{" "}
            {section12?.content.dual_strategy.common_goal}
          </p>
        </div>

        {/* Two Strategies Grid */}
        <div className="strategies-comparison">
          {section12?.content.dual_strategy.strategies.map((strategy, idx) => (
            <div
              key={idx}
              className={`strategy-block ${
                strategy.region === "Miền Bắc" ? "north" : "south"
              }`}
            >
              <h4 className="strategy-region">{strategy.region}</h4>
              <div className="strategy-type">{strategy.type}</div>
              <div className="strategy-details">
                <p>
                  <strong>Nhiệm vụ:</strong> {strategy.mission}
                </p>
                <p className="role-highlight">
                  <strong>Vai trò:</strong> {strategy.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="table-wrapper">
          <h4 className="table-title">
            {section12?.content.comparison_table.title}
          </h4>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Miền</th>
                <th>Nhiệm vụ Chiến lược</th>
                <th>Vai trò</th>
                <th>Hình thức Đấu tranh</th>
              </tr>
            </thead>
            <tbody>
              {section12?.content.comparison_table.data.map((row, i) => (
                <tr key={i}>
                  <td className="region-cell">{row.region}</td>
                  <td>{row.strategic_mission}</td>
                  <td className="role-cell">{row.role}</td>
                  <td>{row.struggle_form}</td>
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
        width={800}
      >
        <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </div>
      </Modal>
    </div>
  );
}
