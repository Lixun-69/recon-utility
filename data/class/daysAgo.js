const { Client, GuildMember, Message, MessageEmbed } = require('discord.js');
const moment = require('moment');

/**
 * A function to easily show how long someone joined the server
 * @param {Client} client - Your Discord Client
 * @param {GuildMember} user - The User To Find The Dayago Method For 
 * @return {Message} Discord Message
 * @example daysAgo(client, user)
 */

function daysAgo(client, user) { 

    const message = Message

    if (!client || !(client instanceof Client)) { 
        throw new Error('[Recon] => There is not an instance or correct instance of a Discord Client')
    }

    if (!user || !(user instanceof GuildMember)) {
        throw new Error('[Recon] => There is not an instance or correct instance of a GuildMember')
    }

    if (!user || typeof user !== 'string') {
        throw new Error('[Recon] => There is not an instance of a user or user is not a string')
    }

    if (!user.guild) {
        return message.channel.send("", {
            embed: new MessageEmbed()
            .setColor("RED")
            .setDescription(`User is not in the server`)
        })
    }

    let daysago = moment(member.joinedAt).format('LL LTS')

    return message.channel.send("", {
        embed: new MessageEmbed()
        .setColor("BLACK")
        .setDescription(daysago)
    })
}