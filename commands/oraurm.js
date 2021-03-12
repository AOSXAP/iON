const {ore, links} = require('../data/exportx');

module.exports = {
	name: 'oraurm',
	execute(msg ,args) {
        var date = new Date(); var creds = [date.getHours(), date.getDay()];
        if(date.getHours()-5 > 6 || date.getDay()-1>4 || date.getDay()-1<0) {msg.channel.send(`Liber coae , du te acas!`)} 
        else {const mx = ore[creds[1]-1][creds[0]-5]; msg.channel.send(`${mx} - ${links[0][mx]}`);}
	}
};