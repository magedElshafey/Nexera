import { FaShieldAlt, FaBroom, FaHardHat, FaCogs } from "react-icons/fa";

export const nodes = [
  { icon: FaShieldAlt, label: "Security", x: 20, y: 25 },
  { icon: FaBroom, label: "Cleaning", x: 80, y: 25 },
  { icon: FaHardHat, label: "Maintenance", x: 25, y: 75 },
  { icon: FaCogs, label: "Operations", x: 75, y: 75 },
];

export const lines = [
  [20, 25, 80, 25],
  [20, 25, 25, 75],
  [80, 25, 75, 75],
  [25, 75, 75, 75],
];
