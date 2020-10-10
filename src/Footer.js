import React from "react";
import { Text, Flex, Link } from "@chakra-ui/core";
import "./Footer.css";

const developers = ["tejuafonja", "OgundipeOre", "OhansEmmanuel"];

export const Footer = () => {
  return (
    <div className="Footer">
      <Text fontSize="sm" textAlign="center">
        This project was inspired by Silas'
        <a
          href="https://nigeriansenators.firebaseapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link "
        >
          {" "}
          Nigerian senators app &nbsp;
        </a>
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>{" "}
      </Text>
      <Text fontSize="xs" textAlign={"center"}>
        {" "}
        Made with love from:{" "}
      </Text>

      <Flex justify="center">
        {developers.map((dev, i) => (
          <Link
            href={`https://twitter.com/${dev}`}
            isExternal
            px={1}
            fontSize="xs"
            key={i}
          >
            {`@${dev}`}
          </Link>
        ))}
      </Flex>
      <Flex justify="center" mt={3}>
        <a
          class="github-button"
          href="https://github.com/ohansemmanuel/reach-my-senator"
          data-icon="octicon-star"
          aria-label="Star reach-my-senator on GitHub"
        >
          Github
        </a>
      </Flex>
    </div>
  );
};

export default Footer;
