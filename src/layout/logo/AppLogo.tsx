import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type AppLogoProps = {
  logo?: StaticImageData;
};
const AppLogo: React.FC<AppLogoProps> = ({ logo = "" }) => {
  return (
    <Link href="/">
      {logo ? (
        <Image width={65} height={32} priority src={logo} alt="app-logo" />
      ) : (
        <h1 className="text-xl font-bold text-primary tracking-wide">NEXERA</h1>
      )}
    </Link>
  );
};

export default AppLogo;
