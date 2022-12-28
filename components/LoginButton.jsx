import { Button, Link } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
let PlatformLoginUris = {
  coinbase:
    "https://www.coinbase.com/oauth/authorize?response_type=code&client_id=67d5d8e07891940d55e746cad099d56591a6c571ac4d3fb2e3eebe8d69876c0a&redirect_uri=https://umaresso-obscure-broccoli-rw566gq4vx6cxv4q-3000.preview.app.github.dev/&state=SECURE_RANDOM&scope=wallet:accounts:read",
};

let client_Ids = {
  coinbase: "67d5d8e07891940d55e746cad099d56591a6c571ac4d3fb2e3eebe8d69876c0a",
};
const REDIRECT_URI = "https://umaresso-obscure-broccoli-rw566gq4vx6cxv4q-3000.preview.app.github.dev/";
const scopes = {
  coinbase: "user:read,wallet:read",
};

function LoginButton({ name }) {
  async function handleLogin() {
    axios.get("https://api.coinbase.com/oauth/authorize", {
        params: {
          response_type: "code",
          client_id: client_Ids[name],
          redirect_uri: REDIRECT_URI,
          scope: scopes[name],
          state: "CSRF_TOKEN",
        },
      })
      .then((response) => {
        console.log(response.data.authorize_url);
        window.location.href = authorize_url;
      });
  }

  return (
    <Button onClick={handleLogin} colorScheme={"blue"}>
      Login with {name}
    </Button>
  );
}

export default LoginButton;
