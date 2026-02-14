import { Poppins } from "next/font/google";

const poppins400 = Poppins({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const poppins600 = Poppins({
  weight: "600",
  subsets: ["latin", "latin-ext"],
});

const poppins800 = Poppins({
  weight: "800",
  subsets: ["latin", "latin-ext"],
});

export { poppins400, poppins600, poppins800 };
