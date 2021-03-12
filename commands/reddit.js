const Reddit = require("@cxllm/reddit");
const fetch = require("node-fetch");

module.exports = {
    name: "r",
    async execute(msg,args) {
        const sub = args.join(" ");
        try {
            let imgx = await Reddit.random(sub);
            msg.reply(imgx.image);
        } catch { 
          fetch(`https://www.reddit.com/subreddits/search.json?q=${sub}&include_over_18=on`)
          .then(res => res.json())
          .then(async jsonx => 
            {
              try{
                  let imgx = await Reddit.random(jsonx.data.children[0].data.url.slice(0,-1));
                  msg.reply(imgx.image);
              }catch{
                msg.reply("Nu gasesc nica");
              }
        })
        }
    }}
