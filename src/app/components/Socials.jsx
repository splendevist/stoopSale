"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

export default function Socials() {
  return (
    <div className="flex justify-center w-full">
      {/* Facebook */}
      <div className="mx-2">
        <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={"Check out this Brooklyn Stoop Sale on August 10th!"}
          hashtag={"#stoopsale"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      {/* Twitter/X */}
      <div className="mx-2">
        <TwitterShareButton
          url={"https://github.com/next-share"}
          title={
            "Check out this Brooklyn Stoop Sale on August 10th!"
          }
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      {/* Whatsapp */}
      <div className="mx-2">
        <WhatsappShareButton
          url={"https://github.com/next-share"}
          title={
            "Check out this Brooklyn Stoop Sale on August 10th!"
          }
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
