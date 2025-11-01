"use client";

import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import ScrollReveal from "@/component/animation/ScrollReveal";
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
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.1</div>
            <h3 className="subsection-title">{section11?.title}</h3>
          </div>
        </ScrollReveal>

        {/* Bối cảnh Quốc tế */}
        <ScrollReveal variant="slideLeft" delay={0.2} duration={0.7}>
          <div className="context-section international">
            <h4 className="context-title">
              <span className="title-marker">✦</span>
              Bối cảnh Quốc tế
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
                  <strong className="block-label challenges">
                    Thách thức:
                  </strong>
                  <ul className="challenges-list">
                    {section11?.content.international_context.challenges.map(
                      (ch, i) => (
                        <li key={i} className="challenge-item">
                          {ch.includes("Chiến tranh Lạnh") ? (
                            <>
                              {ch.replace("Chiến tranh Lạnh", "")}
                              <strong> Chiến tranh Lạnh</strong>
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
                                    "Chiến tranh Lạnh là gì?",
                                    <div>
                                      <p>
                                        Chiến tranh Lạnh là một thời kỳ căng
                                        thẳng chính trị, quân sự và kinh tế giữa
                                        hai siêu cường: Liên Xô và Hoa Kỳ, kéo
                                        dài từ cuối Thế chiến II (1947) đến cuối
                                        thập niên 1980 - đầu thập niên 1990.
                                      </p>
                                      <p>
                                        Không có xung đột quân sự trực tiếp giữa
                                        hai bên, nhưng biểu hiện qua cuộc chạy
                                        đua vũ trang, cạnh tranh ý thức hệ, và
                                        các cuộc chiến tranh ủy nhiệm trên toàn
                                        cầu.
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
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/320px-Flag_of_the_Soviet_Union.svg.png"
                                            alt="Cờ Liên Xô"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              marginTop: "0.5rem",
                                            }}
                                          >
                                            Liên Xô
                                          </p>
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="https://vnn-imgs-f.vgcloud.vn/2019/08/22/14/nhung-su-kien-chan-dong-the-gioi-thoi-chien-tranh-lanh-ii.JPEG?width=260&s=paboKCHJ-YzjOcHRRQDpAw"
                                            alt="Chạy đua hạt nhân"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              marginTop: "0.5rem",
                                            }}
                                          >
                                            Chạy đua hạt nhân
                                          </p>
                                        </div>

                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a39804ce9c20823a423d9d62936bf1a639dd684183658392618b47a55314b1f39c5676275734378306ae4aa7471d6f05e5f6891c395aaa9493e5cdaf349cad3d4a15e/a3be75b0f3c22afc47c64a90d9c48a7c.jpg"
                                            alt="Chạy đua không gian"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              marginTop: "0.5rem",
                                            }}
                                          >
                                            Chạy đua không gian
                                          </p>
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png"
                                            alt="Cờ Hoa Kỳ"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              marginTop: "0.5rem",
                                            }}
                                          >
                                            Hoa Kỳ
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }
                              />
                            </>
                          ) : ch.includes("thuộc địa kiểu mới") ? (
                            <>
                              Mỹ xây dựng miền Nam thành{" "}
                              <strong>thuộc địa kiểu mới</strong> và căn cứ quân
                              sự
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
                                    "Thuộc địa kiểu mới là gì?",
                                    <div>
                                      <p>
                                        Thuộc địa kiểu mới là hình thức thống
                                        trị gián tiếp của các nước đế quốc đối
                                        với các nước kém phát triển, không chiếm
                                        đóng trực tiếp mà thông qua các chính
                                        phủ bù nhìn, viện trợ kinh tế, quân sự
                                        để kiểm soát chính trị, kinh tế và văn
                                        hóa.
                                      </p>
                                      <p>
                                        Ở miền Nam Việt Nam, Mỹ dựng lên chính
                                        quyền Ngô Đình Diệm như một chính phủ bù
                                        nhìn, duy trì sự thống trị thông qua
                                        viện trợ và can thiệp quân sự.
                                      </p>
                                    </div>
                                  )
                                }
                              />
                            </>
                          ) : ch.includes("Mỹ thay chân Pháp") ? (
                            <>
                              <strong>Đế quốc Mỹ thay chân Pháp</strong>, trở
                              thành kẻ thù trực tiếp
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
                                    "Hoàn cảnh lịch sử sau Chiến dịch Điện Biên Phủ và Hiệp định Geneve",
                                    <div>
                                      <p>
                                        Sau thất bại của Pháp tại Chiến dịch
                                        Điện Biên Phủ (5/1954), đế quốc Mỹ đã
                                        thay chân Pháp để can thiệp vào Việt Nam
                                        nhằm duy trì ảnh hưởng ở Đông Nam Á
                                        trong bối cảnh Chiến tranh Lạnh.
                                      </p>

                                      <div
                                        style={{ display: "flex", gap: "1rem" }}
                                      >
                                        <div style={{ flex: 1 }}>
                                          <Image
                                            src="https://media.vov.vn/sites/default/files/styles/large/public/2023-05/images1139304_6810aa9d609525dimages941103_media_thumb1382169701.jpg"
                                            alt="Chiến dịch Điện Biên Phủ 1954"
                                            preview={true}
                                            style={{
                                              width: "100%",
                                              borderRadius: "8px",
                                            }}
                                          />
                                          <p
                                            style={{
                                              fontSize: "0.8rem",
                                              marginTop: "0.5rem",
                                              textAlign: "center",
                                            }}
                                          >
                                            Chiến dịch Điện Biên Phủ 1954
                                          </p>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                          <Image
                                            src="https://photo.znews.vn/w660/Uploaded/aolnpvp/2015_03_13/zing_vn4_1.jpg"
                                            alt="Mỹ đổ quân vào bãi biển Đà Nẵng ngày 8/3/1965"
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
                                              textAlign: "center",
                                            }}
                                          >
                                            Mỹ đổ quân vào bãi biển Đà Nẵng ngày
                                            8/3/1965
                                          </p>
                                        </div>
                                      </div>
                                      <p>
                                        Hiệp định Geneve (7/1954) đã chấm dứt
                                        chiến tranh ở Đông Dương, nhưng Mỹ từ
                                        chối tham gia ký kết và không công nhận
                                        hiệp định, dẫn đến việc Mỹ trở thành kẻ
                                        thù trực tiếp của nhân dân Việt Nam.
                                      </p>
                                    </div>
                                  )
                                }
                              />
                            </>
                          ) : (
                            ch
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="image-content">
                <Image
                  src="https://ttdn.vn/Uploads/Images/2022/7/20/5/7321-13.2.jpg"
                  alt="Hội nghị Giơnevơ 1954"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">Hội nghị Giơnevơ (7/1954)</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bối cảnh Trong nước */}
        <ScrollReveal variant="slideRight" delay={0.2} duration={0.7}>
          <div className="context-section domestic">
            <h4 className="context-title">
              <span className="title-marker">✦</span>
              Bối cảnh Trong nước
            </h4>

            <div className="split-content reverse">
              <div className="image-content">
                <Image
                  src="https://special.nhandan.vn/vi_tuyen_17_co_hien_luong/assets/gjnQroXSAz/ben-hai-1-2560x1440.jpg"
                  alt="Cầu Hiền Lương - sông Bến Hải (vĩ tuyến 17) - Chia cắt đất nước"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Cầu Hiền Lương - sông Bến Hải (vĩ tuyến 17) - Nỗi đau chia cắt
                  đất nước
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
                    {section11?.content.domestic_context.south.violations.includes(
                      "tổng tuyển cử"
                    ) ? (
                      <>
                        Phá hoại Hiệp định Giơnevơ, cự tuyệt{" "}
                        <strong>tổng tuyển cử</strong>
                        <Button
                          type="text"
                          size="small"
                          icon={
                            <InfoCircleOutlined style={{ color: "#1890ff" }} />
                          }
                          onClick={() =>
                            openModal(
                              "Tổng tuyển cử là gì?",
                              <div>
                                <p>
                                  Tổng tuyển cử là cuộc bầu cử toàn dân để thống
                                  nhất đất nước Việt Nam sau chiến tranh, theo
                                  quy định của Hiệp định Geneve (1954).
                                </p>
                                <Image
                                  src="https://media.vov.vn/sites/default/files/styles/large/public/2024-05/1_121.jpg"
                                  alt="Hội nghị Giơnevơ 1954"
                                  preview={true}
                                  style={{ width: "100%", borderRadius: "8px" }}
                                />
                                <p>
                                  Vai trò: Để thực hiện quyền tự quyết của nhân
                                  dân Việt Nam, thống nhất hai miền Nam - Bắc.
                                </p>
                                <p>
                                  Từ 2 năm (1954 - 1956) chính quyền miền Nam do
                                  Mỹ hậu thuẫn từ chối tổ chức tổng tuyển cử,
                                  dẫn đến đất nước bị chia cắt đến năm 1975 tức
                                  21 năm.
                                </p>
                              </div>
                            )
                          }
                        />
                      </>
                    ) : (
                      section11?.content.domestic_context.south.violations
                    )}
                  </p>
                  <div className="terror-warning">
                    <strong>⚠ Khủng bố:</strong>{" "}
                    {
                      section11?.content.domestic_context.south.terror_policy
                        .name
                    }
                    <Button
                      type="text"
                      size="small"
                      icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                      onClick={() =>
                        openModal(
                          "Luật 10/59 - Chính sách Khủng bố",
                          <div>
                            <p>
                              Trong bối cảnh Mỹ thay chân Pháp sau thất bại tại
                              Điện Biên Phủ, chính quyền Ngô Đình Diệm ở miền
                              Nam Việt Nam đã ban hành Luật 10/59 vào ngày
                              6/1/1956, thiết lập Tòa án quân sự đặc biệt để đàn
                              áp phong trào cách mạng và những người yêu nước.
                            </p>
                            <p>
                              Luật này cho phép xét xử nhanh chóng mà không cần
                              bằng chứng, dẫn đến hàng loạt vụ bắt bớ, tra tấn
                              và hành quyết. Hàng trăm nghìn người đã trở thành
                              nạn nhân của chính sách khủng bố này, góp phần leo
                              thang xung đột và củng cố sự thống trị của Mỹ ở
                              miền Nam.
                            </p>
                            <div
                              style={{
                                display: "flex",
                                gap: "1rem",
                                marginTop: "1rem",
                                flexWrap: "wrap",
                              }}
                            >
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Law_10-59_ROV.pdf/page1-927px-Law_10-59_ROV.pdf.jpg"
                                alt="Luật 10/59"
                                style={{
                                  width: "200px",
                                  height: "auto",
                                  borderRadius: "8px",
                                }}
                              />
                              <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IQ-n0egU9-6bXeoYhZlgXF1Rb3iIk4kYBg&s"
                                alt="Máy chém Ngô Đình Diệm"
                                style={{
                                  width: "200px",
                                  height: "auto",
                                  borderRadius: "8px",
                                }}
                              />
                              <Image
                                src="https://live.staticflickr.com/3847/14455934624_b9338abd6c.jpg"
                                alt="Nhân dân miền Nam phản đối luật 10/59"
                                style={{
                                  width: "200px",
                                  height: "auto",
                                  borderRadius: "8px",
                                }}
                              />
                            </div>
                          </div>
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section 1.2: Đường lối Chiến lược Hai nhiệm vụ */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.2</div>
            <h3 className="subsection-title">{section12?.title}</h3>
          </div>
        </ScrollReveal>

        {/* Congress Introduction */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="congress-intro">
            <div className="split-content">
              <div className="text-content">
                <h4 className="intro-title">
                  Đại hội III của Đảng (9/1960)
                  <Button
                    type="text"
                    size="small"
                    icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                    onClick={() =>
                      openModal(
                        "Đại hội đại biểu toàn quốc lần thứ III của Đảng Cộng sản Việt Nam (9/1960)",
                        <div>
                          <p>
                            Đại hội đại biểu toàn quốc lần thứ III của Đảng Cộng
                            sản Việt Nam được tổ chức từ{" "}
                            <strong>ngày 5 đến 10 tháng 9 năm 1960</strong> tại{" "}
                            <strong>Hà Nội</strong>. Đây là{" "}
                            <strong>
                              Đại hội đầu tiên sau khi đất nước bị chia cắt
                            </strong>{" "}
                            bởi Hiệp định Geneve 1954, đánh dấu bước ngoặt quan
                            trọng trong lịch sử cách mạng Việt Nam.
                          </p>
                          <p>
                            Đại hội đã thông qua nhiều nghị quyết quan trọng,
                            trong đó nổi bật là{" "}
                            <strong>
                              đường lối chiến lược "Hai nhiệm vụ chiến lược"
                            </strong>
                            : Xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh
                            thống nhất nước nhà ở miền Nam. Đây là biểu hiện của
                            bản lĩnh chính trị vững vàng và tầm nhìn chiến lược
                            xa rộng của Đảng.
                          </p>
                          <p>
                            Đại hội cũng bầu{" "}
                            <strong>Ban Chấp hành Trung ương mới</strong>, với{" "}
                            <strong>Hồ Chí Minh</strong> tiếp tục được bầu làm{" "}
                            <strong>Chủ tịch Đảng</strong>, khẳng định sự đoàn
                            kết và lãnh đạo của Đảng trong giai đoạn mới của
                            cách mạng.
                          </p>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(3, 1fr)",
                              gap: "1rem",
                              marginTop: "1rem",
                            }}
                          ></div>
                        </div>
                      )
                    }
                  />
                </h4>
                <h3>
                  Đại hội đại biểu toàn quốc lần thứ III của Đảng Cộng sản Việt
                  Nam (9/1960) là Đại hội đầu tiên sau khi đất nước bị chia cắt,
                  đánh dấu bước ngoặt quan trọng trong lịch sử cách mạng Việt
                  Nam.
                </h3>
                <h3>
                  Đại hội đã quyết định đường lối chiến lược hai nhiệm vụ chiến
                  lược: Xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh thống
                  nhất nước nhà. Đây là biểu hiện của bản lĩnh chính trị vững
                  vàng và tầm nhìn chiến lược xa rộng của Đảng.
                </h3>
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
              </div>
              <div className="image-content">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Image
                    src="https://cdn.nhandan.vn/images/78d92bfef5333421c1cfa9f19aa2572af2f6454a381555b801846adcfda202211eaba25988cd7490f8bf974ba8911de145ae9efd2a3694f5a87363601ee5479ec3d24b4aed4c365a506c05a6e94d3a99/dbb68baec139379253c0a4315d3851e1.jpg"
                    alt="Đại hội III Đảng Cộng sản Việt Nam"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  {/* <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hanoi_1960s.jpg/320px-Hanoi_1960s.jpg"
                  alt="Hà Nội thập niên 1960"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                /> */}
                </div>
                <p className="image-caption">
                  Đại hội III của Đảng (9/1960) và Hà Nội
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Two Strategies Grid */}
        <ScrollReveal variant="fadeUp" delay={0.1} duration={0.7}>
          <div className="strategies-comparison">
            {section12?.content.dual_strategy.strategies.map(
              (strategy, idx) => (
                <div
                  key={idx}
                  className={`strategy-block ${
                    strategy.region === "Miền Bắc" ? "north" : "south"
                  }`}
                >
                  <h4 className="strategy-region">{strategy.region}</h4>
                  <div className="strategy-type">{strategy.type}</div>
                  <div className="strategy-image">
                    {strategy.region === "Miền Bắc" ? (
                      <Image
                        src="https://cdn.hvcsnd.edu.vn/uploads/2025/04/08/6/unnamed-57-1744104303.jpg?q=75&f=6&s=mp6hq0egmwc"
                        alt="Chiến lược Miền Bắc"
                        style={{
                          width: "80%",
                          borderRadius: "2px",
                          margin: "0 auto",
                        }}
                      />
                    ) : (
                      <Image
                        src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg"
                        alt="Chiến lược Miền Nam"
                        style={{
                          width: "61%",
                          borderRadius: "2px",
                          margin: "0 auto",
                        }}
                      />
                    )}
                  </div>
                  <div className="strategy-details">
                    <p>
                      <strong>Nhiệm vụ:</strong> {strategy.mission}
                    </p>
                    <p className="role-highlight">
                      <strong>Vai trò:</strong> {strategy.role}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
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
        </ScrollReveal>
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
