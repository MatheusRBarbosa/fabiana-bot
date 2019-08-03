import * as Discord from 'discord.js';
import { BotInteractions } from './bot.interactins';

const auth = require('./config/auth.json');

async function bootstrap() {
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  const interactions = new BotInteractions(client);

  client.login(auth.token);
}

bootstrap();
