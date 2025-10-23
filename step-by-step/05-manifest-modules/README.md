# Step 4: Adding More Modules

Through this step, you will have setup more of the stuff we will need in our manifest file to make our app work.

## Instructions

1. Open the manifest file and add the following module:

```yaml
modules:
  jiraServiceManagement:portalHeader:
    - key: rovo-in-jsm-portal
      resource: chat-ui
      resolver:
        function: resolver
```

2. In order to make the above module work we also need to add this new resource we called `chat-ui`, so let's register a new resource:

```yaml
resources:
  - key: chat-ui
    path: src/chat-ui/dist
```

3. Next we also need to setup that resolver function that we listed above.

```yaml
- key: resolver
handler: index.resolver
```

Your manifest file should now look like this:

```yaml
modules:
  jiraServiceManagement:portalHeader:
    - key: rovo-in-jsm-portal
      resource: chat-ui
      resolver:
        function: resolver
  function:
    - key: save-rovo-response
      handler: index.saveRovoResponse
    - key: resolver
      handler: index.resolvers
  webtrigger:
    - key: rovo-to-chat-ui
      function: save-rovo-response
resources:
  - key: chat-ui
    path: src/chat-ui/dist
app:
  runtime:
    name: nodejs22.x
    memoryMB: 256
    architecture: arm64
  id: ari:cloud:ecosystem::app/6cb71cc0-8fe7-4f33-8bee-99b9114d1d69
```

4. We told it that there will be a resolver in the index file, so let's go and make that happen:

```ts
const resolver = new Resolver();

export const resolvers = resolver.getDefinitions();
```

5. At the top of the file, we can import this Resolver.

```ts
import Resolver from "@forge/resolver";
```

6. Now we need to install this library by going to our terminal and typing `npm install @forge/resolver`
