---
id: dev-intro
title: Introduction
sidebar_position: 1
tags:
  - introduction
  - development
---

All you need to know to "How to setup a environment for Testing/Contributing/Use this source code".

## Testing/Workflow

To run the app, you need:

- A Discord Bot, with `server member intent` and `presence intent`.. obviously.. [click here](https://discord.com/developers/applications)
- A Discord server to test - you can't use the Warung International Discord Server to do tests
- [Python version 3.10.0](https://www.python.org/downloads/release/python-3100/) or latest - no guarantees on older versions
- A MongoDB Server for levelling and warning system (mongodb atlas is preferred)
- A Good Code IDE, obviously.. I recommend you [Visual Studio Code](https://code.visualstudio.com)

If you don't own/admin a Discord server, creating one is simple, you can do it from the same menu you join discord servers from.

## Running with a database
If you want to develop features that require persisting data, spin up a MongoDB database. If you have Docker installed, this is as simple as running make mongodb which will start a MongoDB container with a user root that has no password.

Finally, the application requires some configuration. Copy the example.env to .env and modify it to use your token and various IDs. Depending on what you're working on, some values won't be necessary.