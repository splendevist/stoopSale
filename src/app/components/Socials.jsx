"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="mx-2">
        <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={"Check out this Brooklyn Stoop Sale on August 10th!"}
          hashtag={"#stoopsale"}
        >
          <Image
            src="/facebook.png"
            alt="Facebook share button"
            height={150}
            width={150}
          />
          {/* <FacebookIcon size={32} round /> */}
        </FacebookShareButton>
        <p className="text-center">Facebook</p>
      </div>

      <div className="mx-2">
        <TwitterShareButton
          url={"https://github.com/next-share"}
          title={"Check out this Brooklyn Stoop Sale on August 10th!"}
        >
          <Image src="/x.png" alt="X share button" height={150} width={150} />
        </TwitterShareButton>
        <p className="text-center">X</p>
      </div>

      <div className="mx-2">
        <WhatsappShareButton
          url={"https://github.com/next-share"}
          title={"Check out this Brooklyn Stoop Sale on August 10th!"}
          separator=":: "
        >
          <Image
            src="/whatsapp.png"
            alt="Whatsapp share button"
            height={150}
            width={150}
          />
        </WhatsappShareButton>
        <p className="text-center">Whatsapp</p>
      </div>
    </div>
  );
}
