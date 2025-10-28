"use client";

import contentData from "@/content/contentData";
import "./VictorySection.css";

export default function VictorySection() {
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 5);
  const sections = chapter.sections;

  return (
    <div className="victory-section">
      {/* Section 5.1: Ý nghĩa Lịch sử */}
      <div className="significance-block">
        <div className="subsection-header">
          <div className="subsection-number">5.1</div>
          <h3 className="subsection-title">{sections[0].title}</h3>
        </div>

        <div className="overall-significance">
          <p className="significance-text">
            {sections[0].content.overall_significance}
          </p>
        </div>

        <div className="achievements-grid">
          {sections[0].content.achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-card">
              <h4 className="achievement-aspect">{achievement.aspect}</h4>
              <p className="achievement-description">
                {achievement.description}
              </p>
              {achievement.impact && (
                <p className="achievement-impact">{achievement.impact}</p>
              )}
            </div>
          ))}
        </div>

        <div className="congress-assessment">
          <h4>
            Đánh giá của Đại hội IV (
            {sections[0].content.party_congress_assessment.date})
          </h4>
          <blockquote className="assessment-quote">
            "{sections[0].content.party_congress_assessment.statement}"
          </blockquote>
        </div>
      </div>

      {/* Section 5.2: Nguyên nhân Thắng lợi */}
      <div className="causes-block">
        <div className="subsection-header">
          <div className="subsection-number">5.2</div>
          <h3 className="subsection-title">{sections[1].title}</h3>
        </div>

        <div className="primary-cause">
          <p>{sections[1].content.primary_cause}</p>
        </div>

        <div className="factors-grid">
          {sections[1].content.key_factors.map((factor, idx) => (
            <div key={idx} className="factor-card">
              <h4 className="factor-title">{factor.factor}</h4>
              {factor.description && <p>{factor.description}</p>}
              {factor.evidence && (
                <ul className="evidence-list">
                  {factor.evidence.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {factor.statistics && (
                <div className="statistics">
                  <p>
                    <strong>Bộ đội:</strong> {factor.statistics.troops}
                  </p>
                  <p>
                    <strong>Vũ khí:</strong> {factor.statistics.weapons}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 5.3: Bài học Kinh nghiệm */}
      <div className="lessons-block">
        <div className="subsection-header">
          <div className="subsection-number">5.3</div>
          <h3 className="subsection-title">{sections[2].title}</h3>
        </div>

        <div className="lessons-list">
          {sections[2].content.lessons.map((lesson, idx) => (
            <div key={idx} className="lesson-item">
              <div className="lesson-number">{lesson.lesson_number}</div>
              <div className="lesson-content">
                <h4 className="lesson-title">{lesson.title}</h4>
                {lesson.description && <p>{lesson.description}</p>}
                {lesson.components && (
                  <ul className="components-list">
                    {lesson.components.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
