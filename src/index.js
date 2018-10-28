import React from "react";
import { render } from "react-dom";
import App from "./components/App";

fetch(`https://api.github.com/users/dance2die/events/public`)
  .then(response => response.json())
  .then(events => {
    render(<App events={events} />, document.getElementById("root"));
  });
