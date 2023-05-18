import Prompt from "@models/content"
import { connectDB } from "@utils/db"

export const GET = async (req, {params}) => {
    try {
        await connectDB()

        const posts = await Prompt.find({creator: params.id}).populate('creator').sort({'created_at': -1})

        return new Response(JSON.stringify(posts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch posts", {status: 500})
    }
}