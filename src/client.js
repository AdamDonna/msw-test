import axios from "axios" 

export class GithubClient {
    
    async getNumberOfEmojis() {
        try {
            const data = await axios.get('https://api.github.com/emojis')
            return Object.keys(obj).length 
        } catch(e) {
            console.error(e)
            return 0
        }
    }

}
