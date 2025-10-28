import contentImage1 from "../assets/content-1.webp";
import { AppleIcon, DownloadIcon, HelpCircleIcon, SmartphoneIcon } from "../components/icons/index.jsx";

export const modules = [
  {
    title: "Module 1 — How to Use the Manuscript of Miracles — The Beginning",
    img: contentImage1,
    steps: [
      {
        title: "Step 1 — Important Video",
        videoUrl: "https://www.youtube.com/embed/ZJ86XnyJVQc",
      },
      {
        title: "Step 2 — Your Daily Habit",
        videoUrl: "https://www.youtube.com/embed/_U1AFHpgJBk",
      },
    ],
  },
];

export const buttons = [
  { label: "Install for Android", icon: SmartphoneIcon },
  { label: "Install for iPhone", icon: AppleIcon },
  { label: "Contact Support", icon: HelpCircleIcon },
  { label: "Download Manuscript (for print)", icon: DownloadIcon },
];
