const config = require('../config.json');
const process = require('process');


module.exports = {
	name: 'reboot',
	execute(msg,args,distube,client) {
      msg.reply("Imi dau restart smr mama");
      /*
      client.destroy();
      client.login(config.TOKEN);
      console.log(config.TOKEN);
      */
      process.exit();
	},
};

