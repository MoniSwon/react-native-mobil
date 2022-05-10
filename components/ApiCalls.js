import axios from "axios";

export async function getRandomColor() {
    const {data} = await axios.get("https://random-data-api.com/api/color/random_color?size=10")
    console.log(data)
    return data.hex_value
}