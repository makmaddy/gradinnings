import React from "react";
import {
  Box,
  Container,
  Text,
  Heading,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Checkbox,
  Radio,
  Textarea,
  IconButton,
  Link,
  Badge,
  Spinner,
  Alert,
  Tooltip,
  Modal,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  HStack,
  VStack,
  Image,
  Flex,
  Divider,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
// import logo from '../assets/logo.png'
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import banner from "../../public/images/hero section.png";
import arrow from "../../assets/icons/arrow.png";
import logo from "../../assets/logo inage.png";
// import MyButton from "./MyButton";

const Hero = () => {
  return (
    <div>
      <Box
        // width={"100vw"}
        // height={"75vh"}
        // display={"flex"}
        // justifyContent={"flex-start"}
        // alignItems={"center"}
        // position={"relative"}
        // backgroundImage={"./images/hero section.png"}
        // backgroundSize={"contain"}
        // fontFamily={"sans-serif"}
        // backgroundRepeat={"no-repeat"}
      >
        <Box
          width={"32vw"}
          height={"40%"}
          position={"absolute"}
          left={"14vw"}
          top={"17vh"}
          fontSize={"3rem"}
          fontWeight={"400"}
        >
          <Text color={"000"}>
            Start Your
            
            <span
              style={{
                fontWeight: "bold",
                color: "#0E2A46",
                // fontWeight: "500",
              }}
            >
              College
            </span>
          </Text>
          <Text>
            <span style={{ fontWeight: "bold", color: "#0E2A46" }}>
            
              Journey
            </span>
            with
          </Text>
          <Text fontWeight={"bold"} color={"#1D82BF"}>
            GRADinnings.
          </Text>

          <Box>
            <Text fontSize={"0.9rem"} color={"#fff"}>
            Unlock Potential, Achieve Success! Explore Tailored Programs, Connect with Mentors, Access Resources. Join a Supportive Community Where Dreams Come Alive. Transform Learning with Tools, Personalized Pathways. 
Start Today for a Brighter Future!"
            </Text>
            {/* <MyButton  buttonText={"Explore All Courses"} /> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
