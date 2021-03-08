import { rest } from "msw";

export const handlers = [
    rest.get(
        "https://api.github.com/emojis",
        (req, res, ctx) => {
          return res(ctx.json({
            key1: "value1",
            key2: "value2",
          }));
        }
      )
]
