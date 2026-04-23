/* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable react-hooks/set-state-in-effect */
// // SplashProvider.tsx
// "use client";

// import { useEffect, useState } from "react";
// import SplashScreen from "./SplashScreen";
// import { AnimatePresence } from "framer-motion";

// export default function SplashProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [show, setShow] = useState(true); // 👈 مهم

//   useEffect(() => {
//     const seen = sessionStorage.getItem("splash_seen");

//     if (seen) {
//       setShow(false);
//     } else {
//       sessionStorage.setItem("splash_seen", "true");
//     }
//   }, []);

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {show && <SplashScreen onFinish={() => setShow(false)} />}
//       </AnimatePresence>

//       {!show && children}
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { AnimatePresence } from "framer-motion";

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("splash_seen");

    if (seen) {
      setShow(false);
    } else {
      sessionStorage.setItem("splash_seen", "true");
      setShow(true);
    }
  }, []);

  // 👈 يمنع hydration flicker
  if (show === null) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {show && <SplashScreen onFinish={() => setShow(false)} />}
      </AnimatePresence>

      {!show && children}
    </>
  );
}
