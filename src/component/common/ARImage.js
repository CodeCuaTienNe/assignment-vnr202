"use client";

import { Image, Tooltip } from "antd";
import { useState } from "react";
import "./ARImage.css";

/**
 * ARImage Component
 *
 * An image component with AR QR code functionality
 * - Shows a glowing yellow shadow animation to indicate AR capability
 * - Displays QR code tooltip on hover for users to scan with their phone
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} qrCodePath - Path to QR code image in /public/QR-image/
 * @param {object} style - Additional styles for the image
 * @param {boolean} preview - Enable image preview (default: true)
 * @param {string} caption - Optional caption text below image
 */
export default function ARImage({
  src,
  alt,
  qrCodePath,
  style = {},
  preview = true,
  caption
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const tooltipContent = (
    <div className="ar-qr-tooltip">
      <div className="qr-title">Quét mã QR để trải nghiệm AR</div>
      <Image
        src={`/QR-image/${qrCodePath}`}
        alt="QR Code for AR experience"
        preview={false}
        style={{ width: 200, height: 200 }}
      />
      <div className="qr-instruction">
        Sử dụng điện thoại để quét mã QR và trải nghiệm thực tế tăng cường
      </div>
    </div>
  );

  return (
    <div className="ar-image-container">
      <Tooltip
        title={tooltipContent}
        open={tooltipVisible}
        onOpenChange={setTooltipVisible}
        placement="top"
        overlayClassName="ar-qr-tooltip-overlay"
        trigger="hover"
      >
        <div className="ar-image-wrapper">
          <Image
            src={src}
            alt={alt}
            preview={preview}
            style={style}
            className="ar-enabled-image"
          />
        </div>
      </Tooltip>
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  );
}
