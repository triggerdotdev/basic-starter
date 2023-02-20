import { Trigger, customEvent } from "@trigger.dev/sdk";
import { z } from "zod";

new Trigger({
  // Give your Trigger a stable ID
  id: "basic-starter",
  name: "Basic Starter",
  // Trigger on a custom event, see https://docs.trigger.dev/triggers/custom-events
  on: customEvent({
    name: "basic.starter",
    // Use zod to verify event payload. See https://docs.trigger.dev/guides/zod
    schema: z.object({ id: z.string() }),
  }),
  // The run functions gets called once per "basic.starter" event
  async run(event, ctx) {
    // Call external services, add delays, and more here.
    await ctx.logger.info("Hello world from inside trigger.dev");

    // Returned data will become the run "output" and is optional
    return event;
  },
}).listen();
