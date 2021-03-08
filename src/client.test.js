import { GithubClient } from './client'

describe("GithubClient", () => {

    it("should handle network errors", () => {
        const client = new GithubClient()
        const count = client.getNumberOfEmojis()
        expect(count).toBe(0)
    })

    it("should correctly count the number of emojis being returned", () => {
        const client = new GithubClient()
        const count = client.getNumberOfEmojis()
        expect(count).toBe(2)
    })
})
