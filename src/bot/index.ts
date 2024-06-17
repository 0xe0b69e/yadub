import { Client, GatewayIntentBits, Partials } from "discord.js";

const client: Client = new Client( {
  intents:  [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [
    Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember,
  ],
} );

client.login( process.env.TOKEN ).then( (): void => {} );
client.on( "error", console.error );
client.on( "warn", console.warn );

export default client;