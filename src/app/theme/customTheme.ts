import { Button, extendTheme } from "@chakra-ui/react";

import breakpoints from "./beakpoints";
import colors from "./colors";
import { fontSizes, lineHeight } from "./fontSize";
import { TextStyles } from "./TextStyle";
import StyledTooltip from "./ToolTipStyle";
import { MyCalenderIcon } from "../../../public/assets/svg";

export const theme = () => {
  return extendTheme({
    colors,
    fonts: {
      body: "lato-regular",
    },
    fontSizes: {
      ...fontSizes,
    },
    lineHeights: {
      ...lineHeight,
    },
    breakpoints,
    styles: {
      global: {
        html: {
          fontSize: "13px",
          webkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        },
        body: {
          backgroundColor: "#F9F9FA",
          color: "black.500",
        },
        _focus: {
          boxShadow: "none !important",
        },

        _dataFocus: {
          boxShadow: "none !important",
        },
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(194, 199, 202, 1)",
          borderRadius: "24px",
        },
        input: {
          "&::-webkit-calendar-picker-indicator": {
            background: `url(${MyCalenderIcon}) no-repeat`,
            width: "11px",
            backgroundSize: "contain",
          },
        },
        label: {
          _disabled: {
            opacity: "1 !important",
          },
        },
      },
    },
    components: {
      ...StyledTooltip,
      ...TextStyles,
    },

    // add missing config here for fonts / spacing / etc...
  });
};
