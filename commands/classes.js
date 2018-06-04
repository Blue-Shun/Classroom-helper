exports.run = (client, message, args) => {
    message.author.send({embed: {
	color: 15215,
        author: {
          name: "Classroom Helper",
          icon_url: client.user.avatarURL
        },
        description: "__**Classes:**__\n please see <#449681498715455527>",
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username} | Classroom Helper`
        }
      }
    });
}
