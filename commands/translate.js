const translate = require('@vitalets/google-translate-api');

module.exports = {
	name: 'g',
	execute(msg ,args) {
        var resx = args.slice(2,).toString().replace(/,/gi, " ");
        translate(resx, {from:args[0] , to: args[1]}).then(res => {
            msg.reply(res.text);
        }).catch(err => {
            console.error(err);
        });
	}
};