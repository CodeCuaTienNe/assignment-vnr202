"use client";

import FoundationSection from "@/component/layout/library/FoundationSection";
import MuseumFooter from "@/component/layout/library/MuseumFooter";
import MuseumHeader from "@/component/layout/library/MuseumHeader";
import MuseumHero from "@/component/layout/library/MuseumHero";
import NorthSection from "@/component/layout/library/NorthSection";
import OrientationSection from "@/component/layout/library/OrientationSection";
import SouthSection from "@/component/layout/library/SouthSection";
import StrategySection from "@/component/layout/library/StrategySection";
import VictorySection from "@/component/layout/library/VictorySection";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import "./page.css";

const { Content } = Layout;

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("foundation");

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "foundation",
        "strategy",
        "north",
        "south",
        "victory",
        "orientation",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout className="museum-layout">
      <MuseumHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Content className="museum-content">
        <MuseumHero />

        {/* PHẦN I: DẪN NHẬP VÀ NỀN TẢNG (1920-1954) */}
        <section id="foundation" className="museum-section foundation-section">
          <div className="section-header">
            <div className="section-roman">I.</div>
            <h2 className="section-title">Dẫn nhập và Nền tảng Chiến lược</h2>
            <div className="section-years">1920 – 1954</div>
          </div>
          <FoundationSection />
        </section>

        <div className="museum-divider">
          <div className="divider-line" />
          <div className="divider-ornament">✦</div>
          <div className="divider-line" />
        </div>

        {/* PHẦN II: ĐƯỜNG LỐI CHIẾN LƯỢC ĐỒNG THỜI */}
        <section id="strategy" className="museum-section strategy-section">
          <div className="section-header">
            <div className="section-roman">II.</div>
            <h2 className="section-title">Đường lối Chiến lược Đồng thời</h2>
            <div className="section-years">1954 – 1975</div>
            <div className="section-subtitle">
              Mối quan hệ Biện chứng giữa Hai Miền
            </div>
          </div>
          <StrategySection />
        </section>

        <div className="museum-divider">
          <div className="divider-line" />
          <div className="divider-ornament">✦</div>
          <div className="divider-line" />
        </div>

        {/* PHẦN III: MIỀN BẮC - HẬU PHƯƠNG CHIẾN LƯỢC */}
        <section id="north" className="museum-section north-section">
          <div className="section-header">
            <div className="section-roman">III.</div>
            <h2 className="section-title">Miền Bắc: Hậu phương Chiến lược</h2>
            <div className="section-years">1954 – 1975</div>
            <div className="section-subtitle">
              Củng cố Nền tảng Xã hội Chủ nghĩa
            </div>
          </div>
          <NorthSection />
        </section>

        <div className="museum-divider">
          <div className="divider-line" />
          <div className="divider-ornament">✦</div>
          <div className="divider-line" />
        </div>

        {/* PHẦN IV: MIỀN NAM - TIỀN TUYẾN LỚN */}
        <section id="south" className="museum-section south-section">
          <div className="section-header">
            <div className="section-roman">IV.</div>
            <h2 className="section-title">Miền Nam: Tiền tuyến Lớn</h2>
            <div className="section-years">1954 – 1975</div>
            <div className="section-subtitle">
              Chuyển hóa Chiến lược, Đánh bại Chủ nghĩa Thực dân Mới
            </div>
          </div>
          <SouthSection />
        </section>

        <div className="museum-divider">
          <div className="divider-line" />
          <div className="divider-ornament">✦</div>
          <div className="divider-line" />
        </div>

        {/* PHẦN V: Ý NGHĨA LỊCH SỬ VÀ BÀI HỌC */}
        <section id="victory" className="museum-section victory-section">
          <div className="section-header">
            <div className="section-roman">V.</div>
            <h2 className="section-title">
              Ý Nghĩa Lịch sử và Bài học Lãnh đạo
            </h2>
            <div className="section-years">1975</div>
            <div className="section-subtitle">
              Thắng lợi Vĩ đại - Di sản Trường tồn
            </div>
          </div>
          <VictorySection />
        </section>

        <div className="museum-divider">
          <div className="divider-line" />
          <div className="divider-ornament">✦</div>
          <div className="divider-line" />
        </div>

        {/* PHẦN VI: ĐỊNH HƯỚNG CHO SINH VIÊN */}
        <section
          id="orientation"
          className="museum-section orientation-section"
        >
          <div className="section-header">
            <div className="section-roman">VI.</div>
            <h2 className="section-title">Định hướng Lý tưởng cho Sinh viên</h2>
            <div className="section-subtitle">Thế hệ Trẻ - Tiếp nối Lửa Đỏ</div>
          </div>
          <OrientationSection />
        </section>

        <MuseumFooter />
      </Content>
    </Layout>
  );
}
