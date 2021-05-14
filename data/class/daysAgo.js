const { Client, GuildMember, Message, MessageEmbed } = require('discord.js');
const moment = require('moment');

/**
 * A function to easily show how long someone joined the server
 * @param {GuildMember} user - The User To Find The Dayago Method For 
 * @param {Message} message - Your Discord Message
 * @return {Message} Discord Message
 * @example daysAgo(client, user)
 */

function daysAgo(user, message) { 

    if (!user || !(user instanceof GuildMember)) {
        throw new Error('[Recon] => There is not an instance or correct instance of a GuildMember')
    }

    if (!message || !(message instanceof Message)) {
        throw new Error('[Recon] => There is not an instance or correct instance of a Message')
    }

    if (!user.guild) {
        return message.channel.send("", {
            embed: new MessageEmbed()
            .setColor("RED")
            .setDescription(`User is not in the server`)
        })
    }

    let daysago = moment(user.joinedAt).format('LL LTS')

    return daysago + (daysago == 1 ? " day" : " days") + " ago";
}

module.exports = daysAgo;
