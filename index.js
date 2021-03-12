const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);

//Dependencies
const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const ytdl = require('ytdl-core');
const Distube = require('distube');

const distube = new Distube(client, {
	searchSongs: true,
	emitNewSongOnly: true
});

client.on('ready', () => {
	console.log('So sculat iON');
});

client.on('message', msg => {
	if (!msg.content.startsWith(config.prefix) || msg.author.id ==client.user.id) return;

	const args = msg.content
		.slice(config.prefix.length)
		.trim()
		.split(' ');
	const command = args.shift().toLowerCase();

	const commandFiles = fs
		.readdirSync('./commands')
		.filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
	}

	if (!client.commands.has(command)) {
		msg.reply('NU MAI SCRIE COMENZI INEXISTENTE BA RETARDATULE');
		return;
	}

	try {
		client.commands.get(command).execute(msg, args, distube,client);
	} catch (error) {
		console.error(error);
		msg.reply('Ba pula scrie comanda aia calumea.');
	}
});

distube.on('playSong', (message, queue, song) =>
		message.channel.send(
			`Piesa: \`${song.name}\` - \`${song.formattedDuration}\` Ceruta de: ${
				song.user
			}`
		)
	)
	.on('addSong', (message, queue, song) =>
		message.channel.send(
			`Piesa : ${song.name} - \`${
				song.formattedDuration
			}\` a fost adaugata la queue de ${song.user}`
		)
	)
	.on('error', (message, e) => {
		console.error(e);
		message.channel.send('Eroare: ' + e);
	});

client.login(config.TOKEN);
