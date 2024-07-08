import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardProps,
} from "@chakra-ui/react";
import { FC } from "react";

interface ICardProps extends CardProps {
  width?: number | string;
  height?: number | string;
  bgColor?: string;
  borderRadius?: number | string;
  size?: string | "lg" | "md" | "sm" | "xs" | "xl" | "xxl";
  showButton?: boolean;
  children?: React.ReactNode;
}

const CardComponent: FC<ICardProps> = ({
  width,
  height,
  bgColor,
  borderRadius,
  size = "md",
  showButton = true,
  children,
  ...rest
}) => {
  return (
    <Box bgColor={bgColor} padding={"15px"} borderRadius={borderRadius}>
      <Card overflow="hidden" variant={"filled"} size={size}>
        <CardBody>{children}</CardBody>
        {showButton ? (
          <CardFooter>
            <Button width={"full"} variant="solid" colorScheme="blue">
              Buy now
            </Button>
          </CardFooter>
        ) : null}
      </Card>
    </Box>
  );
};

export default CardComponent;
