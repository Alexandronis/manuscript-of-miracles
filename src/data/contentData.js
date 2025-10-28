import contentImage1 from "../assets/content-1.webp";
import contentImage2 from "../assets/content-2.webp";
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
  {
    title: "Module 2 — Manuscript of Miracles",
    img: contentImage2,
    steps: [
      {
        title: "1 - Introduction (Video + Guide)",
        videoUrl: "https://www.youtube.com/embed/V9qogeoyz3w",
        pdfUrl: "https://drive.google.com/file/d/1a4NyFifF8WZ-n2LJVvOiLpysrEKSRhRj/preview",
      },
      { title: "2 - Day 1 - Restoration", videoUrl: "https://www.youtube.com/embed/example1" },
      { title: "3 - Day 2 - Prosperity", videoUrl: "https://www.youtube.com/embed/example2" },
      { title: "4 - Day 3 - Divine Freedom", videoUrl: "https://www.youtube.com/embed/example3" },
      { title: "5 - Day 4 - Love Renewed", videoUrl: "https://www.youtube.com/embed/example4" },
      { title: "6 - Day 5 - Divine Shield", videoUrl: "https://www.youtube.com/embed/example5" },
      { title: "7 - Day 6 - Sacred Gratitude", videoUrl: "https://www.youtube.com/embed/example6" },
      { title: "8 - Day 7 - Day of Grace", videoUrl: "https://www.youtube.com/embed/example7" },
    ],
  },
];

export const buttons = [
  { label: "Install for Android", icon: SmartphoneIcon },
  { label: "Install for iPhone", icon: AppleIcon },
  { label: "Contact Support", icon: HelpCircleIcon },
  { label: "Download Manuscript (for print)", icon: DownloadIcon },
];
