const fs = require('fs');let child_process , { spawnSync,execFile,exec } = require('child_process'); 
const path = require('path');
module.exports = {
	name: 'c',
   execute(msg,args) {
    const code = args.join(" ");var resx = code.replace(/```|js/gi, function (x) {
      return "";
  });

    //let inp = resx.indexOf("input");let str1 = resx.substring(0,inp);
    //let str2 = resx.substring(inp+5);
    //console.log(str2.trim());

    fs.writeFileSync('child.cpp',resx);  
    spawnSync('g++', ['child.cpp', '-o', 'child.exe']);

    exec('./child.exe', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      msg.reply(`stdout: ${stdout}`);
      msg.reply(`stderr: ${stderr}`);
    });

	}
};

