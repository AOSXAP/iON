module.exports = {
	name: 'stop',
	execute(msg,args,distube) {
		distube.stop(msg);
        msg.channel.send("Am tacut");
	},
};
