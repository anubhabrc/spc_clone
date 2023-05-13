import React from "react";
import "./Sidebar.css";
import { RiCalendarEventFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillCreditCard, AiOutlineEye } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { TbMathGreater } from "react-icons/tb";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { AiFillUnlock } from "react-icons/ai";
import { Box, Text, Divider } from "@chakra-ui/react";

function Sidebar() {
  return (
    <div style={{}}>
      <Box p="5.725%">
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          borderRadius="3px"
          className="tabs"
        >
          <RiCalendarEventFill />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Calender
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          className="tabs"
        >
          <BsPeopleFill />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Clients
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          className="tabs"
        >
          <AiFillCreditCard />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Billing
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          className="tabs"
        >
          <BsShieldFillCheck />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Insurance
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          className="tabs"
        >
          <IoStatsChartSharp />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Analytics
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          className="tabs"
        >
          <AiOutlineUnorderedList />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Account Activity
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          className="tabs"
        >
          <BsFillBellFill />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Reminders
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          gap="0.5rem"
          color="#707070"
          p="0.25rem"
          className="tabs"
        >
          <IoSettingsSharp />
          <Text fontWeight="400" fontSize="0.9.25rem">
            Settings
          </Text>
        </Box>
        <Divider orientation="horizontal" mt="0.75rem" />
      </Box>
      <Box
        p="5.25%"
        display="flex"
        flexDirection="column"
        h="50vh"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
          w="100%"
          justifyContent="space-around"
          color="GrayText"
          cursor="pointer"
        >
          <AiOutlineEye fontSize="0.8rem" />
          <Text fontSize="0.9rem">Recently Viewed</Text>
          <TbMathGreater fontSize="0.8rem" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="0.75rem"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            alignItems="center"
            w="100%"
            gap="0.5rem"
            border="1px solid lightgrey"
            borderRadius="3px"
            padding="5%"
            cursor="pointer"
          >
            <IoPhonePortraitSharp color="black" fontSize="1.5rem" />
            <Text color="GrayText" fontSize="0.9rem">
              Download free app
            </Text>
          </Box>
          <Box
            color="GrayText"
            display="flex"
            alignItems="center"
            pl="1rem"
            w="100%"
            gap="0.5rem"
            cursor="pointer"
          >
            <AiFillUnlock />
            <Text fontWeight="600" fontSize="0.9rem">
              Privacy Off
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Sidebar;
