import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAccount, useDisconnect, useEnsName, useBalance } from "wagmi";
import CommonButton from "../common/CommonButton";

function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, connector, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { disconnect } = useDisconnect();
    const {
      data: Balance,
      isError,
      isLoading,
    } = useBalance({
      address:
        ensName !== null && ensName !== undefined && address !== undefined
          ? `${address}`
          : address,
    });
    console.log(Balance);

  return (
    <Flex
      justify="space-between"
      fontFamily="'Catamaran', sans-serif"
      bg="rgba(255, 255, 255, 1)"
      alignItems="center"
      w="full"
      py={["4"]}
      px={["6", "6", "8", "8"]}
    >
      <Link href="/" passHref>
        <Box fontWeight="bold" fontSize={["xl"]} color="#3D445C">CryExo</Box>
      </Link>
      <Box>
        {isConnected ? (
            <Flex alignItems="center" gap={[2, 2, 3, 3]}>
              <Box fontWeight="semibold" fontSize={["xs", "xs", "sm", "md"]}>
                {isLoading && <Box>Fetching balance…</Box>}
                {isError && <Box>Error fetching balance</Box>}
                <Flex gap={1}>
                  <Box display={["none", "none", "block", "block"]}>
                    Your balance:{" "}
                  </Box>
                  <Box>{`${Balance?.formatted} ${Balance?.symbol}`}</Box>
                </Flex>
              </Box>
              <Box>
                <Menu>
                  <MenuButton>
                    <CommonButton
                      name={
                        ensName
                          ? `${ensName} (${address?.slice(
                              0,
                              8
                            )}..${address?.slice(
                              address.length - 4,
                              address.length
                            )})`
                          : `${address?.slice(0, 5)}..${address?.slice(
                              address.length - 5,
                              address.length
                            )}`
                      }
                      bg="white"
                      hoverBg="rgba(245, 245, 245, 1)"
                    />
                  </MenuButton>
                  <MenuList borderRadius="sm" border="1px">
                    <MenuItem fontSize="sm" onClick={() => disconnect()}>
                      disconnect
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          ) : (
            <Flex direction="column">
              <CommonButton
                name="Connect your wallet"
                onClick={onOpen}
                bg="rgba(202, 195, 220, .6)"
                hoverBg="#9CA7C3"
              />
              
            </Flex>
          )}
      </Box>
    </Flex>
  );
}

export default NavigationBar;
