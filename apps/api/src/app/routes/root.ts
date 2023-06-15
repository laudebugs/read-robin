import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { OpenAIApi, Configuration, CreateCompletionRequest } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAIClient = new OpenAIApi(configuration);

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { message: 'Hello API' };
    }
  );

  fastify.get('/summary',

  async function (request: FastifyRequest, reply: FastifyReply) {

    const prompt = 'Give me a joke';

    const options: CreateCompletionRequest = {
      model: 'text-davinci-003',  // Specify the engine (e.g., text-davinci-003)
      max_tokens: 100,  // Specify the desired length of the summary
      temperature: 0.3,  // Adjust the temperature for diversity (optional)
      n: 1,  // Specify the number of responses to generate (optional)
      stop: null,  // Specify a stop sequence to end the generated text (optional)
      prompt
    };

    const response = await openAIClient.createCompletion(options)

    return response.data
  })
}


