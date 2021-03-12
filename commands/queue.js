const Distube = require("distube");

module.exports = {
  name: "queue",
  execute(msg, args, distube) {
    try {
      let queue = distube.getQueue(msg);
      msg.channel.send(
        "Queue:\n" +
          queue.songs
            .map(
              (song, id) =>
                `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            )
            .slice(0, 10)
            .join("\n")
      );
    } catch (error) {
      console.log(error);
    }
  },
};
