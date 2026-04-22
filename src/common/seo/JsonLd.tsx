// type Props = {
//   data: Record<string, unknown>;
// };

// const JsonLd = ({ data }: Props) => {
//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(data),
//       }}
//     />
//   );
// };

// export default JsonLd;
"use client";

import Script from "next/script";

type Props = {
  data: Record<string, unknown>;
};

const JsonLd = ({ data }: Props) => {
  return (
    <Script
      id="jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

export default JsonLd;
