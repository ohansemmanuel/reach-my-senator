import React, { useState, useEffect } from "react";
import { Stack, Box, Select, Badge, Flex, Image, Text } from "@chakra-ui/core";
import TweetEmbed from "react-tweet-embed";
import { getSenatorInfo, states, shuffle } from "./utils";
import Footer from "./Footer";
import "./App.css";

const str = `
Dear Senator, 

I am a concerned citizen of your constituent, and I'll like to express my
displeasure about SARS. The members of this squad who are supposed to
protect us against armed robbery are killing, extorting and harassing us
everyday. We are scared to move freely and we need your help. I urge you,
distinguished, to use your office to protect the lives of Nigerian youth and
the future of Nigeria. We are counting on you to do the right thing. We are
counting on you to help us #ENDSARS #ENDPOLICEBRUTALITY.

Thanks, Senator!
`;

const defaultEmails = "info@nass.gov.ng, office@ngspeaker.org";

export const Mailto = ({ email, subject, body, children, bcc }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}&bcc=${bcc}`}
      style={{
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
            <Stack p={2} d={["none", "block"]}>
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
          <Mailto email={defaultEmails} subject="END SARS" body={str} bcc={bcc}>
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

const defaultTweetIds = [
  "1314834066471112704",
  "1314852223667580928",
  "1314481303388073985",
  "1314834066471112704",
  "1314742875628937216",
  "1314828495290347520",
  "1314687053918081026",
  "1314569903156887553",
  "1314837490113622018",
  "1314754799057997826",
  "1314700045300772864",
  "1314709249692512257",
  "1314535242582183937",
  "1314862548131475456",
  "1314862947861225472",
  "1314613017494138880",
  "1314438393825239040",
  "1314498136300228611",
  "1314549754823684097",
  "1314514847673929728",
  "1314602252963905538",
  "1314496753027239937",
  "1314440263054565376",
];
