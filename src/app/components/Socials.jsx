"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-evenly md:mb-14">
      {/* Facebook */}
      <div className="flex flex-col items-center mx-2">
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
        </FacebookShareButton>
        <p className="bg-[url('/button-tape.png')] text-center text-white h-10 w-52 bg-cover bg-no-repeat flex justify-center items-center">
          Facebook
        </p>
      </div>

      {/* Twitter */}
      <div className="flex flex-col items-center mx-2">
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
        <p className="bg-[url('/button-tape.png')] text-center text-white h-10 w-52 bg-cover bg-no-repeat flex justify-center items-center">
          X
        </p>
      </div>

      {/* Whatsapp */}
      <div className="flex flex-col items-center mx-2">
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
        <p className="bg-[url('/button-tape.png')] text-center text-white h-10 w-52 bg-cover bg-no-repeat flex justify-center items-center">
          Whatsapp
        </p>
      </div>
    </div>
  );
}
