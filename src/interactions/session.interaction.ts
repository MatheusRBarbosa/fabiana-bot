import { Client } from "discord.js";

export class Session {

    constructor(
        private readonly client: Client
    ){
        this.createGroup();    
    }

    createGroup(){
        this.client.on('message', msg => {
            if (msg.content === 'ping') {
              msg.reply('WAAAAZZAAAAP');
            }
        });
    }
}