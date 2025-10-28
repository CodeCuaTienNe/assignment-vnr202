"use client";

import contentData from "@/content/contentData";
import "./OrientationSection.css";

export default function OrientationSection() {
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 5);
  const section = chapter.sections.find((s) => s.section_id === "5.4");

  return (
    <div className="orientation-section">
      <div className="subsection-header">
        <div className="subsection-number">5.4</div>
        <h3 className="subsection-title">{section.title}</h3>
      </div>

      <div className="overall-message">
        <p className="message-text">{section.content.overall_message}</p>
      </div>

      {/* Historical Sites */}
      <div className="historical-sites">
        <h4 className="sites-title">Di tích Lịch sử Minh chứng</h4>

        <div className="sites-grid">
          {section.content.historical_sites.map((site, idx) => (
            <div key={idx} className="site-card">
              <div className="site-header">
                <h5 className="site-name">{site.name}</h5>
                {site.classification && (
                  <span className="site-classification">
                    {site.classification}
                  </span>
                )}
              </div>

              <div className="site-info">
                <p>
                  <strong>Địa điểm:</strong> {site.location}
                </p>
                {site.nickname && (
                  <p>
                    <strong>Biệt danh:</strong> {site.nickname}
                  </p>
                )}
                <p className="site-description">{site.description || ""}</p>
                <p className="site-significance">
                  <strong>Ý nghĩa:</strong>{" "}
                  {site.significance || site.symbolic_meaning}
                </p>
              </div>

              {site.historical_moment && (
                <div className="historical-moment">
                  <h6>Khoảnh khắc Lịch sử</h6>
                  <p>
                    <strong>Sự kiện:</strong> {site.historical_moment.event}
                  </p>
                  <p>
                    <strong>Thời gian:</strong> {site.historical_moment.time}
                  </p>
                  <p>
                    <em>{site.historical_moment.significance}</em>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Message to Youth */}
      <div className="youth-message">
        <div className="message-card">
          <div className="message-icon"></div>
          <h4>Thông điệp đến Thế hệ Trẻ</h4>
          <p className="youth-text">{section.content.message_to_youth}</p>
        </div>
      </div>

      {/* Final Affirmation */}
      <div className="final-affirmation">
        <div className="affirmation-content">
          <div className="affirmation-icon">✦</div>
          <p className="affirmation-text">
            {section.content.final_affirmation}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="call-to-action">
        <h4>Hãy cùng nhau:</h4>
        <div className="action-grid">
          <div className="action-item">
            <span className="action-emoji"></span>
            <p>Học tập và nghiên cứu lịch sử Đảng</p>
          </div>
          <div className="action-item">
            <span className="action-emoji">🇻🇳</span>
            <p>Giữ gìn và phát huy truyền thống dân tộc</p>
          </div>
          <div className="action-item">
            <span className="action-emoji"></span>
            <p>Phấn đấu xây dựng đất nước phồn vinh</p>
          </div>
          <div className="action-item">
            <span className="action-emoji"></span>
            <p>Đóng góp cho hòa bình thế giới</p>
          </div>
        </div>
      </div>
    </div>
  );
}
