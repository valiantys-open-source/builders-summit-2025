# Step 9: Defining The Resolver Methods

Through this step, you will have setup Forge Resolvers methods. These methods are defined using the Resolvers function. The purpose of the resolver is to allow our front end chat-ui to be able to pass information back to our backend where we can handle some things more securely. For example, we don't want to expose our webhook url to our automation.

## Instructions

1. Go to the `src/chat-ui/src/components/ChatInterface.tsx` file.
2. In the `handleSendMesasge` function, use the `invoke` function to execute a function named `send-message-to-rovo` in the backend.
3. In this function, let's generate a requestId. We will keep it simple for this guide, but in production, you may want to improve this id generation.

```ts
const requestId = Date.now().toString();
```

4. Make sure to pass in the prompt from the user.

```ts
setMessages((prev) => [...prev, userMessage]);
setIsTyping(true);

const requestId = Date.now().toString();

await invoke("send-message-to-rovo", {
  requestId,
  prompt: content,
});
````

5. Make sure to check that `invoke` is imported at the top of the file.

```ts
import { invoke } from "@forge/bridge";
```

6. Now let's go to the `src/index.ts` file.
7. After the resolver constant is declared, let's add a definition for the method we just used called `send-message-to-rovo`.

```ts
const resolver = new Resolver();

resolver.define("send-message-to-rovo", async ({ payload }) => {});

export const resolvers = resolver.getDefinitions();
```

8. Inside of that resolver, now let's send the prompt to our automation we just created.

```ts
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
```
