"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
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
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">2.1</div>
            <h3 className="subsection-title">{section21.title}</h3>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Nghị quyết 15 của Ban Chấp hành Trung ương Đảng Lao động Việt Nam (1959)",
                  <div>
                    <p>
                      Nghị quyết 15 được thông qua tại Hội nghị lần thứ 15 của
                      Ban Chấp hành Trung ương Đảng Lao động Việt Nam vào tháng
                      1 năm 1959. Đây là nghị quyết quan trọng đánh dấu bước
                      chuyển sang thời kỳ mới của cách mạng Việt Nam sau khi đất
                      nước bị chia cắt bởi Hiệp định Geneve 1954.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                      <div style={{ flex: 1, textAlign: "center" }}>
                        <Image
                          src="https://i.ytimg.com/vi/2wEkunqevzY/maxresdefault.jpg"
                          alt="Nghị quyết 15"
                          preview={true}
                          style={{
                            width: "100%",
                            borderRadius: "2px",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "0.8rem",
                            marginTop: "0.5rem",
                          }}
                        >
                          Nghị quyết 15 của Ban Chấp hành Trung ương
                        </p>
                      </div>
                      <div style={{ flex: 1, textAlign: "center" }}>
                        <Image
                          src="https://file3.qdnd.vn/data/images/0/2024/10/18/upload_2318/hoi%20nghi%2015.jpg?dpi=150&quality=100&w=870"
                          alt="Hội nghị Trung ương lần thứ 15"
                          preview={true}
                          style={{
                            width: "75%",
                            borderRadius: "2px",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "0.8rem",
                            marginTop: "0.5rem",
                          }}
                        >
                          Hội nghị Trung ương lần thứ 15 do Hồ Chủ tịch chủ tọa
                          họp tại Thủ đô Hà Nội vào tháng 1-1959
                        </p>
                      </div>
                    </div>
                    <p>
                      <strong>Bối cảnh lịch sử:</strong> Sau khi chiến thắng
                      Điện Biên Phủ và ký kết Hiệp định Geneve, miền Bắc bước
                      vào thời kỳ hòa bình để xây dựng chủ nghĩa xã hội, trong
                      khi miền Nam vẫn đang bị đế quốc Mỹ và chính quyền tay sai
                      thống trị. Đảng Lao động Việt Nam cần có đường lối chiến
                      lược mới để vừa đẩy mạnh công cuộc xây dựng xã hội chủ
                      nghĩa ở miền Bắc, vừa chuẩn bị lực lượng và đấu tranh giải
                      phóng miền Nam, thống nhất đất nước.
                    </p>
                    <p>
                      <strong>Nội dung chính:</strong> Nghị quyết xác định nhiệm
                      vụ cơ bản của cách mạng là tiến hành cách mạng xã hội chủ
                      nghĩa ở miền Bắc và đấu tranh thống nhất nước nhà. Nghị
                      quyết nhấn mạnh con đường phát triển là kết hợp sức mạnh
                      dân tộc với sức mạnh thời đại, sử dụng phương thức hòa
                      bình khi có thể, đấu tranh vũ trang khi cần thiết.
                    </p>
                    <p>
                      <strong>Ý nghĩa:</strong> Nghị quyết 15 đã định hướng rõ
                      ràng cho toàn Đảng và dân tộc trong giai đoạn mới, góp
                      phần quan trọng vào thắng lợi của cách mạng Việt Nam,
                      khẳng định bản lĩnh chính trị vững vàng và tầm nhìn chiến
                      lược xa rộng của Đảng.
                    </p>
                  </div>
                )
              }
            />
          </div>

          <div className="resolution-content">
            <div
              className="context-warning"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.03)",
                padding: "1rem",
                borderRadius: "4px",
              }}
            >
              <strong>⚠ Tình hình:</strong> {section21.content.context}
              <Button
                type="text"
                size="small"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Chính sách đàn áp và khủng bố của Mỹ-Diệm ở miền Nam",
                    <div>
                      <p>
                        Sau khi thất bại tại Điện Biên Phủ và ký kết Hiệp định
                        Geneve (1954), đế quốc Mỹ thay chân Pháp can thiệp sâu
                        vào miền Nam Việt Nam. Mỹ dựng lên chính quyền Ngô Đình
                        Diệm như một chính phủ bù nhìn, thực hiện chính sách
                        "thuộc địa kiểu mới" nhằm duy trì sự thống trị gián tiếp
                        thông qua viện trợ kinh tế, quân sự và kiểm soát chính
                        trị.
                      </p>
                      <p>
                        <strong>Chính sách đàn áp tôn giáo:</strong> Chính quyền
                        Mỹ-Diệm, dưới ảnh hưởng của Công giáo, thực hiện chính
                        sách phân biệt đối xử với Phật giáo và các tôn giáo
                        khác. Các tu sĩ Phật giáo bị bắt bớ, chùa chiền bị phá
                        hủy, dẫn đến cuộc đấu tranh của Phật giáo chống lại sự
                        đàn áp tôn giáo.
                      </p>
                      <p>
                        <strong>Ấp chiến lược:</strong> Mỹ-Diệm triển khai
                        chương trình "ấp chiến lược" từ năm 1962, xây dựng các
                        làng chiến lược bao quanh bằng hàng rào kẽm gai, hào sâu
                        để cô lập lực lượng cách mạng, ngăn chặn sự hỗ trợ từ
                        nhân dân. Đây là hình thức "cải tạo" xã hội nhằm tách
                        rời cách mạng khỏi quần chúng.
                      </p>
                      <p>
                        <strong>Luật 10/59 và khủng bố:</strong> Ban hành Luật
                        10/59 vào ngày 6/1/1956, thiết lập Tòa án quân sự đặc
                        biệt để đàn áp phong trào cách mạng. Luật này cho phép
                        xét xử nhanh chóng mà không cần bằng chứng, dẫn đến hàng
                        loạt vụ bắt bớ, tra tấn và hành quyết dã man. Hàng trăm
                        nghìn người đã trở thành nạn nhân.
                      </p>
                      <p>
                        <strong>Sự kiện Thích Quảng Đức tự thiêu:</strong> Vào
                        ngày 11/6/1963, hòa thượng Thích Quảng Đức tự thiêu tại
                        ngã tư Phan Đình Phùng - Lê Văn Duyệt, Sài Gòn để phản
                        đối chính sách đàn áp Phật giáo của chính quyền Ngô Đình
                        Diệm. Sự kiện này gây chấn động thế giới, góp phần làm
                        sụp đổ chế độ Diệm.
                      </p>
                      <p>
                        Những chính sách đàn áp này đã leo thang xung đột, củng
                        cố sự thống trị của Mỹ ở miền Nam và đặt ra thách thức
                        lớn lao cho cách mạng miền Nam trong giai đoạn
                        1954-1963.
                      </p>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "1rem",
                          marginTop: "1rem",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Law_10-59_ROV.pdf/page1-927px-Law_10-59_ROV.pdf.jpg"
                            alt="Luật 10/59"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.8rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            Luật 10/59
                          </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IQ-n0egU9-6bXeoYhZlgXF1Rb3iIk4kYBg&s"
                            alt="Máy chém Ngô Đình Diệm"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.8rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            Máy chém Ngô Đình Diệm
                          </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Image
                            src="https://live.staticflickr.com/3847/14455934624_b9338abd6c.jpg"
                            alt="Nhân dân miền Nam phản đối luật 10/59"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.8rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            Nhân dân phản đối
                          </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Image
                            src="https://mocban.vn/wp-content/uploads/2023/06/quang-duc-sat-still-as-he-was-engulfed-in-flame-.jpg"
                            alt="Thích Quảng Đức tự thiêu"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.8rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            Thích Quảng Đức tự thiêu (1963)
                          </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaXf15LZ6defGd-VAQ4XKAnr8zlHyZ7BEkg&s"
                            alt="Ấp chiến lược"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.8rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            Ấp chiến lược
                          </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Image
                            src="https://icdn.dantri.com.vn/HvrZZiM2C5QLR4u67tfR/Image/2013/06/1852-01c7d.jpg"
                            alt="Đàn áp Phật giáo"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.8rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            Đàn áp Phật giáo
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }
              />
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
        </ScrollReveal>
      </div>

      {/* Section 2.2: Đồng Khởi và Chiến tranh Đặc biệt */}
      <div className="dongkhoi-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">2.2</div>
            <h3 className="subsection-title">{section22.title}</h3>
          </div>
        </ScrollReveal>

        {/* Phong trào Đồng Khởi */}
        <ScrollReveal variant="slideLeft" delay={0.15} duration={0.7}>
          <div className="dongkhoi-content">
            <h4 className="content-subtitle">
              Phong trào Đồng Khởi (1960)
              <Button
                type="text"
                size="small"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Phong trào Đồng Khởi (1960)",
                    <div>
                      <div style={{ marginBottom: "1rem" }}>
                        <p>
                          <strong>Phong trào Đồng Khởi</strong> là một cuộc nổi
                          dậy vũ trang của nhân dân miền Nam Việt Nam chống lại
                          chế độ Ngô Đình Diệm, bắt đầu từ ngày 17/01/1960 tại
                          Bến Tre.
                        </p>
                      </div>
                      <div style={{ marginBottom: "1rem" }}>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1rem",
                            marginTop: "0.5rem",
                          }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <Image
                              src="https://vnanet.vn/Data/Articles/2020/01/16/4384796/vna_potal_ky_niem_60_nam_phong_trao_dong_khoi_1711960_-_1712020_huyen_thoai_%E2%80%9Cdoi_quan_toc_dai_ben_tre%E2%80%9D_102406468_stand.jpg"
                              alt="Đồng Khởi Bến Tre"
                              preview={true}
                              style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "2px",
                              }}
                            />
                            <p
                              style={{
                                fontSize: "0.8rem",
                                marginTop: "0.5rem",
                                color: "#666",
                              }}
                            >
                              Đồng Khởi tại Bến Tre (1960)
                            </p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <Image
                              src="https://vnanet.vn/Data/Articles/2025/01/17/7811551/vna_potal_65_nam_phong_trao_ben_tre_dong_khoi_1711960-1712025_phong_trao_dau_tranh_chinh_tri_lau_dai_quyet_liet_cua_quan_chung_nhan_dan_stand.jpg"
                              alt="Phong trào Đồng Khởi"
                              preview={true}
                              style={{
                                width: "90%",
                                maxWidth: "300px",
                                borderRadius: "2px",
                              }}
                            />
                            <p
                              style={{
                                fontSize: "0.8rem",
                                marginTop: "0.5rem",
                                color: "#666",
                              }}
                            >
                              Nhân dân tham gia Đồng Khởi
                            </p>
                          </div>
                        </div>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <h5
                          style={{ color: "#1890ff", marginBottom: "0.5rem" }}
                        >
                          Bối cảnh lịch sử:
                        </h5>
                        <ul>
                          <li>
                            Sau khi miền Nam bị chia cắt (1954), chế độ Ngô Đình
                            Diệm đàn áp ngày càng khốc liệt
                          </li>
                          <li>
                            Chính sách "Dĩ đảng trị nước" và "Ngô gia trị" gây
                            bất mãn sâu sắc trong nhân dân
                          </li>
                          <li>
                            Đảng Lao động Việt Nam quyết định chuyển từ đấu
                            tranh hòa bình sang đấu tranh vũ trang
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <h5
                          style={{ color: "#1890ff", marginBottom: "0.5rem" }}
                        >
                          Diễn biến chính:
                        </h5>
                        <ul>
                          <li>
                            <strong>Khởi đầu:</strong> Ngày 17/01/1960 tại xã
                            Định Thủy, huyện Mỏ Cày, tỉnh Bến Tre
                          </li>
                          <li>
                            <strong>Lan tỏa:</strong> Từ Bến Tre nhanh chóng lan
                            sang các tỉnh miền Tây Nam Bộ
                          </li>
                          <li>
                            <strong>Quy mô:</strong> Hơn 1 triệu người tham gia,
                            tiêu diệt hàng ngàn tên địch
                          </li>
                          <li>
                            <strong>Thời gian:</strong> Từ tháng 1 đến tháng 8
                            năm 1960
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <h5
                          style={{ color: "#1890ff", marginBottom: "0.5rem" }}
                        >
                          Ý nghĩa lịch sử:
                        </h5>
                        <ul>
                          <li>
                            Đánh dấu sự chuyển biến từ đấu tranh chính trị sang
                            đấu tranh vũ trang ở miền Nam
                          </li>
                          <li>
                            Thúc đẩy quá trình thành lập Mặt trận Dân tộc Giải
                            phóng miền Nam Việt Nam (19/12/1960)
                          </li>
                          <li>
                            Làm thất bại chiến lược "Chiến tranh đặc biệt" của
                            Mỹ - Diệm
                          </li>
                          <li>
                            Khẳng định sức mạnh của nhân dân và sự lãnh đạo đúng
                            đắn của Đảng
                          </li>
                        </ul>
                      </div>

                      <div
                        style={{
                          marginTop: "1rem",
                          padding: "1rem",
                          backgroundColor: "#f0f8ff",
                          borderRadius: "3px",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontStyle: "italic",
                            color: "#1890ff",
                          }}
                        >
                          <strong>Di sản:</strong> Phong trào Đồng Khởi là biểu
                          tượng của tinh thần yêu nước, ý chí quật cường và sức
                          mạnh của khối đại đoàn kết dân tộc trong cuộc đấu
                          tranh chống Mỹ cứu nước.
                        </p>
                      </div>
                    </div>
                  )
                }
              />
            </h4>

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
                <div className="leadership-shift">
                  <strong>Sự lãnh đạo chuyển hướng:</strong>
                  <p>
                    Dưới sự lãnh đạo của Đảng Lao động Việt Nam, chuyển từ đấu
                    tranh hòa bình sang đấu tranh vũ trang sau khi Mỹ-Diệm đàn
                    áp khốc liệt, tạo nền tảng cho khởi nghĩa.
                  </p>
                </div>
                <div className="achievement-box">
                  <strong>
                    Thành tựu (
                    {
                      section22.content.dong_khoi_uprising.achievements
                        .end_period
                    }
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
                    <li>
                      <strong>Khởi nghĩa vũ trang:</strong> Hơn 1 triệu người
                      tham gia, tiêu diệt hàng ngàn tên địch, thành lập Mặt trận
                      Dân tộc Giải phóng miền Nam.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="image-side">
                <Image
                  src="https://vnanet.vn/Data/Articles/2020/01/16/4384796/vna_potal_ky_niem_60_nam_phong_trao_dong_khoi_1711960_-_1712020_huyen_thoai_%E2%80%9Cdoi_quan_toc_dai_ben_tre%E2%80%9D_102406468_stand.jpg"
                  alt="Đồng Khởi Bến Tre"
                  preview={true}
                  style={{ width: "100%", borderRadius: "4px" }}
                />
                <p className="image-caption">
                  Thiếu tướng Nguyễn Thị Định chỉ đạo LLVT đánh địch trong phong
                  trào Đồng Khởi tại Bến Tre (1/1960)
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Chiến tranh Đặc biệt */}
        <ScrollReveal variant="slideRight" delay={0.15} duration={0.7}>
          <div className="special-war-content">
            <h4 className="content-subtitle">
              Chiến lược "Chiến tranh Đặc biệt" (1961-1965)
              <Button
                type="text"
                size="small"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Chiến lược 'Chiến tranh Đặc biệt' (1961-1965)",
                    <div>
                      <div style={{ marginBottom: "1rem" }}>
                        <p>
                          <strong>Chiến lược "Chiến tranh Đặc biệt"</strong> là
                          chiến lược quân sự của Mỹ nhằm đàn áp phong trào cách
                          mạng ở miền Nam Việt Nam, được triển khai từ năm 1961
                          đến 1965 dưới thời Tổng thống John F. Kennedy và
                          Lyndon B. Johnson.
                        </p>
                      </div>
                      <div style={{ marginBottom: "1rem" }}>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1rem",
                            marginTop: "0.5rem",
                          }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <Image
                              src="https://nghiavuquansu.vn/wp-content/uploads/2024/12/tom-tat-chien-luoc-chien-tranh-dac-biet.jpg"
                              alt="Chiến tranh Đặc biệt"
                              preview={true}
                              style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "2px",
                              }}
                            />
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <Image
                              src="https://file.qdnd.vn/data/images/5/2020/12/23/phucthang/11.jpg?dpi=150&quality=100&w=575"
                              alt="Chien tranh Đặc biệt - Nhân dân tham gia"
                              preview={true}
                              style={{
                                width: "100%",
                                maxWidth: "300px",
                                borderRadius: "2px",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <h5
                          style={{ color: "#1890ff", marginBottom: "0.5rem" }}
                        >
                          Bối cảnh lịch sử:
                        </h5>
                        <ul>
                          <li>
                            Sau thất bại của phong trào Đồng Khởi (1960), Mỹ
                            nhận ra cần leo thang can thiệp trực tiếp hơn ở miền
                            Nam Việt Nam.
                          </li>
                          <li>
                            Sự kiện Vịnh Con Lợn (1961) làm Mỹ thất bại ở Cuba,
                            thúc đẩy chuyển hướng chiến lược sang Việt Nam.
                          </li>
                          <li>
                            Chính quyền Kennedy coi Việt Nam là "trận tuyến đầu"
                            trong cuộc Chiến tranh Lạnh chống chủ nghĩa xã hội.
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <h5
                          style={{ color: "#1890ff", marginBottom: "0.5rem" }}
                        >
                          Thuật ngữ và nội dung chiến lược:
                        </h5>
                        <ul>
                          <li>
                            <strong>Chiến tranh Đặc biệt:</strong> Là dạng chiến
                            tranh hạn chế, sử dụng lực lượng đặc biệt, cố vấn
                            quân sự, không kích và chiến tranh tâm lý, tránh
                            xung đột trực tiếp với quân đội lớn.
                          </li>
                          <li>
                            <strong>Lực lượng đặc biệt:</strong> Đội Green
                            Berets của Mỹ, huấn luyện và chỉ huy quân đội Sài
                            Gòn.
                          </li>
                          <li>
                            <strong>Chiến tranh tâm lý:</strong> Tuyên truyền,
                            đốt phá làng mạc, di dân cưỡng bức để cô lập cách
                            mạng.
                          </li>
                          <li>
                            <strong>Mục tiêu:</strong> Tiêu diệt lực lượng cách
                            mạng, ổn định chế độ Ngô Đình Diệm, ngăn chặn ảnh
                            hưởng của chủ nghĩa xã hội.
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <h5
                          style={{ color: "#1890ff", marginBottom: "0.5rem" }}
                        >
                          Đáp trả của Đảng và nhân dân Việt Nam:
                        </h5>
                        <ul>
                          <li>
                            Đảng Lao động Việt Nam chỉ đạo chuyển sang chiến
                            tranh nhân dân, kết hợp đấu tranh chính trị và vũ
                            trang.
                          </li>
                          <li>
                            Thành lập Mặt trận Dân tộc Giải phóng miền Nam
                            (1960), mở rộng mặt trận thống nhất.
                          </li>
                          <li>
                            Phát triển lực lượng vũ trang nhân dân, xây dựng căn
                            cứ địa và du kích chiến.
                          </li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: "1rem" }}>
                        <h5
                          style={{ color: "#1890ff", marginBottom: "0.5rem" }}
                        >
                          Ý nghĩa lịch sử:
                        </h5>
                        <ul>
                          <li>
                            Đánh dấu sự leo thang trực tiếp của Mỹ vào chiến
                            tranh Việt Nam, chuyển từ viện trợ sang can thiệp
                            quân sự.
                          </li>
                          <li>
                            Thất bại của chiến lược này dẫn đến chiến tranh toàn
                            diện, với sự tham gia của hàng trăm nghìn lính Mỹ.
                          </li>
                          <li>
                            Khẳng định sức mạnh của chiến tranh nhân dân và ý
                            chí kiên cường của nhân dân Việt Nam.
                          </li>
                          <li>
                            Góp phần làm thất bại chiến lược toàn cầu của Mỹ
                            trong Chiến tranh Lạnh.
                          </li>
                        </ul>
                      </div>
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
                <h5>Phản ứng của Đảng</h5>
                <p>
                  <strong>Chiến lược:</strong>{" "}
                  {
                    section22.content.special_war_strategy.party_response
                      .strategy
                  }
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
                  {
                    section22.content.special_war_strategy.party_response
                      .tactics
                  }
                </p>
              </div>
            </div>

            {/* Chiến thắng quyết định */}
            <div className="victories-section">
              <h5 className="victories-title">Chiến thắng Quyết định</h5>
              <div className="victories-intro">
                <p>
                  Các chiến thắng quyết định trong giai đoạn 1961-1965 là minh
                  chứng sống động cho sự thất bại hoàn toàn của chiến lược
                  "Chiến tranh Đặc biệt" của Mỹ. Những thắng lợi này không chỉ
                  bẻ gãy các chiến thuật quân sự hiện đại mà còn khẳng định sức
                  mạnh của chiến tranh nhân dân, góp phần thúc đẩy Mỹ phải leo
                  thang chiến tranh toàn diện (Chiến tranh cục bộ).
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Image
                      src="https://nghiavuquansu.vn/wp-content/uploads/2024/12/tom-tat-chien-luoc-chien-tranh-dac-biet.jpg"
                      alt="Chiến tranh Đặc biệt"
                      preview={true}
                      style={{ width: "86%", borderRadius: "2px" }}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Image
                      src="https://file.qdnd.vn/data/images/5/2020/12/23/phucthang/11.jpg?dpi=150&quality=100&w=575"
                      alt="Nhân dân tham gia Chiến tranh Đặc biệt"
                      preview={true}
                      style={{ width: "100%", borderRadius: "2px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-4"></div>
              <div className="victories-grid">
                {section22.content.special_war_strategy.decisive_victories.map(
                  (victory, idx) => (
                    <div key={idx} className="victory-card">
                      <div className="victory-name">{victory.name}</div>
                      <div className="victory-date">{victory.date || ""}</div>
                      <div className="victory-significance">
                        {victory.name === "Chiến thắng Ấp Bắc" ? (
                          <>
                            <ul
                              style={{
                                paddingLeft: "1.2rem",
                                margin: "0.5rem 0",
                              }}
                            >
                              <li>
                                Bẻ gãy chiến thuật{" "}
                                <strong>"trực thăng vận"</strong> và{" "}
                                <strong>"thiết xa vận"</strong> của Mỹ
                              </li>
                              <li>
                                Hàng trăm tên địch bị tiêu diệt, nhiều phương
                                tiện bị phá hủy
                              </li>
                              <li>
                                Khẳng định sức mạnh chiến tranh nhân dân chống
                                chiến tranh công nghệ cao
                              </li>
                              <li>
                                Làm lung lay niềm tin của Mỹ vào chiến lược
                                "Chiến tranh Đặc biệt"
                              </li>
                            </ul>
                            <Button
                              type="text"
                              size="small"
                              icon={
                                <InfoCircleOutlined
                                  style={{ color: "#1890ff" }}
                                />
                              }
                              onClick={() =>
                                openModal(
                                  "Chi tiết Chiến thắng Ấp Bắc",
                                  <div>
                                    <div style={{ marginBottom: "1rem" }}>
                                      <h5
                                        style={{
                                          color: "#1890ff",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        Hoàn cảnh:
                                      </h5>
                                      <p>
                                        Chiến thắng Ấp Bắc (1/1963) diễn ra
                                        trong giai đoạn đầu của chiến lược
                                        "Chiến tranh Đặc biệt". Quân đội Sài
                                        Gòn, được Mỹ trang bị hiện đại, sử dụng
                                        trực thăng đổ bộ và xe thiết giáp tấn
                                        công nhưng bị phục kích bởi lực lượng du
                                        kích địa phương.
                                      </p>
                                    </div>

                                    <div style={{ marginBottom: "1rem" }}>
                                      <h5
                                        style={{
                                          color: "#1890ff",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        Ý nghĩa:
                                      </h5>
                                      <ul>
                                        <li>
                                          Đánh dấu bước ngoặt trong chiến lược
                                          "Chiến tranh Đặc biệt"
                                        </li>
                                        <li>
                                          Chứng minh chiến tranh nhân dân có thể
                                          đánh bại chiến tranh công nghệ cao
                                        </li>
                                        <li>
                                          Thúc đẩy quá trình leo thang chiến
                                          tranh của Mỹ
                                        </li>
                                        <li>
                                          Nâng cao tinh thần đấu tranh của nhân
                                          dân miền Nam
                                        </li>
                                      </ul>
                                    </div>

                                    <div
                                      style={{
                                        textAlign: "center",
                                        marginBottom: "1rem",
                                      }}
                                    >
                                      <Image
                                        src="https://cand.com.vn/Files/Image/linhchi/2016/12/19/8cd4b77c-8401-43f7-9157-2be317424430.jpg"
                                        alt="Chiến thắng Ấp Bắc"
                                        preview={true}
                                        style={{
                                          width: "100%",
                                          maxWidth: "400px",
                                          borderRadius: "4px",
                                        }}
                                      />
                                      <p
                                        style={{
                                          fontSize: "0.8rem",
                                          marginTop: "0.5rem",
                                          color: "#666",
                                        }}
                                      >
                                        Trực thăng vận trong Chiến thắng Ấp Bắc
                                      </p>
                                    </div>

                                    <div style={{ marginBottom: "1rem" }}>
                                      <h5
                                        style={{
                                          color: "#1890ff",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        Chiến thuật "Trực thăng vận":
                                      </h5>
                                      <p>
                                        Sử dụng trực thăng vận chuyển nhanh lực
                                        lượng đặc biệt đến mục tiêu, nhằm bất
                                        ngờ tấn công. Tại Ấp Bắc, chiến thuật
                                        này bị bẻ gãy bởi du kích Việt Nam.
                                      </p>
                                      <div
                                        style={{
                                          textAlign: "center",
                                          marginTop: "1rem",
                                        }}
                                      >
                                        <Image
                                          src="https://cand.com.vn/Files/Image/linhchi/2016/12/19/8cd4b77c-8401-43f7-9157-2be317424430.jpg"
                                          alt="Trực thăng vận"
                                          preview={true}
                                          style={{
                                            width: "100%",
                                            maxWidth: "400px",
                                            borderRadius: "4px",
                                          }}
                                        />
                                      </div>
                                    </div>

                                    <div style={{ marginBottom: "1rem" }}>
                                      <h5
                                        style={{
                                          color: "#1890ff",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        Chiến thuật "Thiết xa vận":
                                      </h5>
                                      <p>
                                        Sử dụng xe thiết giáp vận chuyển và bảo
                                        vệ bộ binh, tạo đội hình tấn công mạnh.
                                        Tại Ấp Bắc thất bại trước chiến thuật
                                        phục kích của Việt Nam.
                                      </p>
                                      <div
                                        style={{
                                          display: "grid",
                                          gridTemplateColumns: "repeat(2, 1fr)",
                                          gap: "1rem",
                                          marginTop: "1rem",
                                        }}
                                      >
                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="http://file1.qdnd.vn/data/old_img/tvphamquynh/2015/9/30/35085707327.jpg"
                                            alt="M.113 bị bắn cháy"
                                            preview={true}
                                            style={{
                                              width: "100%",
                                              borderRadius: "4px",
                                            }}
                                          />
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              marginTop: "0.5rem",
                                              color: "#666",
                                            }}
                                          >
                                            M.113 bị bắn cháy
                                          </p>
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="http://file1.qdnd.vn/data/old_img/tvphamquynh/2015/9/30/36085313130.jpg"
                                            alt="Địa hình phức tạp"
                                            preview={true}
                                            style={{
                                              width: "100%",
                                              borderRadius: "4px",
                                            }}
                                          />
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              marginTop: "0.5rem",
                                              color: "#666",
                                            }}
                                          >
                                            Địa hình phức tạp miền Nam
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              }
                            >
                              Chi tiết
                            </Button>
                          </>
                        ) : victory.name === "Phá 'ấp chiến lược'" ? (
                          <>
                            <ul
                              style={{
                                paddingLeft: "1.2rem",
                                margin: "0.5rem 0",
                              }}
                            >
                              <li>
                                Phá vỡ hệ thống "ấp chiến lược" do Mỹ-Diệm thiết
                                lập
                              </li>
                              <li>
                                Hàng triệu người tham gia, phá hủy hàng nghìn ấp
                              </li>
                              <li>
                                Giải phóng hàng trăm nghìn dân khỏi sự kiểm soát
                              </li>
                              <li>
                                Chứng minh thất bại của chiến lược cô lập cách
                                mạng
                              </li>
                            </ul>
                            <Button
                              type="text"
                              size="small"
                              icon={
                                <InfoCircleOutlined
                                  style={{ color: "#1890ff" }}
                                />
                              }
                              onClick={() =>
                                openModal(
                                  "Chi tiết Phá 'Ấp chiến lược'",
                                  <div>
                                    <div style={{ marginBottom: "1rem" }}>
                                      <h5
                                        style={{
                                          color: "#1890ff",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        Hoàn cảnh:
                                      </h5>
                                      <p>
                                        "Ấp chiến lược" là mô hình làng chiến
                                        lược được Mỹ-Diệm thiết lập từ năm 1962,
                                        bao quanh bằng hàng rào kẽm gai, hào
                                        sâu, nhằm cô lập cách mạng khỏi quần
                                        chúng. Phong trào phá ấp phát triển mạnh
                                        mẽ từ năm 1963.
                                      </p>
                                    </div>

                                    <div style={{ marginBottom: "1rem" }}>
                                      <h5
                                        style={{
                                          color: "#1890ff",
                                          marginBottom: "0.5rem",
                                        }}
                                      >
                                        Ý nghĩa:
                                      </h5>
                                      <ul>
                                        <li>
                                          Thắng lợi lớn về chính trị và quân sự
                                        </li>
                                        <li>
                                          Chứng minh sự thất bại của chiến lược
                                          tách rời cách mạng khỏi nhân dân
                                        </li>
                                        <li>
                                          Củng cố mặt trận dân tộc thống nhất
                                          chống Mỹ
                                        </li>
                                        <li>
                                          Tạo điều kiện mở rộng căn cứ địa và
                                          lực lượng cách mạng
                                        </li>
                                      </ul>
                                    </div>

                                    <div
                                      style={{
                                        textAlign: "center",
                                        marginTop: "1rem",
                                      }}
                                    >
                                      <Image
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaXf15LZ6defGd-VAQ4XKAnr8zlHyZ7BEkg&s"
                                        alt="Ấp chiến lược"
                                        preview={true}
                                        style={{
                                          width: "100%",
                                          maxWidth: "400px",
                                          borderRadius: "4px",
                                        }}
                                      />
                                      <p
                                        style={{
                                          fontSize: "0.8rem",
                                          marginTop: "0.5rem",
                                          color: "#666",
                                        }}
                                      >
                                        Hình ảnh ấp chiến lược bị phá hủy
                                      </p>
                                    </div>
                                  </div>
                                )
                              }
                            >
                              Chi tiết
                            </Button>
                          </>
                        ) : (
                          victory.significance || victory.result
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* <div className="final-outcome">
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
            </div> */}
            </div>
          </div>
        </ScrollReveal>
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
