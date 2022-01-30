// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageContent = [
  `Hi! You said **${context.params.event.content}**!`,
  '',
  `This is Covid Helper bot here, I respond to messages containing "hi", "hey", "hello", or "sup".`,
  ''
];

// Only respond to messages containing the word "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/\bhi\b|\bhey\b|\bhello\b|\bsup\b|\bboo\b/i)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: messageContent.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
} 

let _messageContent = [
  ` Hello, You are having covid related trouble, no worries I'm here to help!`,
  '',
  `This is Covid Helper bot here. Let's start with your symptoms `,
  ''
];

// Only respond to messages containing the word "covid", "corona"
if (context.params.event.content.match(/\bcovid\b|\bcorona\b|\bcough\b/i)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: _messageContent.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
} 


let symptoms = [
  ` Are you having any of these problems along with Fever, Cough, Runny nose **${context.params.event.content}**`,
  '',
  `This is Covid Helper bot here. Let's start with your symptoms `,
  ''
];

// Only respond to messages containing the word fever,cold,headache,breathing problems
if (context.params.event.content.match(/\bcovid\b|\bhighfever\b|\bfever\b|\bcold\b|\bcorona\b|\bcough\b/i)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: symptoms.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
} 


let confirm = [
  ` I think you have covid, Please visit the nearest hospital to get best treatment`,
  '',
  `This is Covid Helper bot here. Happy to help u.`,
  ''
];

// Only respond to messages containing the word fever,cold,headache,breathing problems
if (context.params.event.content.match(/\bI Have\b|\bYes\b|\bFever\b/i)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: confirm.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
} 

