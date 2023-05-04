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
        async ({ state, actions }) => {
          await actions.theme.fetchToken();
          await actions.source.fetch("menus");
          await actions.source.fetch("media");
          await Promise.all(
            Object.keys({
              article: 6,
              news: 7,
              "case-study": 8,
            }).map((category) => actions.source.fetch(`/category/${category}`)),
            Object.keys({
              "paint-protection-film": 9,
              "window-tint": 10,
              "ceramic-coating": 11,
            }).map((tag) => actions.source.fetch(`/tag/${tag}`))
          );
          await actions.source.fetch("posts");
        },
    },
  },
};
