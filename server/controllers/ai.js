import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import dotenv from 'dotenv';

dotenv.config();


const OPENAI_KEY = process.env.OPENAI_KEY;
const llm = new OpenAI({
    openAIApiKey: OPENAI_KEY,
    engine: "gpt-3.5-turbo",
    temperature: 0.7,
});

// here we have to brew description with langchain

async function getMeDescriptionLangchain(title) {

    const prompt = PromptTemplate.fromTemplate("write a youtube video description on the title with emojies and in para form: {title}?");

    const chain = new LLMChain({
        llm,
        prompt
    });
    const result = await chain.run(title);
    return result

}



const generateBoth = async (req, res) => {
    // verify the user
    if (req.params.id !== req.user._id) {

        const { title } = req.body;
        const desc = await getMeDescriptionLangchain(title);
        const tags = await generateTags(title);

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
    const { desc } = req.body;
    console.log(desc);
    return res.status(200).json({
        success: true,
        desc,
    })
}

export {
    generateBoth,
    generateTags,
    generateDesc,
}
