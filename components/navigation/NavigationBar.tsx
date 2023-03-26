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
import ConnectorModal from "./ConnectorModal";
import { useAtom } from "jotai";
import amountAtom from "@/atoms/amountAtom";

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

  const [amount, setAmount] = useAtom(amountAtom);

  return (
    <Flex
      justify="space-between"
      fontFamily="'Catamaran', sans-serif"
      bg="rgba(0, 233, 223, .05)"
      alignItems="center"
      w="full"
      py={["4"]}
      px={["4", "4", "8", "8"]}
    >
      <Link href="/" passHref>
        <Box
          fontWeight="extrabold"
          fontSize={["2xl"]}
          color="rgba(33, 68, 84, 1)"
        >
          CryExo
        </Box>
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
                <Box>
                  {amount
                    ? `${Number(Balance?.formatted) + amount} ${
                        Balance?.symbol
                      }`
                    : `${Balance?.formatted} ${Balance?.symbol}`}
                </Box>
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
                    bg="rgba(0, 233, 223, 1)"
                  />
                </MenuButton>
                <MenuList borderRadius="8px">
                  <MenuItem fontSize="md" onClick={() => disconnect()}>
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
              bg="rgba(0, 233, 223, 1)"
            />
            <ConnectorModal isModalOpen={isOpen} onModalClose={onClose} />
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

export default NavigationBar;
