import { WebTriggerContext, WebTriggerRequest } from "@forge/api";

export function saveRovoResponse(event: WebTriggerRequest, context: WebTriggerContext) {
  console.log(event, context);

  return {
    hello: "world",
  };
}
