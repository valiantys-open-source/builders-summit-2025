import { WebTriggerRequest } from "@forge/api";
import Resolver from "@forge/resolver";
import { kvs } from "@forge/kvs";

const automationWebhookUrl = "paste-url-here";
const automationWebhookSecret = "paste-secret-here";

export async function saveRovoResponse(event: WebTriggerRequest) {
  try {
    const body = JSON.parse(event.body);

    await kvs.set(body.requestId, body.response);
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error,
      }),
    };
  }

  return {
    statusCode: 200,
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
