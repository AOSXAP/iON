const {ore, links} = require('../data/exportx');

module.exports = {
	name: 'ora',
	  execute(msg,args,distube) {
		    let date = new Date();console.log( date.getHours()-6 , date.getDay()-1 );
        if( date.getHours()-6 > 6 || date.getDay()-1>4 || date.getDay()-1<0 )msg.channel.send(`Liber coae , du te acas!`);
        else{
        const mx = ore[date.getDay()-1][date.getHours()-6]; 
        msg.channel.send(`${mx} - ${links[0][mx]}`);
        }
	},
};

