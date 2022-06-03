---
id: gtr-commands
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


## Owner only Commands

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

## General use Commands

This command only can be executed by every member.

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

### `./scales/levellings.py` - Levelling Related scales

This scales is an interface for managing users Rank.

#### `/rank` - Rank Commands

Know your or someone Rank.

To use it, type _slash commands_``/rank member: member (optional)`

e.g. `/rank` or `/rank member: @GNZTMPZ#0001`

#### `/give-xp` - Give XP Commands

:::caution
Requires `operator` role.
:::

Adding XP to Tagged Members.

To use it, type _slash commands_``/givexp member: member amount: amount`

e.g. `/givexp member: @GNZTMPZ#0001 amount: 50`

#### `/levels` - Leaderboard Commands

Rankings for most messages sent.

To use it, type _slash commands_`/levels`

#### `/remove-xp` - Remove XP Commands

:::caution
Requires `operator` role.
:::

Remove some XP from Tagged Members.

To use it, type _slash commands_`/removexp member: member amount: amount`

e.g. `/removexp member: @GNZTMPZ#0001 amount: 50`

### `./scales/tools.py` - Tools scales

This scales contains some useful tools, more info below..

#### `/serverinfo` - Server Info Commands

See this server info.

To use it, type _slash commands_`/serverinfo`

#### `/ping` - Ping Commands

See the bots latency.

To use it, type _slash commands_`/ping`
