import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  Tooltip,
} from "@chakra-ui/react";
//import { Link, useNavigate } from "react-router-dom";
import {
  AddIcon,
  CalendarIcon,
  ChatIcon,
  Search2Icon,
  TimeIcon,
  LockIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import logo from "../../assets/spc_logo.png";
import relax from "../../assets/relax.jpg";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { SlGraph } from "react-icons/sl";
import "./Nav.css";

function Nav() {
  //const navigate = useNavigate();
  const [inputChange, setInputChange] = useState({
    color: "#0E5291",
    w: "180px",
    h: "32px",
  });
  const [bgChange, setBgChange] = useState({ bg: "#0E5291" });
  return (
    <Box
      backgroundColor="#1371C8"
      w="100%"
      display="flex"
      height="56px"
      position="relative"
      zIndex="9999999999"
    >
      <Box
        w="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="1.25rem"
        paddingRight="1.25rem"
      >
        <Box display="flex" alignItems="center">
          <Box marginRight="1rem">
            <Image
              src={logo}
              alt="Simple Practice"
              h="24px"
              w="166px"
              cursor="pointer"
            />
          </Box>
          <Box marginRight="1rem">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Search2Icon
                    color="white"
                    marginBottom="8px"
                    marginLeft="-5px"
                  />
                }
              />
              <Input
                focusBorderColor="white"
                placeholder="Search clients"
                fontSize="0.9rem"
                _placeholder={{
                  opacity: 0.5,
                  color: "lightgrey",
                  //fontsize: "0.5rem",
                }}
                onFocus={() => {
                  setInputChange({ color: "#fff", w: "400px", h: "32px" });
                }}
                onBlur={() => {
                  setInputChange({ color: "#0E5291", w: "180px", h: "32px" });
                }}
                bg={inputChange.color}
                height={inputChange.h}
                width={inputChange.w}
                borderRadius="3px"
                border="none"
              />
            </InputGroup>
          </Box>
          {/* <Box className="search-container">
            <form action="/search" method="get">
              <input
                className="search"
                id="searchleft"
                placeholder="Search clients"
              />
              <label className="button searchbutton" htmlFor="searchleft">
                <span className="mglass">&#9906;</span>
              </label>
            </form>
          </Box> */}
          <Tooltip
            hasArrow
            label="Monitor the financial performance of your practice"
            bg="gray.800"
            color="white"
            borderRadius="5px"
            padding="5px"
            openDelay={300}
          >
            <Box
              display="flex"
              alignItems="center"
              gap="0.3rem"
              cursor="pointer"
              borderRadius="4px"
              className="navbuttons"
            >
              <SlGraph color="#72D9AA" fontSize="1.5rem" />
              <Box display="flex" flexDirection="column">
                <Text
                  fontSize="0.625rem"
                  fontWeight="500"
                  color="white"
                  opacity="0.65"
                >
                  Apr income
                </Text>
                <Text
                  fontSize="0.75rem"
                  fontWeight="600"
                  color="white"
                  mt="-2px"
                >
                  $100.00
                </Text>
              </Box>
            </Box>
          </Tooltip>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="0.25rem"
        >
          <Menu isLazy>
            <MenuButton
              as={Button}
              variant="ghost"
              color="#fff"
              leftIcon={<AddIcon boxSize={3} />}
              fontSize="0.9rem"
              className="navbuttons"
            >
              Create
            </MenuButton>
            <MenuList>
              <MenuItem icon={<AddIcon />}>Create client</MenuItem>
              <MenuItem icon={<CalendarIcon />}>Schedule appointment</MenuItem>
              <MenuItem icon={<TimeIcon />}>Add availability</MenuItem>
            </MenuList>
          </Menu>
          {/* <Button leftIcon={<CalendarIcon />} color="white" variant="ghost">
            Requests
          </Button> */}
          <Popover>
            <PopoverTrigger>
              <Button
                leftIcon={<CalendarIcon boxSize={3.5} />}
                variant="ghost"
                color="#fff"
                fontSize="0.9rem"
                className="navbuttons"
              >
                Requests
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent padding="2rem">
                <PopoverArrow />
                <PopoverBody>
                  <Image src={relax} />
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    mb="0.75rem"
                    textAlign="center"
                  >
                    You’re all caught up!
                  </Text>
                  <Text textAlign="center">
                    Way to stay on top of your appointment requests. We’ll
                    notify you when you get a new one.
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          {/* <Button leftIcon={<ChatIcon />} color="white" variant="ghost">
            Messages
          </Button> */}
          <Popover>
            <PopoverTrigger>
              <Button
                leftIcon={
                  <ChatIcon
                    color="#fff"
                    style={{ color: "#fff" }}
                    boxSize={3.5}
                  />
                }
                variant="ghost"
                color="#0E5291"
                fontSize="0.9rem"
                background="none"
                className="navbuttons"
              >
                <Text style={{ color: "#fff" }}>Messages</Text>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent p="5">
                <PopoverArrow />
                <PopoverBody>
                  <Box display="flex" alignItems="center">
                    <Box
                      display="flex"
                      alignItems="center"
                      flex="90"
                      justifyContent="center"
                      gap="0.75rem"
                    >
                      <LockIcon boxSize={3.5} />
                      <Text fontWeight="500">Secure Messages</Text>
                    </Box>
                    <Box>
                      <EditIcon boxSize={3.5} />
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="center" mt="1.5rem">
                    <HiOutlineChatBubbleLeftRight
                      fontSize="4.5rem"
                      color="lightgrey"
                    />
                  </Box>
                  <Box display="flex" flexDirection="column" mb="7rem" p="5">
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      mb="0.75rem"
                      textAlign="center"
                      color="lightgray"
                      mt="1rem"
                    >
                      Welcome To Secure Messaging!
                    </Text>
                    <Text textAlign="center" color="lightgray">
                      You don't have any conversations yet.
                    </Text>
                    <Text textAlign="center" color="lightgray">
                      Start one using the icon in the top right corner.
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          {/* <Button bg="#FF5A34" color="#fff" size="sm">
            Activate plan
          </Button> */}
          <Box
            as="button"
            borderRadius="md"
            bg="#FF5A34"
            color="white"
            fontSize="0.9rem"
            fontWeight="bold"
            px={3}
            h={8}
            mr="0.5rem"
          >
            Activate plan
          </Box>
          <Box>
            <Avatar
              name="Anubhab RoyChowdhury"
              bg="#DE6953"
              size="sm"
              cursor="pointer"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
