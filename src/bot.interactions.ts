import { Session } from './interactions/session.interaction';
import { Client } from 'discord.js';
const interactions = require('./interactions.json')

export class BotInteractions {
    constructor(
        private readonly client: Client
    ){
        this.help();
        const sessions = new Session(this.client);
    }

    private help(){
        this.client.on('message', msg => {
            if(msg.content[0] === '#'){
                if (msg.content === '#help') {
                    let t = '';
                    for(let i=0; i<interactions.lenght; i++){
                        t += interactions[i];
                    }
                    console.log(t);
                    msg.reply(t);
                }
            }
        })
    }
}