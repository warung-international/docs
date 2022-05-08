---
sidebar_position: 2
---

# Commands

Let's take a deep dive to each commands on Peradaban, and which file is contains these commands or whatnot.

All files are sorted in Alphabetical order (A-Z)

## `./main.py` - Main Executable File

This file is the heart of the bot itself. Contains Scale Regrow Commands, logging, and more. Here's some breakdown on that file :

#### `/regrow` - Reload Scale Commands

:::caution
Only `Bot Owner` can execute this commands!
:::

Regrow a Scale

To use it, type _slash commands_`/regrow scale: scale`
e.g. `/regrow scale: help commands`

## `./scales` folder

This folder contains most functions of the bot itself, here's some breakdown on that folder :

### `./scales/avatar.py` - Avatar Related Scales

This `scales` is Part of Avatar Commands. This.
Here's some listed customized commands.

#### `Avatar` - Avatar member app commands

:::info
This is Member App Commands, and it's unlisted from slash commands.
:::

See your/other people avatar.

To use it, Left click at target user

#### `Guild Avatar` - Guild Avatar member app commands

:::info
This is Member App Commands, and it's unlisted from slash commands.
:::

See your/other people guild avatar.

To use it, Left click at target user

### `./scales/wheelspin.py` - Wheelspin Scales

#### `!wheelspin` - Wheelspin commands

This command is like the wheel in GTA. You can use it every 3 hours.
Simply type the command and the bot will give you something.

To use it, type _slash commands_`/wheelspin`

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
