"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-evenly">
      <div className="mx-2">
        <FacebookShareButton
          url={"brooklyn-stoop-sale.vercel.app"}
          quote={"Check out this Brooklyn Stoop Sale on August 10th!"}
          hashtag={"#stoopsale"}
        >
          <Image
            id="rotate"
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
          url={"brooklyn-stoop-sale.vercel.app"}
          title={"Check out this Brooklyn Stoop Sale on August 10th!"}
        >
          <Image
            id="rotate"
            src="/x.png"
            alt="X share button"
            height={150}
            width={150}
          />
        </TwitterShareButton>
        <p className="text-center">X</p>
      </div>

      <div className="mx-2">
        <WhatsappShareButton
          url={"brooklyn-stoop-sale.vercel.app"}
          title={"Check out this Brooklyn Stoop Sale on August 10th!"}
          separator=":: "
        >
          <Image
            id="rotate"
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
