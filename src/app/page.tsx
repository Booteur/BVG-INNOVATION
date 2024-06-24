import { Box } from "@chakra-ui/react";
import Socialheader from "./components/SocialHeader/SocialHeader";
import HeroHeader from "./components/HeroHeader/HeroHeader";

export default function Home() {
  return (
    <Box>
      <Socialheader />
      <Box mt={"10px"} alignItems={"center"} justifyContent={"center"}>
        <HeroHeader />
      </Box>
    </Box>
  );
}
