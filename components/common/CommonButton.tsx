import { Button, Image } from "@chakra-ui/react";

interface propTypes {
    name: string;
    width?: string[],
    onClick?: any;
    bg?: string;
    bgGradient?: string;
    image?: string;
    hoverBg?: string;
}

function CommonButton({ name, onClick, bg, bgGradient, hoverBg, image, width }: propTypes) {
  return (
    <Button
      fontFamily="'Catamaran', sans-serif"
      fontWeight="semibold"
      rounded={"3px"}
      bg={bg}
      width={width}
      bgGradient={bgGradient}
      color="white"
      display="flex"
      flexDir="row"
      alignItems="center"
      fontSize={["sm", "sm", "md", "md"]}
      _hover={{
        bg: hoverBg,
        color: "white",
      }}
      _active={{
        bg: hoverBg,
      }}
      onClick={onClick}
    >
      {image && (<Image h="1.5rem" w="2.5rem" src={image} alt="" />)}
      {name}
    </Button>
  );
}

export default CommonButton;