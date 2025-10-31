"use client";

import FoundationSection from "@/component/layout/library/chuong_1/FoundationSection";
import StrategySection from "@/component/layout/library/chuong_2/StrategySection";
import NorthSection from "@/component/layout/library/chuong_3/NorthSection";
import SouthSection from "@/component/layout/library/chuong_4/SouthSection";
import VictorySection from "@/component/layout/library/chuong_5/VictorySection";
import MuseumFooter from "@/component/layout/library/footer/MuseumFooter";
import MuseumHeader from "@/component/layout/library/header/MuseumHeader";
import MuseumHero from "@/component/layout/library/hero/MuseumHero";
import ScrollReveal from "@/component/animation/ScrollReveal";
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

      <Content className="museum-content museum-article">
        <MuseumHero />

        {/* PHẦN I: NỀN TẢNG LỊCH SỬ VÀ ĐƯỜNG LỐI CHIẾN LƯỢC */}
        <section
          id="foundation"
          className="museum-section foundation-section magazine-section bg-foundation"
        >
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <div className="section-header">
              <div className="section-roman">
                I. Bối cảnh Lịch sử và Sự Hình thành Đường lối Chiến lược Chung
              </div>
              <div className="section-years">1954 – 1960</div>
            </div>
          </ScrollReveal>
          <FoundationSection />
        </section>

        <ScrollReveal variant="fadeIn" duration={0.6}>
          <div className="museum-divider">
            <div className="divider-line" />
            <div className="divider-ornament">✦</div>
            <div className="divider-line" />
          </div>
        </ScrollReveal>

        {/* PHẦN II: CHUYỂN HƯỚNG VÀ KHỞI NGHĨA */}
        <section
          id="strategy"
          className="museum-section strategy-section magazine-section bg-strategy"
        >
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <div className="section-header">
              <div className="section-roman">
                II. Sự Lãnh đạo Chuyển hướng và Khởi nghĩa
              </div>
              <div className="section-years">1954 – 1965</div>
              <div className="section-subtitle">
                Nghị quyết 15 và Phong trào Đồng Khởi
              </div>
            </div>
          </ScrollReveal>
          <StrategySection />
        </section>

        <ScrollReveal variant="fadeIn" duration={0.6}>
          <div className="museum-divider">
            <div className="divider-line" />
            <div className="divider-ornament">✦</div>
            <div className="divider-line" />
          </div>
        </ScrollReveal>

        {/* PHẦN III: MIỀN BẮC XHCN - HẬU PHƯƠNG CHIẾN LƯỢC */}
        <section
          id="north"
          className="museum-section north-section magazine-section bg-north"
        >
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <div className="section-header">
              <div className="section-roman">
                III. Miền Bắc XHCN: Hậu phương Chiến lược Vững mạnh
              </div>
              <div className="section-years">1954 – 1975</div>
              <div className="section-subtitle">
                Xây dựng CNXH và Đường Hồ Chí Minh
              </div>
            </div>
          </ScrollReveal>
          <NorthSection />
        </section>

        <ScrollReveal variant="fadeIn" duration={0.6}>
          <div className="museum-divider">
            <div className="divider-line" />
            <div className="divider-ornament">✦</div>
            <div className="divider-line" />
          </div>
        </ScrollReveal>

        {/* PHẦN IV: SỰ LÃNH ĐẠO VƯỢT QUA THỬ THÁCH VÀ GIÀNH THẮNG LỢI */}
        <section
          id="south"
          className="museum-section south-section magazine-section bg-south"
        >
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <div className="section-header">
              <div className="section-roman">
                IV. Sự Lãnh đạo Vượt qua Thử thách và Giành Thắng lợi
              </div>
              <div className="section-years">1965 – 1975</div>
              <div className="section-subtitle">
                Đánh bại Chiến tranh Cục bộ, Việt Nam hóa và Mùa Xuân 1975
              </div>
            </div>
          </ScrollReveal>
          <SouthSection />
        </section>

        <ScrollReveal variant="fadeIn" duration={0.6}>
          <div className="museum-divider">
            <div className="divider-line" />
            <div className="divider-ornament">✦</div>
            <div className="divider-line" />
          </div>
        </ScrollReveal>

        {/* PHẦN V: Ý NGHĨA LỊCH SỬ VÀ BÀI HỌC */}
        <section
          id="victory"
          className="museum-section victory-section magazine-section bg-victory"
        >
          <ScrollReveal variant="fadeUp" duration={0.8}>
            <div className="section-header">
              <div className="section-roman">
                V. Ý nghĩa Lịch sử và Kinh nghiệm Lãnh đạo
              </div>
              <div className="section-years">1954 – 1975</div>
              <div className="section-subtitle">
                Bài học Trường tồn và Di sản Quý báu
              </div>
            </div>
          </ScrollReveal>
          <VictorySection />
        </section>
        <MuseumFooter />
      </Content>
    </Layout>
  );
}
