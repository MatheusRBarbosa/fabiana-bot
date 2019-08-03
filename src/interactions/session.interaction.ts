import { Client, Message, User } from 'discord.js';

export class Session {

    constructor(
        private readonly client: Client
    ){
        this.start();
    }

    private start(){
        this.client.on('message', msg => {
            if(msg.content[0] === '#'){
                this.createGroup(msg);    
            }
        })
    }

    private createGroup(msg: Message){
        const message: string[] = msg.content.split(" ");
        const command: string = message[0];

        if (command === '#createGroup') {
            const groupName: string = message[1];
            console.log(groupName)
            msg.mentions.users.forEach((user: User, key: string) => {
                console.log(user.username)
            })
            msg.reply('WAAAAZZAAAAP');
        }
    }
}