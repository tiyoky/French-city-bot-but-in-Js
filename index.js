const Discord = require('discord.js');
const client = new Discord.Client();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Préfixe du bot
const prefix = '+';

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('message', (message) => {
  // Vérifie si le message commence par le préfixe et n'est pas envoyé par un autre bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Commande ban
  if (command === 'ban') {
    // Votre code pour la commande ban ici
    message.channel.send('Commande ban exécutée.');
  }

  // Commande kick
  if (command === 'kick') {
    // Votre code pour la commande kick ici
    message.channel.send('Commande kick exécutée.');
  }

  // Commande mute
  if (command === 'mute') {
    // Votre code pour la commande mute ici
    message.channel.send('Commande mute exécutée.');
  }

  // Commande purge
  if (command === 'purge') {
    // Votre code pour la commande purge ici
    message.channel.send('Commande purge exécutée.');
  }
});

// Remplacez 'YOUR_DISCORD_BOT_TOKEN' par le véritable jeton de votre bot
async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}
