import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { socialData } from "./dummy";
import CustomTooltip from "../../CustomTooltip/CustomTooltip";

const FlagSocialMedia = () => {
  const router = useRouter();

  return (
    <>
      {socialData.map((social, index) => (
        <CustomTooltip
          placement={"bottom-start"}
          label={social.link}
          key={index}
        >
          <Box
            alignItems={"flex-end"}
            justifyContent={"space-between"}
            padding={"5px"}
            key={index}
            onClick={() => router.push(social.link)}
          >
            {social.icon}
          </Box>
        </CustomTooltip>
      ))}
    </>
  );
};

export default FlagSocialMedia;
