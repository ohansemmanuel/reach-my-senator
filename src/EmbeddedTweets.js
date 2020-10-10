import React from "react";
import TweetEmbed from "react-tweet-embed";
import { Box, Flex } from "@chakra-ui/core";
import { shuffle } from "./utils";
import { defaultTweetIds } from "./defaultTweetIds";

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
