"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const SYSTEM_PROMPT = `
Nhiệm vụ chính: Giải đáp các thắc mắc về Sự Lãnh đạo của Đảng Cộng sản Việt Nam trong Cuộc Kháng chiến chống Đế quốc Mỹ Xâm lược (1954–1975) cho sinh viên.

Phạm vi nội dung chuyên môn:
- Giai đoạn 1954-1975: Từ Hiệp định Giơnevơ đến thống nhất đất nước
- Hai nhiệm vụ chiến lược: Xây dựng CNXH ở miền Bắc và cách mạng DTDN ở miền Nam
- Nghị quyết 15 (1959) và phong trào Đồng Khởi (1960)
- Đường Hồ Chí Minh và vai trò hậu phương chiến lược
- Chiến tranh cục bộ, Việt Nam hóa và Tổng tiến công Mùa Xuân 1975
- Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng

Nguyên tắc giải đáp:
- Diễn giải dễ hiểu, súc tích, dựa trên tư liệu lịch sử chính thống
- Liên hệ với CLO2: Phân tích sự lãnh đạo trong hai cuộc kháng chiến (1945-1975)
- Liên hệ với CLO4: Củng cố niềm tin vào sự lãnh đạo của Đảng
- Sử dụng ngôn ngữ gần gũi, tránh thuật ngữ khô khan
- Đảm bảo tính chính xác lịch sử và khách quan khoa học

Tập trung vào việc giúp sinh viên hiểu sâu sắc về tính độc lập, tự chủ và sáng tạo trong đường lối lãnh đạo của Đảng trong giai đoạn 1954-1975.
`;

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (userInput) => {
    const keys = [
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY, version: "v1" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V2, version: "v2" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V3, version: "v3" },
    ];

    const availableKeys = keys.filter((k) => k.key);

    if (availableKeys.length === 0) {
      setError("Không có API key khả dụng");
      return null;
    }

    setLoading(true);
    setError(null);

    // Thử tất cả các key có sẵn
    const failedKeys = [];

    for (const keyToTry of availableKeys) {
      // Bỏ qua key đã lỗi trước đó
      if (failedKeys.includes(keyToTry.version)) {
        continue;
      }

      try {
        console.log(`Đang thử sử dụng API key ${keyToTry.version}...`);

        const genAI = new GoogleGenAI({
          apiKey: keyToTry.key,
        });

        const response = await genAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: SYSTEM_PROMPT + "\n\n" + userInput,
        });

        console.log(`✅ Thành công với API key ${keyToTry.version}`);
        setLoading(false);
        return response.text;
      } catch (err) {
        console.error(`❌ Lỗi với API key ${keyToTry.version}:`, err);
        failedKeys.push(keyToTry.version);

        // Kiểm tra nếu là lỗi 503 Service Unavailable
        const isServiceUnavailable =
          err.message?.includes("503") ||
          err.status === 503 ||
          err.message?.includes("Service Unavailable");

        if (isServiceUnavailable) {
          console.log(
            `🔄 API key ${keyToTry.version} gặp lỗi 503, chuyển sang key khác...`
          );

          // Kiểm tra xem còn key nào khả dụng không
          const remainingKeys = availableKeys.filter(
            (k) => !failedKeys.includes(k.version)
          );
          if (remainingKeys.length > 0) {
            setError(
              `Dịch vụ tạm thời không khả dụng với ${keyToTry.version}. Đang thử key khác...`
            );
            continue; // Thử key tiếp theo
          }
        }

        // Nếu là key cuối cùng hoặc không phải lỗi 503
        const remainingKeys = availableKeys.filter(
          (k) => !failedKeys.includes(k.version)
        );
        if (remainingKeys.length === 0) {
          break; // Đã thử hết tất cả key
        }
      }
    }

    // Nếu đã thử hết tất cả key
    setLoading(false);
    const errorMessage =
      failedKeys.length > 1
        ? `Tất cả API key đều gặp sự cố. Vui lòng thử lại sau vài phút. (Đã thử: ${failedKeys.join(
            ", "
          )})`
        : `Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.`;

    setError(errorMessage);
    return null;
  };

  return {
    generateResponse,
    loading,
    error,
  };
}
