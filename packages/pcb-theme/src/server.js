import { fetch } from "frontity";
import packageClient from "./client";
import { config } from "dotenv";

config();
const { USER_NAME, USER_PASS } = process.env;

export default {
  ...packageClient,
  actions: {
    theme: {
      ...packageClient.actions.theme,
      fetchToken:
        ({ state }) =>
        async () => {
          const response = await fetch(
            `${state.source.url}/wp-json/jwt-auth/v1/token`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: USER_NAME,
                password: USER_PASS,
              }),
            }
          );
          const body = await response.json();
          state.source.auth = `Bearer ${body.token}`;
        },
      beforeSSR:
        ({ actions }) =>
        async () => {
          await actions.theme.fetchToken();
          await actions.source.fetch("menus");
          await actions.source.fetch("media");
        },
    },
  },
};
