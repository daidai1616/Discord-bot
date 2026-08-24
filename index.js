const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

// Renderのスリープ防止用ミニWebサーバー
const app = express();
app.get('/', (req, res) => res.send('Bot is running!'));
app.listen(process.env.PORT || 3000);

// Discord Botの設定
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const targetKeywords = [
'かんちゃん', 
'かんちゃーん', 
'かんちゃ～ん', 
'菅叶和',
'菅叶和さん',
'かんかんな～',
'かんさん', 
'かんかんなー',
'菅叶和さ～ん',
'菅叶和さーん', 
'菅',
'菅ちゃん',
'かんな',
'みらぱ',
'かん',
'みらくらぱーく',
'かんかん',
'谷間',
'月音',
'こな',
];
const randomReplies = [ 
  '黙れ',
  '死ね',
  'かんちゃんは俺のな',
  'おれのかんちゃんな',
  'かんちゃんは俺の'
  '俺の',
　'おれの',
　'俺のかんちゃん',
　'おれのかんちゃん',
　'いやかんちゃんは俺のなんだが',
　'今日はお前のでいいよ',
　'かんちゃんとみかんちゃんは俺のな',
　'吟子ちゃんとかんちゃんは俺の',
　'かんちゃんのおっぱいは、おお！',
　'は？お前かんちゃんバカにすんなよ',
　'たしかに葉山風花のおっぱいはおおじゃないね',
　'かんちゃ～ん',
　'かんちゃんが谷間出してる～',
　'おっぱいおっきい～',
　'かんちゃんと三宅美羽は俺のな',
　'バンビセックス‼️',
];

client.once('ready', () => console.log(`Logged in as ${client.user.tag}!`));

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const hasKeyword = targetKeywords.some(keyword => message.content.includes(keyword));
  if (hasKeyword) {
    const randomIndex = Math.floor(Math.random() * randomReplies.length);
    message.channel.send(randomReplies[randomIndex]);
  }
});

client.login(process.env.DISCORD_TOKEN);
