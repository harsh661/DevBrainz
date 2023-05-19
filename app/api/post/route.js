import Prompt from "@models/content"
import { connectDB } from "@utils/db"

export const GET = async (req) => {
    try {
        await connectDB()

        const posts = await Prompt.find({}).populate('creator').sort({'createdAt': -1})

        return new Response(JSON.stringify(posts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch posts", {status: 500})
    }
}