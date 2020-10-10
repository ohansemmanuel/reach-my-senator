import React, { useState, useEffect } from "react";
import { Stack, Select, Box, Badge, Flex, Image, Text } from "@chakra-ui/core";
import { Mailto } from "./Mailto";
import { EmbeddedTweets } from "./EmbeddedTweets";
import { generalSenatorEmails } from "./generalSenatorEmails";
import { Footer } from "./Footer";
import { message } from "./emailMsg";
import { getSenatorInfo } from "./getSenatorInfo";
import { states } from "./statesNG";
import "./App.css";

function App() {
  const [statesValue, setStatesValue] = useState("");
  const [bcc, setBcc] = useState("");
  const [senatorNames, setSenatorNames] = useState("");

  const handleSelect = (evt) => {
    setStatesValue(evt.target.value);
  };

  useEffect(() => {
    if (!statesValue) return;
    setBcc(getSenatorInfo("state", statesValue, "email"));
    setSenatorNames(getSenatorInfo("state", statesValue, "name"));
  }, [statesValue]);

  return (
    <div className="App">
      <div className="App-main">
        <Flex justify="center">
          <Image
            src="https://i.imgur.com/OxLz6O4.png"
            size="200px"
            rounded="full"
          />
        </Flex>
        <Box>
          <Text fontSize="lg" textAlign="center" mb={2}>
            Email all senators in your constituent
          </Text>
          <Flex justify="center" mb={8} maxW="100%">
            <Badge variantColor="blue" mx={1}>
              #ENDSARS
            </Badge>
            <Badge variantColor="blue" mx={1}>
              #ENDSARSNOW
            </Badge>
            <Badge variantColor="blue" mx={1} d={["none", "inline-block"]}>
              #EndSARSProtest
            </Badge>
            <Badge variantColor="blue" mx={1} d={["none", "inline-block"]}>
              #EndPoliceBrutality
            </Badge>
          </Flex>
        </Box>
        <Box>
          <Select
            placeholder="Select your state"
            value={statesValue}
            onChange={handleSelect}
          >
            {states.map((val, i) => (
              <option value={val} key={i}>
                {val}
              </option>
            ))}
          </Select>
        </Box>
        <Box my={4}>
          <Flex justify="center">
            <Stack p={2} d={["none", "flex"]}>
              {senatorNames.split(",").map((v, i) => (
                <Badge variant="outline" variantColor="green" key={i}>
                  {v}
                </Badge>
              ))}
            </Stack>
            <Stack p={2}>
              {bcc.split(",").map((v, i) => (
                <Badge variant="solid" variantColor="green" key={i}>
                  {v}
                </Badge>
              ))}
            </Stack>
          </Flex>
        </Box>

        <Box
          m={2}
          p={3}
          bg="blue.500"
          fontSize="md"
          rounded="lg"
          textAlign={["left", "center"]}
        >
          <Mailto
            email={generalSenatorEmails}
            subject="END SARS"
            body={message}
            bcc={bcc}
          >
            Send your senators an email
          </Mailto>
        </Box>
      </div>
      {/* Tweets*/}
      <EmbeddedTweets />
      <Footer />
    </div>
  );
}

export default App;
