import { MantineTheme } from "@mantine/core";
import typography from "./typography";

const primaryTheme: Partial<MantineTheme> = {
  ...typography,
  globalStyles: (theme) => ({
    body: {
      backgroundColor: theme.colors.gray[9],
      color: theme.colors.cyan[6],
    },
  }),
};

export default primaryTheme;
