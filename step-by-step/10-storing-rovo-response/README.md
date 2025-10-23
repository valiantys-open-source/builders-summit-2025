# Step 10: Saving Rovo's Response To Forge Storage

Through this step, you will take the response from Rovo and store it in Forge Storage.

## Instructions

1. Let's jump into our `src/index.ts` file.
2. Using the first parameter of the webtrigger function `saveRovoResponse`, most likely labeled as `event` in your code, let's parse the body payload out of this.

```ts
export function saveRovoResponse(event: WebTriggerRequest) {
  try {
    const body = JSON.parse(event.body);
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
```

**NOTE:** Take the opportunity to also fix the return response to include a `statusCode` if it does not already have it. This is a REQUIRED field for using webtriggers.

3. In order to use Forge Storage, we need to install one more library. Let's install the kvs library from forge. Open the terminal in the main directory where your manifest.yml file is located. Then type `npm install @forge/kvs`.

4. Next, let's import `kvs` so we can use it to store into Forge Storage.

```ts
import { kvs } from '@forge/kvs';
```
5. In our code now, lets use this to save something in the database.

```ts
export async function saveRovoResponse(event: WebTriggerRequest) {
  try {
    const body = JSON.parse(event.body);
    // Save to Forge Storage
    await kvs.set(body.requestId, body.response);
  } catch (error) {
```

6. 
