/* eslint-disable react/display-name */
import React from "react";
const next = require("next");

next.Link = ({ children, href }) => <a href={href}>{children}</a>;

module.exports = next;
