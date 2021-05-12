const { Client, Message, MessageEmbed } = require('discord.js');
const colour = require('cdcolours');

/**
 * A function to help an embed of a command
 * @param {Client} client - Your Discord Client
 * @param {Message} message - The Discord Message
 * @param {string} input - The commands you are looking for
 * @param {string} prefix - The bots prefix
 * @returns {Message} Discord Message
 * @example CustomHelp(Client, Message, "help", ".")
 */

function customHelp(client, message, input, prefix) {
    if (!client || !(client instanceof Client)) {
        return console.log(colour('[Lixun] => There is not an instance or correct instance of a Discord Client'), { textColour: 'red' })
    };

    if (!message || !(message instanceof Message)) {
        return console.log(colour('[Lixun] => There is not an instance or correct instance of a Discord Message'), { textColour: 'red' })
    };

    if (!prefix || typeof prefix !== 'string') {
        return console.log(colour('[Lixun] => There is not an instance of a prefix or the prefix is not a string'), { textColour: 'red'})
    };

    if(!client.commands) {
        return console.log(colour('[Lixun] => I cannot find your commands using \"client.commands\"'))
    };

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()))

    if (!cmd) {
        return message.channel.send("", {
            embed: new MessageEmbed()
            .setColor("RED")
            .setDescription(`No information found for \`${input.toLowerCase()}\``)
            .setFooter(
                `Commands: ${client.commands.size || 'Unknown'} | Prefix: ${prefix}`,
                message.author.displayAvatarURL({ dynamic: true })
            )
        })
    }

    let info = `\`Command Name\` - \`${cmd.name || 'None'}\`\n`;

    if (cmd.aliases) {
        info += `\`Aliases\` - \`${cmd.aliases.map((a) => `\`${a}\``).join(" | ")}\n`;
    }

    info += 
    `\`Description\` - \`${cmd.description || 'No Description.'}\`
    
    \`Category\` - \` ${cmd.category || 'No category'}

    \`Usage\` - \`${prefix + cmd.usage || prefix + cmd.name}
    \`Usage Syntax\` - \`<> = required, [] = options\`
    `;

    return message.channel.send("", {
        embed: new MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(info)
        .setFooter(
            `Commands: ${client.commands.size || 'Unknown'} | Prefix: ${prefix}`,
            message.author.displayAvatarURL({ dynamic: true })
        )
    });
}

module.exports = customHelp