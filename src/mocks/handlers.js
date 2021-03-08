import { rest } from "msw";

export const handlers = [
    rest.delete(
        "https://api.github.com/emojis",
        (req, res, ctx) => {
          return res(ctx.json({}));
        }
      )
]
