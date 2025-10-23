# Step 2: TypeScript

Through this step, you will have converted your Forge application from JavaScript to TypeScript.

## Instructions

1. Right click on `index.js` file and select rename.
2. Change `index.js` to `index.ts`
3. Open the `index.ts` file if not already open.
4. Change the following line of code:

```js
exports.run = (event, context) => {
```

To:

```ts
import { WebTriggerContext, WebTriggerRequest } from "@forge/api";

export function run(event: WebTriggerRequest, context: WebTriggerContext) {
```

5. In your Terminal, type `npm init -y` to give us the ability to install and use packages and libraries in our code. You will see a couple of new files have been generated, don't worry about them for now.
6. Once completed, type `npm install @forge/api`. A new folder will have been created called node_modules, ignore this for now.

The file should currently look like this:

```ts
import { WebTriggerContext, WebTriggerRequest } from "@forge/api";

export function run(event: WebTriggerRequest, context: WebTriggerContext) {
  console.log(event, context);

  return {
    hello: "world",
  };
}
```
