import React, { useState, useEffect } from "react";
import { Stack, Box, Select, Badge, Flex, Image, Text } from "@chakra-ui/core";
import TweetEmbed from "react-tweet-embed";
import { getSenatorInfo, states, shuffle } from "./utils";
import { defaultTweetIds } from "./defaultTweetIds";
import { generalSenatorEmails } from "./generalSenatorEmails";
import { message } from "./emailMsg";
import Footer from "./Footer";
import "./App.css";

export const Mailto = ({ email, subject, body, children, bcc }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}&bcc=${bcc}`}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {children}
    </a>
  );
};

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
            <Box d={["none", "block"]}>
              <Badge variantColor="blue" mx={1}>
                #EndSARSProtest
              </Badge>
              <Badge variantColor="blue" mx={1}>
                #EndPoliceBrutality
              </Badge>
            </Box>
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
      <Flex
        direction={["column", "row"]}
        justify="center"
        my={10}
        width={"100%"}
      >
        {shuffle(defaultTweetIds)
          .slice(0, 4)
          .map((id, i) => (
            <Box px={3} key={i}>
              <TweetEmbed id={id} key={id} />
            </Box>
          ))}
      </Flex>
      <Footer />
    </div>
  );
}

export default App;
