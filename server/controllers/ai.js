import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import dotenv from 'dotenv';

dotenv.config();




async function brewDesc(data) {
    const OPENAI_KEY = process.env.OPENAI_KEY;
    const llm = new OpenAI({
        openAIApiKey: OPENAI_KEY,
        temperature: 0.7,
    }, {
        engine: "gpt-3.5-turbo",

    });

    console.log("im in brewDesc")

    const p = brewprompt('desc', data);
    console.log(p)
    const prompt = PromptTemplate.fromTemplate(p);

    // const formattedPrompt = await prompt.format({
    //     channelName: data.channelName,
    //     summary: data.summary,
    //     callToAction: data.callToAction,
    //     tags: data.tags,
    //     additionalAnnouncements: data.additionalAnnouncements,
    //     channelDescription: data.channelDescription,
    //     emotionalTone: data.emotionalTone,
    //     emojiesUsage: data.emojiesUsage,
    //     title: "{title}"
    // });

    // console.log(formattedPrompt)

    const chain = new LLMChain({
        llm,
        prompt
    })

    const title = data.title

    const result = await chain.run(title);

    return result;
}



const generateBoth = async (req, res) => {
    // verify the user
    console.log(req.params.id);
    console.log(req.user._id);
    if (req.params.id !== req.user._id) {

        console.log(req.body);

        console.log(title, desc);
        return res.status(200).json({
            success: true,
            title,
            desc,
        })
    }
    else {
        // you must create or login to your account to generate tags and description
        return res.status(403).json({
            success: false,
            message: 'You must create or login to your account to generate tags and description',
        })
    }
}

const generateTags = async (req, res) => {
    const { title } = req.body;
    console.log(title);
    return res.status(200).json({
        success: true,
        title,
    })
}

const generateDesc = async (req, res) => {

    if (req.body.id === req.user._id) {
        const data = req.body;
        const desc = await brewDesc(data);
        console.log("This was data");
        console.log(data);
        console.log("This was desc");
        console.log(desc)

        return res.status(200).json({
            success: true,
            desc,
        })

    } else {
        return res.status(403).json({
            success: false,
            message: 'You must create or login to your account to generate tags and description',
        })
    }
}

function brewprompt(name, data) {

    if (name === 'desc') {

        return `Generate an enticing YouTube video description for: {title}  on '${data.channelName}'. Make it engaging and include the following elements:\n\n🔥 **Introduction**:\nWelcome to ${data.channelName}! Get ready for an epic adventure as we delve into ${data.summary}.\n\n🌟 **Paragraph 1**:\nIn this captivating video, we'll uncover ${data.summary}. You won't believe the ${data.callToAction}.\n\n🚀 **Paragraph 2**:\nJoin us as we explore ${data.tags} that will ${data.additionalAnnouncements}. We're taking you on a journey to ${data.channelDescription}.\n\n💥 **Paragraph 3**:\nBut wait, there's more! We've got some ${data.emotionalTone} insights and ${data.emojiesUsage}. Plus, stay tuned for some incredible ${data.callToAction}!\n\n📢 **Conclusion**:\nDon't miss out on this one-of-a-kind experience! Hit that subscribe button, turn on notifications, and give us a thumbs up if you're excited to join us on this ${data.summary} adventure. Share this video with your friends and let's make '${data.channelName}' the ultimate destination for ${data.tags}.\n\n🔗 **Links**:\n📌 Check out our previous video: [link to previous video]\n🔔 Subscribe for more amazing content: [subscribe link]\n📸 Follow us on Instagram for behind-the-scenes: [Instagram link]\n\nThanks for being a part of our community! Stay tuned and get ready 🎥✨`
    }

}

export {
    generateBoth,
    generateTags,
    generateDesc,
}