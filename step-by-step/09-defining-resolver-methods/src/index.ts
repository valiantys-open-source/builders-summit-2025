import { WebTriggerContext, WebTriggerRequest } from "@forge/api";
import Resolver from "@forge/resolver";

const automationWebhookUrl = "paste-url-here";
const automationWebhookSecret = "paste-secret-here";

export function saveRovoResponse(event: WebTriggerRequest, context: WebTriggerContext) {
  console.log(event, context);

  return {
    hello: "world",
  };
}

const resolver = new Resolver();

resolver.define("send-message-to-rovo", async ({ payload }) => {
  await fetch(automationWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Automation-Webhook-Token": automationWebhookSecret,
    },
    body: JSON.stringify(payload),
  });

  return {
    message: "Message sent to Rovo",
  };
});

export const resolvers = resolver.getDefinitions();
