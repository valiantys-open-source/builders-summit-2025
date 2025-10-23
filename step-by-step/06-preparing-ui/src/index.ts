import { WebTriggerContext, WebTriggerRequest } from "@forge/api";
import Resolver from "@forge/resolver";

export function saveRovoResponse(event: WebTriggerRequest, context: WebTriggerContext) {
  console.log(event, context);

  return {
    hello: "world",
  };
}

const resolver = new Resolver();

export const resolvers = resolver.getDefinitions();