import { connectDB } from "@utils/db"
import Prompt from "@models/content"

export const POST = async (req) => {
    const { userId, content, tag } = await req.json()

    try {
        await connectDB()
        const newPrompt = new Prompt({
            creator: userId,
            content,
            tag
        })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), { status: 201 })

    } catch (error) {
        console.log(error)
        return new Response("Something went wrong", { status: 500 })
    }
}