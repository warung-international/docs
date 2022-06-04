---
id: id-commands
title: Commands
sidebar_position: 1
tags:
  - commands
  - help
---

Let's take a deep dive to each commands on Peradaban.

:::tip
- Bot's prefix is `!` and mentionable (slash commands supported)
:::

## Tags Commands

This command can be executed by every member. (some commands are limited to administrators and also slash commands only!)

### Use Tags commands

allow's me to recall tags.

To use it, type `/t use tagname: [tag name]`

e.g. `/t use ynkts`

### Create Tags commands

allow's me to store tags.

To use it, type `/t create tagname: [tag name] content: [string | optional] attachments: [file | optional]`

e.g. `/t create ynkts ya ndak tau kok tanya saya [file attached]`

### Edit Tags commands

allow's me to edit tags that you own.

To use it, type `/t edit tagname: [tag name] content: [string | optional] attachments: [file | optional]`

e.g. `/t edit ynkts ya ndak tau kok tanya saya [file attached]`

### Delete Tags commands

allow's me to delete tags that you own.

To use it, type `/t delete tagname: [tag name]`

e.g. `/t delete ynkts`

### Moderator Delete Tags commands

:::caution
Requires `MANAGE_MESSAGES` permissions.
:::

allow's me to delete any tag.

To use it, type `/t mod-delete tagname: [tag name]`

e.g. `/t mod-delete ynkts`

### Show Tags List commands

allow's me to see all tags for this server.

To use it, type `/t list`

e.g. `/t list`

### Tags Info commands

allow's me to see information about a tag.

To use it, type `/t info tagname: [tag name]`

e.g. `/t info ynkts`

## Tool Commands

This command can be executed by every member.

### Avatar commands

<details>
  <summary>💡 Context menu available</summary>
To use it, Left click at target user -> Apps -> Avatar
</details>

See your/other people avatar.

To use it, type `[prefix]av [@member]` or `/avatar member: [@member]`

e.g. `/avatar @mclemie#0001`

### Guild Avatar commands

<details>
  <summary>💡 Context menu available</summary>
To use it, Left click at target user -> Apps -> Guild Avatar
</details>

See your/other people guild avatar.

To use it, type `[prefix]gav [@member]` or `/guild-avatar member: [@member]`

e.g. `/avatar @mclemie#0001`

### User Information commands

<details>
  <summary>💡 Context menu available</summary>
To use it, Left click at target user -> Apps -> User Info
</details>

Get information about a member.

To use it, type `[prefix]ui [@member]` or `/user-info member: [@member]`

e.g. `/user-info @mclemie#0001`

### Urban Dictionary commands

Search for a term on the Urban Dictionary.

To use it, type `[prefix]urban [query]` or `/urban query: [query]`

e.g. `/urban yntkts`

### Konesyntees Text to Voice Synthesizer commands

Use superior Estonian technology to express your feelings like you've never before!

To use it, type `[prefix]konesyntees [input]` or `/konesyntees input: [input]`

e.g. `/konesyntees ya ndak tau kok tanya saya`

### Uptime commands

Get information about the server.

To use it, type `[prefix]si` or `/server-info`

e.g. `/server-info`

### Uptime commands

Shows you for how long has the bot been online.

To use it, type `[prefix]uptime` or `/uptime`

e.g. `/uptime`

### Ping commands

Check the bot's latency.

To use it, type `[prefix]ping` or `/ping`

e.g. `/ping`

## Levelling Commands

This command can be executed by every member. (some commands are limited to moderators)

### Rank Commands

Get your rank or another member's rank

To use it, type `[prefix]rank [@member]` or `/rank member: [@member]`

e.g. `/rank @mclemie#0001`

### Levels/Leaderboard commands

Get a link to the server's leaderboard.

To use it, type `[prefix]levels` or `/levels`

e.g. `/levels`

### Give XP Commands

:::caution
Requires `MANAGE_MESSAGES` permissions.
:::

Give XP to a member.

To use it, type `[prefix]givexp [@member] [amount]` or `/give-xp member: [@member] amount: [amount]`

e.g. `/give-xp @mclemie#0001 50`

### Remove XP Commands

:::caution
Requires `MANAGE_MESSAGES` permissions.
:::

Remove XP from a member

To use it, type `[prefix]removexp [@member] [amount]` or `/remove-xp member: [@member] amount: [amount]`

e.g. `/remove-xp @mclemie#0001 50`

## Moderation Commands

This command only can be executed by moderators and admins. (Slash Commands only!)

### Slowmode Commands

:::caution
Requires `MANAGE_MESSAGES` permissions.
:::

Enable/Disable slowmode in a channel.

To use it, type `/slowmode on timeout: [time in seconds]`

e.g. `/slowmode on 5`

To disable it, type `/slowmode off`


### Clear/Prune Commands

:::caution
Requires `MANAGE_MESSAGES` permissions.
:::

Delete a channel's messages.

To use it, type `/clear amount: [amount of messages]`

e.g. `/clear 5`

### Ban Commands

:::caution
Requires `BAN_MEMBERS` permissions.
:::

Ban a member from the server.

To use it, type `/ban member: [@member] delete_message_days: [amount of messages] reason: [optional]`

e.g. `/ban @mclemie#0001 5 server snoodling`

### Unban Commands

:::caution
Requires `ADMINISTRATOR` permissions.
:::

Unban a member from the server.

To use it, type `/unban member: [user id] reason: [optional]`

e.g. `/unban @mclemie#0001 false alarm`

### Kick Commands

:::caution
Requires `KICK_MEMBERS` permissions.
:::

Kick a member from the server.

To use it, type `/kick member: [@member] reason: [optional]`

e.g. `/kick @mclemie#0001 server snoodling`

### Mute Commands

:::caution
Requires `MODERATE_MEMBERS` permissions.
:::

Mute/Unmute a member from the server.

To use it, type `/mute on member: [@member] duration: [time in seconds] reason: [optional]`

e.g. `/mute on @mclemie#0001 5 server snoodling`

To disable it, type `/mute off member: [@member] reason: [optional]`

e.g. `/mute off @mclemie#0001 false alarm`

## Bot Owner only Commands

This command only can be executed by the owner of the bot, also.. this commands are not available in slash commands.

### Load Extension Commands

Load a extensions.

To use it, type `[prefix]load [the extension name]`

e.g. `!load help`

### Unload Extension Commands

Unload a extensions.

To use it, type `[prefix]unload [the extension name]`

e.g. `!unload help`

### Reload Extension Commands

Reload a extensions.

To use it, type `[prefix]reload [the extension name]`

e.g. `!reload help`

### Reboot Commands

Reboot the bot.

To use it, type `[prefix]reboot`

e.g. `!reboot`

### Shutdown Commands

Shutdown the bot.

To use it, type `[prefix]shutdown`

e.g. `!shutdown`
