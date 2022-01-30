// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageContent = [
  `Hey there! You said **${context.params.event.content}**!`,
  '',
  `This is an example Autocode handler that responds to messages containing "hi", "hey", "hello", or "sup".`,
  ''
];

if (context.service.environment) {
  messageContent = messageContent.concat([
    `If you're the bot creator, you can modify this behavior by editing the Autocode project's code here:`,
    `https://autocode.com/p/${context.service.name}/${context.service.environment}/?filename=${encodeURIComponent('functions/' + context.name + '.js')}`
  ]);
} else {
  messageContent = messageContent.concat([
    `If you're the bot creator, you can modify this behavior by editing the Autocode project's code from your dashboard:`,
    `https://autocode.com/dashboard/`
  ]);
}

// Only respond to messages containing the word "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/\bhi\b|\bhey\b|\bhello\b|\bsup\b/i)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: messageContent.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
}
