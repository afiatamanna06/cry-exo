import { Button, Image } from "@chakra-ui/react";

interface propTypes {
    name: string;
    onClick?: any;
    bg?: string;
    image?: string;
    hoverBg?: string;
}

function CommonButton({ name, onClick, bg, hoverBg, image }: propTypes) {
  return (
    <Button
      fontFamily="'Catamaran', sans-serif"
      fontWeight="medium"
      rounded={"3px"}
      bg={bg}
      color="#3D445C"
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