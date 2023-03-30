import CommonButton from "@/components/common/CommonButton";
import ConnectorModal from "@/components/navigation/ConnectorModal";
import { Box, Image, Center, Flex, useDisclosure } from "@chakra-ui/react";
import Carousel from "nuka-carousel";

const carouselData = [
  "https://source.unsplash.com/collection/2340700/2400x1709",
  "https://source.unsplash.com/collection/2340700/2400x1709",
];

const LandingSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      alignItems="center"
      justify="center"
      w={["full"]}
      minH="90vh"
      direction="column"
      fontFamily="'Catamaran', sans-serif"
    >
      <Center>
        <Flex
          direction={["column"]}
          gap={[4]}
          alignItems="center"
          fontFamily="'Catamaran', sans-serif"
        >
          <Box w={["100%", "100%", "40rem", "50rem"]}>
            <Carousel
              autoplay={true}
              cellAlign="center"
              animation="fade"
              slidesToShow={1}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              enableKeyboardControls={false}
              defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: "#DC4492",
                },
              }}
              withoutControls
              wrapAround
            >
              {carouselData.map((item) => (
                <Image
                  src={item}
                  w={["100%", "100%", "45rem", "50rem"]}
                  h={["20rem", "20rem", "24rem", "28rem"]}
                  alt=""
                />
              ))}
            </Carousel>
          </Box>
          <Box
            fontSize={["3xl", "3xl", "4xl", "4xl"]}
            fontWeight="semibold"
            mt="6"
            mb="2"
            fontFamily="'Catamaran', sans-serif"
          >
            Buy & Sell Crypto Instantly
          </Box>
          <Box
            mt="-5"
            mb="6"
            fontSize={["sm", "sm", "lg", "md"]}
            color="gray.400"
            fontFamily="'Catamaran', sans-serif"
          >
            The most trusted cryptocurrency trading platform
          </Box>
          <CommonButton
            onClick={onOpen}
            name="Get Started"
            width={["14rem"]}
            bg="rgba(0, 233, 223, 1)"
          />
          <ConnectorModal isModalOpen={isOpen} onModalClose={onClose} />
        </Flex>
      </Center>
    </Flex>
  );
};

export default LandingSection;
