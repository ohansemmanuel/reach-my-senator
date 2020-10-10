import React from "react";

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
