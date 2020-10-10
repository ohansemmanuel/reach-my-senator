import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import TweetEmbed from "react-tweet-embed";
import { defaultTweetIds } from "./defaultTweetIds";
import { shuffle } from "./utils";

export const EmbeddedTweets = React.memo(() => (
  <Flex direction={["column", "row"]} justify="center" my={10} width={"100%"}>
    {shuffle(defaultTweetIds)
      .slice(0, 4)
      .map((id, i) => (
        <Box px={3} key={i}>
          <TweetEmbed id={id} key={id} />
        </Box>
      ))}
  </Flex>
));
