import axios from "axios" 
    
export async function getNumberOfEmojis() {
    try {
        const { data }  = await axios.get('https://api.github.com/emojis')
        return Object.keys(data).length 
    } catch(e) {
        return 0
    }
}
