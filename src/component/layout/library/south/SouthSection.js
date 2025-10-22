"use client";

import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./SouthSection.css";

export default function SouthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: null,
    images: [],
  });

  const openModal = (title, content, images = []) => {
    setModalContent({ title, content, images });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="south-section">
      {/* Hero Banner */}
      {/* <div className="hero-container">
        <Image
          src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg"
          alt="Miền Nam tiền tuyến lớn"
          preview={true}
          className="hero-image"
        />
        <div className="hero-overlay">
          Miền Nam: Tiền tuyến Lớn Chiến Đấu (1954-1975)
        </div>
      </div> */}

      {/* 4.1 Nghị quyết 15 và Đồng khởi */}
      <section className="content-section">
        <h3 className="section-title">
          <span className="number">4.1</span>
          Nghị quyết 15 và Phong trào Đồng khởi (1954–1960)
        </h3>

        <div className="layout-grid">
          <div className="image-focus">
            <Image
              src="https://media.vov.vn/sites/default/files/styles/large/public/2025-01/Dong%20Khoi%202.jpg"
              alt="Phong trào Đồng khởi"
              preview={true}
              className="main-image"
            />
            <p className="image-label">Phong trào Đồng khởi Bến Tre 1960</p>
          </div>

          <div className="content-wrap">
            <div className="info-block">
              <h4>📜 Nghị quyết 15 (1959)</h4>
              <p>Đường lối bạo lực cách mạng, kết hợp chính trị và vũ trang.</p>
            </div>

            <div className="info-block">
              <h4>⚡ Đồng khởi Bến Tre (1960)</h4>
              <p>
                Phá vỡ chính quyền địch, chuyển sang thế tiến công. Dẫn đến sự
                ra đời của Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.
              </p>
            </div>

            <Button
              type="primary"
              className="detail-btn"
              onClick={() =>
                openModal(
                  "Nghị quyết 15 và Phong trào Đồng khởi (1954–1960)",
                  <div className="modal-content">
                    <div className="content-block">
                      <h4>📜 Bối cảnh lịch sử</h4>
                      <p>
                        Sau năm 1954, cách mạng miền Nam chuyển từ đấu tranh vũ
                        trang sang đấu tranh chính trị. Tuy nhiên, chính quyền
                        Mỹ-Diệm thi hành chính sách khủng bố dã man, đỉnh điểm
                        là <strong>Luật 10/59</strong>, sử dụng Tòa án quân sự
                        đặc biệt đàn áp người yêu nước. Tình thế cách mạng miền
                        Nam lâm vào thế "hiểm nghèo".
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>⚡ Quyết định chiến lược</h4>
                      <p>
                        Đáp lại yêu cầu sinh tồn và sự phát triển của mâu thuẫn
                        giai cấp, dân tộc,{" "}
                        <strong>Hội nghị Trung ương lần thứ 15 (1/1959)</strong>{" "}
                        xác định con đường cách mạng miền Nam là sử dụng bạo
                        lực, kết hợp đấu tranh chính trị với vũ trang, tiến tới
                        khởi nghĩa giành chính quyền.
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>🎯 Thắng lợi Đồng khởi</h4>
                      <p>
                        Phong trào <strong>Đồng khởi Bến Tre (1/1960)</strong>{" "}
                        bùng nổ và lan rộng khắp miền Nam, phá vỡ cơ cấu chính
                        quyền cơ sở của địch, chuyển cách mạng miền Nam từ thế
                        giữ gìn lực lượng sang thế tiến công.
                      </p>
                    </div>
                  </div>,
                  [
                    "https://img.nhandan.vn/Files/Images/2022/08/20/Dong_khoi_-1661004346.jpg",
                    "https://baoquocte.vn/stores/news_dataimages/dienth/012020/17/11/nhung-buc-anh-lich-su-ve-phong-trao-dong-khoi-1960.jpg",
                  ]
                )
              }
              icon={<InfoCircleOutlined />}
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
      </section>

      {/* 4.2 Đánh bại Chiến lược Chiến tranh của Mỹ */}
      <section className="content-section">
        <h3 className="section-title">
          <span className="number">4.2</span>
          Đánh bại các Chiến lược Chiến tranh của Mỹ (1961–1973)
        </h3>

        {/* Chiến tranh Đặc biệt */}
        <div className="layout-grid">
          <div className="image-focus">
            <Image
              src="https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/12/15/ap_bac-1671096270810.jpg"
              alt="Chiến thắng Ấp Bắc"
              preview={true}
              className="main-image"
            />
            <p className="image-label">Chiến thắng Ấp Bắc 1963</p>
          </div>

          <div className="content-wrap">
            <h4 className="sub-title">A. Chiến tranh Đặc biệt (1961–1965)</h4>

            <div className="info-block">
              <p>
                <strong>Chiến lược Mỹ:</strong> Cố vấn, vũ khí Mỹ + Quân chủ lực
                VNCH, xây dựng 17,000 ấp chiến lược.
              </p>
            </div>

            <div className="info-block">
              <p>
                <strong>Đáp trả:</strong> Giữ thế tiến công, phá Ấp Chiến lược.{" "}
                <strong>Chiến thắng Ấp Bắc (1963)</strong> khẳng định khả năng
                đánh thắng quân đội được Mỹ trang bị hiện đại.
              </p>
            </div>

            <Button
              type="primary"
              className="detail-btn"
              onClick={() =>
                openModal(
                  "Đánh bại Chiến tranh Đặc biệt (1961–1965)",
                  <div className="modal-content">
                    <div className="content-block">
                      <h4>🎯 Chiến lược của Mỹ</h4>
                      <p>
                        Chiến tranh Đặc biệt với phương châm "Cố vấn, vũ khí Mỹ
                        + Quân chủ lực Việt Nam Cộng hòa", xây dựng 17,000 "ấp
                        chiến lược" nhằm cô lập và triệt hạ lực lượng cách mạng.
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>⚔️ Đáp trả chiến lược</h4>
                      <p>
                        Đảng chỉ đạo giữ vững thế tiến công, phá Ấp Chiến lược.
                        Sự kết hợp giữa đấu tranh vũ trang và nổi dậy của quần
                        chúng đã làm phá sản quốc sách "ấp chiến lược".
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>🏆 Chiến thắng Ấp Bắc (2/1/1963)</h4>
                      <p>
                        Trận đột phá đầu tiên, khẳng định khả năng đánh thắng
                        quân đội Sài Gòn được trang bị hiện đại của Mỹ. Đây là
                        bước ngoặt quan trọng, phá vỡ thần thoại "bất khả chiến
                        bại".
                      </p>
                    </div>
                  </div>,
                  [
                    "https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/12/15/ap_bac-1671096270810.jpg",
                  ]
                )
              }
              icon={<InfoCircleOutlined />}
            >
              Xem chi tiết
            </Button>
          </div>
        </div>

        {/* Chiến tranh Cục bộ */}
        <div className="layout-grid">
          <div className="image-focus">
            <Image
              src="https://images.hcmcpv.org.vn/res/news/2017/12/30-12-2017-tong-tien-cong-va-noi-day-xuan-mau-than-1968-ban-linh-va-tri-tue-viet-nam-thoi-dai-ho-chi-minh-EA5EF8D3.jpg"
              alt="Tổng tiến công Mậu Thân"
              preview={true}
              className="main-image"
            />
            <p className="image-label">Tổng tiến công Mậu Thân 1968</p>
          </div>

          <div className="content-wrap">
            <h4 className="sub-title">B. Chiến tranh Cục bộ (1965–1968)</h4>

            <div className="info-block">
              <p>
                <strong>Chiến lược Mỹ:</strong> Đưa quân chiến đấu trực tiếp vào
                miền Nam, đỉnh điểm hơn 500,000 quân.
              </p>
            </div>

            <div className="info-block">
              <p>
                <strong>Đáp trả:</strong> Kháng chiến toàn quốc.{" "}
                <strong>Chiến thắng Vạn Tường (1965)</strong> mở đầu cao trào.
              </p>
            </div>

            <div className="info-block highlight">
              <p>
                <strong>Đỉnh cao:</strong>{" "}
                <strong>Tổng tiến công Mậu Thân (1968)</strong> - Bước ngoặt
                chiến lược, buộc Mỹ phải đàm phán tại Paris.
              </p>
            </div>

            <Button
              type="primary"
              className="detail-btn"
              onClick={() =>
                openModal(
                  "Đánh bại Chiến tranh Cục bộ (1965–1968)",
                  <div className="modal-content">
                    <div className="content-block">
                      <h4>🎯 Chiến lược Mỹ leo thang</h4>
                      <p>
                        Sau thất bại của Chiến tranh Đặc biệt, Mỹ đưa quân chiến
                        đấu trực tiếp vào miền Nam với quy mô lớn, đỉnh điểm lên
                        đến hơn 500,000 quân, kết hợp chiến thuật "tìm diệt" và
                        bom đạn tàn phá.
                      </p>
                    </div>

                    <div className="content-block">
                      <h4>⚔️ Kháng chiến toàn quốc</h4>
                      <p>
                        Phát động kháng chiến chống Mỹ cứu nước toàn quốc.{" "}
                        <strong>Chiến thắng Vạn Tường (8/1965)</strong> mở đầu
                        cao trào chiến đấu, đập tan ý chí "tìm diệt" của Mỹ.
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>🔥 Bước ngoặt Mậu Thân 1968</h4>
                      <p>
                        Cuộc{" "}
                        <strong>Tổng tiến công và Nổi dậy Xuân Mậu Thân</strong>{" "}
                        đánh thẳng vào các đô thị, căn cứ đầu não của Mỹ-Ngụy,
                        gây chấn động dư luận thế giới. Đây là bước ngoặt chiến
                        lược, buộc Mỹ phải chấp nhận đàm phán tại Paris.
                      </p>
                    </div>

                    <div className="content-block">
                      <h4>💡 Bài học tự phê bình</h4>
                      <p>
                        Sau thắng lợi lớn Mậu Thân, Đảng đã "chuyển chậm" và có
                        biểu hiện chủ quan, tiếp tục mở các đợt tiến công vào đô
                        thị khi không còn yếu tố bất ngờ, dẫn đến tổn thất. Việc
                        Đảng công khai thừa nhận sai lầm cho thấy{" "}
                        <strong>
                          bản chất cách mạng, khả năng tự phê bình
                        </strong>{" "}
                        và sửa chữa khuyết điểm.
                      </p>
                    </div>
                  </div>,
                  [
                    "https://imgnvsk.vnanet.vn/MediaUpload/Content/2025/04/16/116-15-33-31.jpg",
                    "https://imgnvsk.vnanet.vn/MediaUpload/Content/2025/04/16/116-15-33-31.jpg",
                  ]
                )
              }
              icon={<InfoCircleOutlined />}
            >
              Xem chi tiết
            </Button>
          </div>
        </div>

        {/* Việt Nam hóa */}
        <div className="layout-grid">
          <div className="image-focus">
            <Image
              src="https://hdll.vn/FileUpload/Images/sddefault.jpg"
              alt="Điện Biên Phủ trên không"
              preview={true}
              className="main-image"
            />
            <p className="image-label">Điện Biên Phủ trên không 1972</p>
          </div>

          <div className="content-wrap">
            <h4 className="sub-title">
              C. Việt Nam hóa Chiến tranh (1969–1973)
            </h4>

            <div className="info-block">
              <p>
                <strong>Chiến lược Mỹ:</strong> "Dùng người Việt Nam đánh người
                Việt Nam", rút dần quân Mỹ nhưng tăng viện trợ cho Sài Gòn.
              </p>
            </div>

            <div className="info-block">
              <p>
                <strong>Đáp trả:</strong> "Đánh cho Mỹ cút, đánh cho Ngụy nhào".
                Các chiến dịch chiến lược: Đường 9 - Nam Lào (1971), Xuân-Hè
                1972.
              </p>
            </div>

            <div className="info-block highlight">
              <p>
                <strong>Thắng lợi:</strong>{" "}
                <strong>Điện Biên Phủ trên không (1972)</strong> bắn rơi hàng
                chục B-52, buộc Mỹ ký <strong>Hiệp định Paris (1973)</strong>.
              </p>
            </div>

            <Button
              type="primary"
              className="detail-btn"
              onClick={() =>
                openModal(
                  "Đánh bại Việt Nam hóa Chiến tranh (1969–1973)",
                  <div className="modal-content">
                    <div className="content-block">
                      <h4>🎯 Chiến lược "Việt Nam hóa"</h4>
                      <p>
                        Chiến lược "Việt Nam hóa chiến tranh" nhằm "dùng người
                        Việt Nam đánh người Việt Nam", rút dần quân Mỹ nhưng
                        tăng cường viện trợ quân sự cho chính quyền Sài Gòn.
                      </p>
                    </div>

                    <div className="content-block">
                      <h4>⚔️ Đáp trả quyết liệt</h4>
                      <p>
                        Kiên định khẩu hiệu{" "}
                        <strong>"Đánh cho Mỹ cút, đánh cho Ngụy nhào"</strong>.
                        Mở các cuộc tấn công chiến lược: Chiến thắng Đường 9 -
                        Nam Lào (1971) và Chiến dịch Xuân-Hè 1972.
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>✈️ Điện Biên Phủ trên không (12/1972)</h4>
                      <p>
                        Chiến thắng vang dội khi bắn rơi hàng chục máy bay B-52
                        trong 12 ngày đêm, phá tan chiến dịch ném bom chiến lược
                        của Mỹ, buộc Mỹ phải quay lại bàn đàm phán.
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>📜 Ý nghĩa Hiệp định Paris (27/1/1973)</h4>
                      <p>
                        <strong>Hiệp định Paris</strong> buộc Mỹ phải chấm dứt
                        chiến tranh, rút hết quân viễn chinh ra khỏi miền Nam.
                        Hoàn thành mục tiêu <strong>"đánh cho Mỹ cút"</strong>,
                        mở ra cơ hội chuyển sang giai đoạn{" "}
                        <strong>"đánh cho Ngụy nhào"</strong>.
                      </p>
                    </div>
                  </div>,
                  [
                    "https://media.doisongphapluat.com/files/content/2022/12/27/b52-080116.jpg",
                    "https://image.thanhnien.vn/768/uploaded/ngocthanh/2022_12_27/1972-b52-2-6606.jpg",
                  ]
                )
              }
              icon={<InfoCircleOutlined />}
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
      </section>

      {/* 4.3 Tổng tiến công 1975 */}
      <section className="content-section">
        <h3 className="section-title">
          <span className="number">4.3</span>
          Tổng Tiến công và Nổi dậy Mùa Xuân 1975
        </h3>

        <div className="layout-grid">
          <div className="image-focus">
            <Image
              src="https://file3.qdnd.vn/data/images/0/2022/04/26/thuyanh/30-4.jpg?dpi=150&quality=100&w=870"
              alt="30 tháng 4 năm 1975"
              preview={true}
              className="main-image"
            />
            <p className="image-label">
              30 tháng 4 năm 1975 - Giải phóng hoàn toàn miền Nam
            </p>
          </div>

          <div className="content-wrap">
            <div className="info-block">
              <p>
                <strong>Chiến thắng Phước Long (1/1975):</strong> Đòn thăm dò
                chiến lược, chứng tỏ Mỹ không còn khả năng can thiệp.
              </p>
            </div>

            <div className="info-block highlight">
              <p>
                <strong>Quyết tâm:</strong> Giải phóng ngay trong năm 1975.
              </p>
              <p className="command">
                "Thần tốc, thần tốc hơn nữa, táo bạo, táo bạo hơn nữa"
              </p>
            </div>

            <div className="info-block">
              <p>
                <strong>Chuỗi chiến thắng:</strong> Tây Nguyên (3/1975) → Huế-Đà
                Nẵng (3/1975) → Chiến dịch Hồ Chí Minh (4/1975)
              </p>
            </div>

            <div className="info-block victory">
              <p className="victory-text">
                🇻🇳 <strong>30/4/1975</strong>: Giải phóng hoàn toàn miền Nam,
                thống nhất đất nước!
              </p>
            </div>

            <Button
              type="primary"
              className="detail-btn"
              onClick={() =>
                openModal(
                  "Tổng Tiến công và Nổi dậy Mùa Xuân 1975",
                  <div className="modal-content">
                    <div className="content-block">
                      <h4>📍 Bối cảnh sau Hiệp định Paris</h4>
                      <p>
                        Sau Hiệp định Paris, Mỹ và chính quyền Nguyễn Văn Thiệu
                        phá hoại hiệp định, tiếp tục lấn chiếm vùng giải phóng.
                        Đảng nhận định con đường cách mạng miền Nam vẫn là bạo
                        lực cách mạng.
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>🎯 Nghệ thuật nắm bắt thời cơ</h4>
                      <p>
                        <strong>Chiến thắng Phước Long (1/1975)</strong> là đòn
                        thăm dó chiến lược quan trọng, chứng tỏ khả năng giải
                        phóng hoàn toàn đã chín muồi khi Mỹ không có khả năng
                        can thiệp trở lại. Bộ Chính trị quyết tâm giải phóng
                        ngay trong năm 1975.
                      </p>
                    </div>

                    <div className="content-block highlight">
                      <h4>⚡ Mệnh lệnh lịch sử</h4>
                      <p className="command-text">
                        "Thần tốc, thần tốc hơn nữa, táo bạo, táo bạo hơn nữa"
                      </p>
                    </div>

                    <div className="content-block">
                      <h4>🏆 Chuỗi chiến thắng liên hoàn</h4>
                      <ul>
                        <li>
                          <strong>Chiến dịch Tây Nguyên (3/1975):</strong> Mở
                          màn, đập tan tuyến phòng thủ chiến lược cao nguyên
                        </li>
                        <li>
                          <strong>Chiến dịch Huế - Đà Nẵng (3/1975):</strong>{" "}
                          Giải phóng miền Trung trong 20 ngày
                        </li>
                        <li>
                          <strong>Chiến dịch Hồ Chí Minh (4/1975):</strong>{" "}
                          Chiến dịch lớn nhất, giải phóng Sài Gòn trong 55 ngày
                        </li>
                      </ul>
                    </div>

                    <div className="content-block victory-section">
                      <h4>🇻🇳 Thắng lợi lịch sử - 30/4/1975</h4>
                      <p>
                        Cuộc{" "}
                        <strong>Tổng tiến công và Nổi dậy Mùa Xuân 1975</strong>{" "}
                        kết thúc thắng lợi vào{" "}
                        <strong>ngày 30 tháng 4 năm 1975</strong>, giải phóng
                        hoàn toàn miền Nam, chấm dứt 21 năm chiến tranh, thống
                        nhất đất nước, mở ra kỷ nguyên mới của dân tộc.
                      </p>
                    </div>
                  </div>,
                  [
                    "https://nld.mediacdn.vn/291774122806476800/2021/4/30/3-1619753925903968281421.jpg",
                    "https://cdnphoto.dantri.com.vn/EahMYsfR-gTloIQgWpwUMWf3u8w=/thumb_w/990/2021/04/27/chien-thang-tay-nguyen-1975-1619512618595.jpeg",
                    "https://img.nhandan.vn/Files/Images/2022/04/27/Chien_dich_Ho_Chi_Minh-1651033653.jpg",
                  ]
                )
              }
              icon={<InfoCircleOutlined />}
            >
              Xem chi tiết
            </Button>
          </div>
        </div>

        {/* Gallery */}
        <div className="image-gallery">
          <div className="gallery-item">
            <Image
              src="https://cdnphoto.dantri.com.vn/EahMYsfR-gTloIQgWpwUMWf3u8w=/thumb_w/990/2021/04/27/chien-thang-tay-nguyen-1975-1619512618595.jpeg"
              alt="Chiến dịch Tây Nguyên"
              preview={true}
              className="gallery-image"
            />
            <p className="image-label">Chiến dịch Tây Nguyên 3/1975</p>
          </div>
          <div className="gallery-item">
            <Image
              src="https://image.baophapluat.vn/800x450/Uploaded/2024/qhjtktvoq/2024_04_26/bang-ten-duong-nguyen-hue-thuoc-phuong-hue-thuong-thanh-pho-hue-tinh-thua-thien-hue-0734.JPG"
              alt="Chiến dịch Huế - Đà Nẵng"
              preview={true}
              className="gallery-image"
            />
            <p className="image-label">Chiến dịch Huế - Đà Nẵng 3/1975</p>
          </div>
          <div className="gallery-item">
            <Image
              src="https://img.nhandan.vn/Files/Images/2022/04/27/Chien_dich_Ho_Chi_Minh-1651033653.jpg"
              alt="Chiến dịch Hồ Chí Minh"
              preview={true}
              className="gallery-image"
            />
            <p className="image-label">Chiến dịch Hồ Chí Minh 4/1975</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        title={<h3 className="modal-title">{modalContent.title}</h3>}
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={900}
        className="detail-modal"
        centered
      >
        <div className="modal-body">
          {modalContent.content}

          {modalContent.images && modalContent.images.length > 0 && (
            <div className="modal-gallery">
              <h4 className="gallery-heading">📸 Hình ảnh lịch sử</h4>
              <div className="modal-gallery-grid">
                {modalContent.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Hình ${index + 1}`}
                    className="modal-gallery-image"
                    preview={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
