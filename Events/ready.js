module.exports = async (client) => {
  
  console.log(`---------------------
Application is ready! 
Name: ${client.user.tag}
Server: ${client.guilds.cache.size}
Members: ${client.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)}
---------------------`);
  
  // Custom Bot Presence Status

  client.user.setPresence({
    status: "dnd",  // You can show online, idle, and dnd
    activity: {
        name: "CR TEAM PROJECT V1",  // The message shown
        type: "USE cr!help", // PLAYING, WATCHING, LISTENING, STREAMING,
    }
});
}
