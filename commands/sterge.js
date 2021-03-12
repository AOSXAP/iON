module.exports = {
	name: 'sterge',
	execute(msg ,args) {
        msg.channel.bulkDelete(args.join(" ")).then(() => {
            msg.channel.send(`Am sters ${args.join(" ")} de mesaje!`).then(msgx => msgx.delete(3000));
        });
	}
};