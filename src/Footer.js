import React from "react";
import { Text, Flex, Link } from "@chakra-ui/core";
import "./Footer.css";

const developers = ["OhansEmmanuel", "tejuafonja", "OgundipeOre"];

function Footer() {
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
    </div>
  );
}

export default Footer;
