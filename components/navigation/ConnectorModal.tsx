import {
  Box,
  Button,
  Flex,
  Modal,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { useConnect } from "wagmi";
import { chains } from "../../utils/wagmiConfig";

interface modalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

const images = [
  {
    name: "MetaMask",
    src: "/metamask.png",
  },
  {
    name: "Coinbase Wallet",
    src: "/coinbase.png",
  },
  {
    name: "WalletConnect",
    src: "/walletconnect.svg",
  },
];

function ConnectorModal({ isModalOpen, onModalClose }: modalProps) {
  const { connect, connectors, error, isLoading, pendingConnector, isSuccess } =
    useConnect();
  console.log(chains);

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="white" fontFamily="'Catamaran', sans-serif">
        <ModalCloseButton />
        <ModalBody>
          <Flex
            direction="column"
            pt="9"
            gap={3}
            onMouseMove={isSuccess ? onModalClose : () => console.log("")}
          >
            <Box textAlign="center" fontWeight="semibold" fontSize="lg" mb="2">
              Connect a wallet from below to continue
            </Box>
            {connectors.map((connector) =>
              images.map((image) => (
                <Box
                  display={image.name === connector.name ? "flex" : "none"}
                  flexDir="row"
                  gap={2}
                  py="4"
                  px="4"
                  cursor="pointer"
                  alignItems="center"
                  key={connector.id}
                  fontWeight="semibold"
                  rounded={"5px"}
                  fontSize={["sm", "md", "md", "md"]}
                  _hover={{
                    bg: "rgba(0, 0, 0, .05)",
                  }}
                  _active={{
                    opacity: ".9",
                  }}
                  onClick={() => connect({ connector })}
                >
                  <Image
                    w="1.8rem"
                    h="1.8rem"
                    objectFit="cover"
                    src={image.src}
                    alt=""
                  />
                  <Box fontSize="md">
                    {connector.name}
                    {!connector.ready && " (unsupported)"}
                    {isLoading &&
                      connector.id === pendingConnector?.id &&
                      " (connecting)"}
                  </Box>
                </Box>
              ))
            )}

            {error && <Box fontSize="xs">{error.message}</Box>}
          </Flex>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ConnectorModal;
