"use client";

import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./SouthSection.css";

export default function SouthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 4);
  const section41 = chapter?.sections.find((s) => s.section_id === "4.1");
  const section42 = chapter?.sections.find((s) => s.section_id === "4.2");
  const section43 = chapter?.sections.find((s) => s.section_id === "4.3");
  const section44 = chapter?.sections.find((s) => s.section_id === "4.4");

  return (
    <div className="south-section">
      {/* Section 4.1: Đánh bại Chiến tranh Cục bộ */}
      <div className="section-block">
        <div className="subsection-header">
          <div className="subsection-number">4.1</div>
          <h3 className="subsection-title">{section41?.title}</h3>
          <Button
            type="text"
            icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
            onClick={() =>
              openModal(
                "Chi tiết Chiến tranh Cục bộ (1965-1968)",
                <div>
                  <h4>Mỹ đưa quân vào miền Nam</h4>
                  <p>
                    <strong>Thời điểm:</strong>{" "}
                    {section41?.content.us_escalation.date}
                  </p>
                  <p>
                    <strong>Hành động:</strong>{" "}
                    {section41?.content.us_escalation.action}
                  </p>

                  <h4>Đáp trả của Đảng</h4>
                  <p>
                    <strong>Nghị quyết:</strong>{" "}
                    {section41?.content.party_response.resolutions}
                  </p>
                  <p>
                    <strong>Tuyên bố:</strong>{" "}
                    {section41?.content.party_response.declaration}
                  </p>
                  <p>
                    <strong>Chiến lược:</strong>{" "}
                    {section41?.content.party_response.strategy}
                  </p>
                  <p>
                    <strong>Lập trường:</strong>{" "}
                    {section41?.content.party_response.stance}
                  </p>
                  <p>
                    <strong>Nhiệm vụ:</strong>{" "}
                    {section41?.content.party_response.mission}
                  </p>

                  <h4>Các trận đánh quan trọng</h4>
                  <ul>
                    {section41?.content.military_victories.map(
                      (battle, idx) => (
                        <li key={idx}>
                          <strong>{battle.name}</strong> ({battle.date})
                        </li>
                      )
                    )}
                  </ul>

                  <Image
                    src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg"
                    alt="Chiến tranh Cục bộ"
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

        <div className="section-summary">
          <div className="summary-image">
            <Image
              src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg"
              alt="Chiến tranh Cục bộ 1965-1968"
              preview={true}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p className="image-caption">
              Đảng lãnh đạo cả nước chiến đấu chống Mỹ (1965-1973)
            </p>
          </div>

          <div className="summary-content">
            <p className="key-point">
              <strong>Mỹ đưa quân chiến đấu trực tiếp:</strong> Từ{" "}
              {section41?.content.us_escalation.date},{" "}
              {section41?.content.us_escalation.action}
            </p>

            <p className="key-point">
              <strong>Đáp trả của Đảng:</strong>{" "}
              {section41?.content.party_response.declaration}
            </p>

            <p className="key-point">
              <strong>Kết quả chiến lược:</strong>{" "}
              {section41?.content.strategic_outcome}
            </p>

            <p className="key-point">
              <strong>
                Thắng lợi miền Bắc ({section41?.content.north_victory.date}):
              </strong>{" "}
              {section41?.content.north_victory.result}
            </p>
          </div>
        </div>
      </div>

      {/* Section 4.2: Tết Mậu Thân 1968 */}
      <div className="section-block">
        <div className="subsection-header">
          <div className="subsection-number">4.2</div>
          <h3 className="subsection-title">{section42?.title}</h3>
          <Button
            type="text"
            icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
            onClick={() =>
              openModal(
                "Chi tiết Tết Mậu Thân 1968",
                <div>
                  <h4>Quyết định chiến lược</h4>
                  <p>
                    <strong>Người quyết định:</strong>{" "}
                    {section42?.content.strategic_decision.decision_maker}
                  </p>
                  <p>
                    <strong>Mục tiêu:</strong>{" "}
                    {section42?.content.strategic_decision.objective}
                  </p>
                  <p>
                    <strong>Phương pháp:</strong>{" "}
                    {section42?.content.strategic_decision.method}
                  </p>

                  <h4>Thực hiện</h4>
                  <p>
                    <strong>Tên chiến dịch:</strong>{" "}
                    {section42?.content.execution.name}
                  </p>
                  <p>
                    <strong>Đặc điểm:</strong>{" "}
                    {section42?.content.execution.nature}
                  </p>
                  <p>
                    <strong>Mục tiêu:</strong>{" "}
                    {section42?.content.execution.target}
                  </p>

                  <h4>Lực lượng Biệt động Sài Gòn</h4>
                  <p>
                    <strong>Vai trò:</strong>{" "}
                    {section42?.content.special_forces.role}
                  </p>
                  <p>
                    <strong>Anh hùng tiêu biểu:</strong>{" "}
                    {section42?.content.special_forces.hero_example.name} -{" "}
                    {
                      section42?.content.special_forces.hero_example
                        .contribution
                    }
                  </p>
                  <p>
                    <strong>Mục tiêu chính:</strong>{" "}
                    {section42?.content.special_forces.key_targets.join(", ")}
                  </p>

                  <h4>Kết quả</h4>
                  <p>
                    <strong>Ý nghĩa chiến lược:</strong>{" "}
                    {section42?.content.outcomes.strategic_significance}
                  </p>
                  <p>
                    <strong>Thành tựu:</strong>{" "}
                    {section42?.content.outcomes.key_achievement}
                  </p>
                  <p>
                    <strong>Thắng lợi ngoại giao:</strong>{" "}
                    {section42?.content.outcomes.diplomatic_victory.result}
                  </p>

                  <h4>Bài học tự phê bình</h4>
                  <p>
                    <strong>Sai lầm:</strong>{" "}
                    {section42?.content.self_criticism.mistake}
                  </p>
                  <p>
                    <strong>Bài học:</strong>{" "}
                    {section42?.content.self_criticism.lesson}
                  </p>

                  <Image
                    src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/Zp9YKWdFBf/vna_potal_90_nam_dcs_viet_nam_tham_du_hoi_nghi_thanh_lap_mat_tran_thong_nhat_giai_phong_mien_nam_viet_nam_12_-_1960__151892826_stand-665x398.jpg"
                    alt="Tết Mậu Thân 1968"
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

        <div className="section-summary">
          <div className="summary-image">
            <Image
              src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/Zp9YKWdFBf/vna_potal_90_nam_dcs_viet_nam_tham_du_hoi_nghi_thanh_lap_mat_tran_thong_nhat_giai_phong_mien_nam_viet_nam_12_-_1960__151892826_stand-665x398.jpg"
              alt="Tết Mậu Thân 1968"
              preview={true}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p className="image-caption">
              Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968
            </p>
          </div>

          <div className="summary-content">
            <p className="key-point">
              <strong>Đặc điểm:</strong> {section42?.content.execution.nature}
            </p>

            <p className="key-point">
              <strong>Mục tiêu:</strong> {section42?.content.execution.target}
            </p>

            <p className="key-point">
              <strong>Ý nghĩa chiến lược:</strong>{" "}
              {section42?.content.outcomes.strategic_significance}
            </p>

            <p className="key-point">
              <strong>Thắng lợi ngoại giao:</strong> Mỹ buộc phải ngồi vào bàn
              đàm phán tại Paris (5/1968)
            </p>

            <p className="key-point lesson">
              <strong>Bài học:</strong>{" "}
              {section42?.content.self_criticism.lesson}
            </p>
          </div>
        </div>
      </div>

      {/* Section 4.3: Đánh bại Việt Nam hóa Chiến tranh */}
      <div className="section-block">
        <div className="subsection-header">
          <div className="subsection-number">4.3</div>
          <h3 className="subsection-title">{section43?.title}</h3>
          <Button
            type="text"
            icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
            onClick={() =>
              openModal(
                "Chi tiết Việt Nam hóa & Điện Biên Phủ trên không",
                <div>
                  <h4>Chiến lược "Việt Nam hóa Chiến tranh"</h4>
                  <p>
                    <strong>Thời kỳ:</strong>{" "}
                    {section43?.content.vietnamization_strategy.period}
                  </p>
                  <p>
                    <strong>Tổng thống Mỹ:</strong>{" "}
                    {section43?.content.vietnamization_strategy.president}
                  </p>
                  <p>
                    <strong>Khái niệm:</strong>{" "}
                    {section43?.content.vietnamization_strategy.concept}
                  </p>

                  <h4>Các chiến thắng quan trọng</h4>
                  <ul>
                    {section43?.content.combined_victories.map(
                      (victory, idx) => (
                        <li key={idx}>
                          <strong>{victory.name}</strong> ({victory.location},{" "}
                          {victory.date}): {victory.significance}
                        </li>
                      )
                    )}
                  </ul>

                  <h4>Chiến thắng Điện Biên Phủ trên không</h4>
                  <p>
                    <strong>Thời gian:</strong>{" "}
                    {section43?.content.dien_bien_phu_in_air.date}
                  </p>
                  <p>
                    <strong>Bối cảnh:</strong>{" "}
                    {section43?.content.dien_bien_phu_in_air.context.us_action}
                  </p>
                  <p>
                    <strong>Chiến dịch đỉnh cao:</strong>{" "}
                    {
                      section43?.content.dien_bien_phu_in_air.context
                        .peak_operation
                    }{" "}
                    trong{" "}
                    {section43?.content.dien_bien_phu_in_air.context.duration}
                  </p>
                  <p>
                    <strong>Kết quả:</strong> Bắn rơi{" "}
                    {
                      section43?.content.dien_bien_phu_in_air.results
                        .planes_shot
                    }{" "}
                    máy bay, trong đó có{" "}
                    {
                      section43?.content.dien_bien_phu_in_air.results
                        .b52_destroyed
                    }{" "}
                    B-52, bắt sống{" "}
                    {
                      section43?.content.dien_bien_phu_in_air.results
                        .pilots_captured
                    }{" "}
                    giặc lái
                  </p>

                  <h4>Hiệp định Paris</h4>
                  <p>
                    <strong>Ngày ký:</strong>{" "}
                    {section43?.content.paris_accord.date}
                  </p>
                  <p>
                    <strong>Cam kết của Mỹ:</strong>
                  </p>
                  <ul>
                    {section43?.content.paris_accord.us_commitments.map(
                      (item, idx) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>

                  <Image
                    src="https://special.nhandan.vn/vi_tuyen_17_co_hien_luong/assets/gjnQroXSAz/ben-hai-1-2560x1440.jpg"
                    alt="Điện Biên Phủ trên không"
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

        <div className="section-summary">
          <div className="summary-image">
            <Image
              src="https://special.nhandan.vn/vi_tuyen_17_co_hien_luong/assets/gjnQroXSAz/ben-hai-1-2560x1440.jpg"
              alt="Điện Biên Phủ trên không"
              preview={true}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p className="image-caption">
              Chiến thắng Điện Biên Phủ trên không (12/1972)
            </p>
          </div>

          <div className="summary-content">
            <p className="key-point">
              <strong>
                Chiến lược Mỹ (
                {section43?.content.vietnamization_strategy.period}):
              </strong>{" "}
              {section43?.content.vietnamization_strategy.concept}
            </p>

            <p className="key-point">
              <strong>Chiến thắng Điện Biên Phủ trên không:</strong> 12 ngày đêm
              (18-30/12/1972), bắn rơi{" "}
              {section43?.content.dien_bien_phu_in_air.results.b52_destroyed}{" "}
              B-52
            </p>

            <p className="key-point">
              <strong>Hiệp định Paris (27/1/1973):</strong> Mỹ cam kết rút hết
              quân, tôn trọng độc lập và chủ quyền Việt Nam
            </p>

            <p className="key-point">
              <strong>Ý nghĩa:</strong>{" "}
              {section43?.content.paris_accord.significance}
            </p>
          </div>
        </div>
      </div>

      {/* Section 4.4: Mùa Xuân 1975 */}
      <div className="section-block">
        <div className="subsection-header">
          <div className="subsection-number">4.4</div>
          <h3 className="subsection-title">{section44?.title}</h3>
          <Button
            type="text"
            icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
            onClick={() =>
              openModal(
                "Chi tiết Mùa Xuân 1975",
                <div>
                  <h4>Đường lối chiến lược sau Paris</h4>
                  <p>
                    <strong>Hội nghị:</strong>{" "}
                    {section44?.content.strategic_policy.meeting} (
                    {section44?.content.strategic_policy.date})
                  </p>
                  <p>
                    <strong>Khẳng định:</strong>{" "}
                    {section44?.content.strategic_policy.affirmation}
                  </p>

                  <h4>Chiến thắng Phước Long</h4>
                  <p>
                    <strong>Thời gian:</strong>{" "}
                    {section44?.content.strategic_probing.date}
                  </p>
                  <p>
                    <strong>Ý nghĩa:</strong>{" "}
                    {section44?.content.strategic_probing.status}
                  </p>
                  <p>
                    <strong>Các ý nghĩa chiến lược:</strong>
                  </p>
                  <ul>
                    {section44?.content.strategic_probing.significance.map(
                      (item, idx) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>

                  <h4>Quyết tâm chiến lược</h4>
                  <p>
                    <strong>Kế hoạch:</strong>{" "}
                    {section44?.content.strategic_determination.plan}
                  </p>
                  <p>
                    <strong>Linh hoạt:</strong>{" "}
                    {section44?.content.strategic_determination.flexibility}
                  </p>

                  <h4>Tổng tiến công Mùa Xuân 1975</h4>
                  <p>
                    <strong>Thời gian:</strong>{" "}
                    {section44?.content.spring_offensive_1975.duration}
                  </p>
                  <p>
                    <strong>Khẩu hiệu:</strong> "
                    {section44?.content.spring_offensive_1975.motto}"
                  </p>

                  <h4>Chiến dịch Hồ Chí Minh</h4>
                  <p>
                    <strong>Thời gian:</strong>{" "}
                    {section44?.content.ho_chi_minh_campaign.period}
                  </p>
                  <p>
                    <strong>Khoảnh khắc lịch sử:</strong>{" "}
                    {section44?.content.ho_chi_minh_campaign.final_moment.event}{" "}
                    -{" "}
                    {section44?.content.ho_chi_minh_campaign.final_moment.time}
                  </p>

                  <Image
                    src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/gjnQroXSAz/ben-hai-1-2560x1440.jpg"
                    alt="Chiến thắng 30/4/1975"
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

        <div className="section-summary">
          <div className="summary-image">
            <Image
              src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/gjnQroXSAz/ben-hai-1-2560x1440.jpg"
              alt="Chiến thắng 30/4/1975"
              preview={true}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p className="image-caption">
              30/4/1975 - Ngày giải phóng hoàn toàn miền Nam
            </p>
          </div>

          <div className="summary-content">
            <p className="key-point">
              <strong>Chiến thắng Phước Long (6/1/1975):</strong> Đòn thăm dò
              chiến lược, xác nhận thời cơ đã chín muồi
            </p>

            <p className="key-point">
              <strong>Cuộc Tổng tiến công Mùa Xuân 1975:</strong>{" "}
              {section44?.content.spring_offensive_1975.duration}
            </p>

            <p className="key-point motto">
              <strong>Khẩu hiệu:</strong> "
              {section44?.content.spring_offensive_1975.motto}"
            </p>

            <p className="key-point">
              <strong>Chiến dịch Hồ Chí Minh:</strong>{" "}
              {section44?.content.ho_chi_minh_campaign.period}
            </p>

            <p className="key-point victory">
              <strong>Khoảnh khắc lịch sử:</strong> Cờ cách mạng cắm trên Dinh
              Độc Lập lúc{" "}
              {section44?.content.ho_chi_minh_campaign.final_moment.time}
            </p>

            <p className="key-point">
              <strong>Ý nghĩa:</strong>{" "}
              {section44?.content.ho_chi_minh_campaign.significance}
            </p>
          </div>
        </div>
      </div>

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={900}
      >
        <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </div>
      </Modal>
    </div>
  );
}
