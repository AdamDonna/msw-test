import { rest } from "msw"
import { getNumberOfEmojis } from './client'
import { server } from "mocks/server"

describe("client", () => {

    it("should handle network errors", async () => {
        server.use(
            rest.get(
              "https://api.github.com/emojis",
              (req, res, ctx) => {
                return res(ctx.status(500));
              }
            )
          );

        const count = await getNumberOfEmojis()
        expect(count).toBe(0)
    })

    it("should correctly count the number of emojis being returned", async () => {
        const count = await getNumberOfEmojis()
        expect(count).toBe(2)
    })
})
