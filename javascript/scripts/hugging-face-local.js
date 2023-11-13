import { HuggingFaceInference } from "langchain/llms/hf";
import {} from 'langchain/llms/'
import { DynamicTool } from 'langchain/tools';
import { config } from 'dotenv';

config();

const model = new HuggingFaceInference({
  model: "openchat/openchat_3.5",
  apiKey: process.env.HUGGINGFACEHUB_API_KEY, // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
  temperature: 0.9
});

const res = await model.call("What is the airspeed velocity of an unladen swallow?");
console.log({ res });