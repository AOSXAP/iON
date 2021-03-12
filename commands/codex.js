const vm = require('vm');


module.exports = {
	name: 'code',
	execute(msg,args) {
		let context = {
    require,
    console: {
        log: (...argsx) => {
            msg.reply(...argsx);
        }
    }
  };
  vm.createContext(context); 
    const code = args.join(" ");
    var resx = code.replace(/```|js/gi, function (x) {
      return "";
  });
    msg.reply(vm.runInContext(resx , context,{timeout:1000}));
	},
};

