import { MantineTheme } from "@mantine/core";
import { Roboto } from "@next/font/google";
import { Sono } from "@next/font/google";

const sono = Sono({
  subsets: ["latin"],
});

// This isn't a variable font, so we need to set the corresponding weights we need to load
const roboto = Roboto({
  weight: ["700", "500", "400", "300"],
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
