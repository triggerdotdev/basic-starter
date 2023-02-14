## ✨ Trigger.dev Basic Starter

<a href="https://render.com/deploy?repo=https://github.com/triggerdotdev/basic-starter">
  <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render">
</a>

This repo is a great starting point to deploy your [Trigger.dev](https://trigger.dev) triggers to Render.com, if you don't already have a Node.js server to host your triggers.

[Render.com](https://render.com) is a super-fast way to deploy webapps and servers (think of it like a modern Heroku)

Currently this repo only has a single (very simple) trigger:

```ts
import { Trigger, customEvent } from "@trigger.dev/sdk";
import { z } from "zod";

new Trigger({
  id: "basic-starter",
  name: "Basic Starter",
  on: customEvent({
    name: "basic.starter",
    schema: z.object({ id: z.string() }),
  }),
  async run(event, ctx) {
    await ctx.logger.info("Hello world from inside trigger.dev");

    return event;
  },
}).listen();
```

## Run locally

First, clone the repo and install dependencies:

```sh
git clone https://github.com/triggerdotdev/basic-starter.git
cd basic-starter
npm install
```

Then create a `.env` file with your development Trigger.dev API Key:

```sh
echo "TRIGGER_API_KEY=<APIKEY>" >> .env
```

And finally you are ready to run the process:

```sh
npm run dev
```

You should see a message like the following:

```
[trigger.dev]  ✨ Connected and listening for events [basic-starter]
```
