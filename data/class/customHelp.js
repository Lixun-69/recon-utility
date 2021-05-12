const { Client, Message, MessageEmbed } = require('discord.js');

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
        throw new Error('[Lixun] => There is not an instance or correct instance of a Discord Client')
    };

    if (!message || !(message instanceof Message)) {
        throw new Error('[Lixun] => There is not an instance or correct instance of a Discord Message')
    };

    if (!prefix || typeof prefix !== 'string') {
        throw new Error('[Lixun] => There is not an instance of a prefix or the prefix is not a string')
    };

    if(!client.commands) {
        throw new Error('[Lixun] => I cannot find your commands using \"client.commands\"')
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
