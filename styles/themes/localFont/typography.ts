import { MantineTheme } from "@mantine/core";
import localFont from "@next/font/local";

const sono = localFont({
  src: [
    {
      path: "../../../public/fonts/sono/Sono-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../public/fonts/sono/Sono-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/sono/Sono-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/sono/Sono-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/sono/Sono-Bold.ttf",
      weight: "700",
    },
  ],
  fallback: ["sans-serif"],
});

const roboto = localFont({
  src: [
    {
      path: "../../../public/fonts/roboto/Roboto-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/roboto/Roboto-Bold.ttf",
      weight: "700",
    },
  ],
  fallback: ["sans-serif"],
});

const typography: Partial<MantineTheme> = {
  fontFamily: sono.style.fontFamily,
  headings: {
    fontFamily: roboto.style.fontFamily,
    fontWeight: 400,
    sizes: {
      h1: {
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: "54px",
      },
      h2: {
        fontSize: "40px",
        fontWeight: 500,
        lineHeight: "44px",
      },
      h3: {
        fontSize: "32px",
        fontWeight: 400,
        lineHeight: "36px",
      },
      h4: {
        fontSize: "28px",
        fontWeight: 300,
        lineHeight: "32px",
      },
      h5: {
        fontSize: "24px",
        fontWeight: 300,
        lineHeight: "28px",
      },
      h6: {
        fontSize: "20px",
        fontWeight: 300,
        lineHeight: "24px",
      },
    },
  },
};

export default typography;
