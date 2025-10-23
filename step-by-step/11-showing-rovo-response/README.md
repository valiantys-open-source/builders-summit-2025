# Step 11: Showing Rovo's Response To User

Through this step, you will take the response from Rovo and show it to the user.

## Instructions

1. Go to the `src/chat-ui/src/components/ChatInterface.tsx` file.
2. In the interval function, let's add the ability to call our backend to see if rovo has responded.

```ts
const response = await invoke<{ content: string }>("check-rovo-response", {
  requestId: requestId,
});
```

3. Now we need to define this resolver in the backend. Go to the `src/index.ts`:

```ts
resolver.define("check-rovo-response", async ({ payload }) => {
  const requestId = (payload as { requestId: string }).requestId;
  const response = await kvs.get<string>(requestId);

  return { content: response };
});
```

4. Let's head back to the ChatInterface file. There, let's take the response and create a message with it.

```ts
const interval = setInterval(async () => {
  const response = await invoke<{ content: string }>("check-rovo-response", {
    requestId: requestId,
  });

  if (response.content) {
    const aiMessage: Message = {
      role: "rovo-ai",
      content: response.content,
      timestamp: new Date(),
    };
  }
}, 1500);
```

5. Now that the message object is created, let's add it to the messages state.

```ts
setMessages((prev) => [...prev, aiMessage]);
```

6. Next let's mark typing as false, so it can show the message has finished loading.

```ts
setIsTyping(false);
```

7. Make sure to clear the interval to finish it when the response is receieved.

```ts
clearInterval(interval);
```

It should look finally like this:

```ts
const interval = setInterval(async () => {
  const response = await invoke<{ content: string }>("check-rovo-response", {
    requestId: requestId,
  });

  if (response.content) {
    const aiMessage: Message = {
      role: "rovo-ai",
      content: response.content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiMessage]);
    setIsTyping(false);
    clearInterval(interval);
  }
}, 1500);
```
