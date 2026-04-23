import { ServiceType } from "@/features/home/sevices/data/services.data";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type DynamicServiceBgProps = {
  services: ServiceType[];
  active: number;
};
const DynamicServiceBg: React.FC<DynamicServiceBgProps> = ({
  services,
  active,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`
            absolute inset-0 -z-10 bg-gradient-to-b
            ${services[active].color}
          `}
      />
    </AnimatePresence>
  );
};

export default DynamicServiceBg;
