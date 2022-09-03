import Image from "next/image";
import Portrait from "../images/portrait.png";
const Header = () => {
  const iconStyles =
    "w-7 h-7 stroke-current stroke-2 transition duration-150 ease-out cursor-pointer hover:scale-110";
  return (
    <header className="flex w-full items-center justify-center p-6">
      <div className="flex flex-wrap gap-8 items-center justify-center">
        <Image
          src={Portrait}
          alt="Portrait"
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm">FTMG Founder</p>
            <p className="font-bold text-3xl">Edward Dorta</p>
            <p className="text-base">Software Engineer and Content Creator</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" className={iconStyles}>
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
            <svg viewBox="0 0 24 24" className={iconStyles}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <svg viewBox="0 0 24 24" className={iconStyles}>
              <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
