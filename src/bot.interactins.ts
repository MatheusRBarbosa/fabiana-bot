import { Session } from './interactions/session.interaction';
import { Client } from 'discord.js';

export class BotInteractions {
    constructor(
        private readonly client: Client
    ){
        const sessions = new Session(this.client);
    }
}