const ytsr = require('ytsr');
const Distube = require('distube');

module.exports = {
	name: 'play',
	async execute(msg,args,distube) {
		const filters1 = await ytsr.getFilters(args.join(" ")); const filter1 = filters1.get('Type').get('Video');
		const options = {limit: 1}; const searchResults = await ytsr(filter1.url, options);
		distube.play(msg, searchResults.items[0].url);
	},
};

