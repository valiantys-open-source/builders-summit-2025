# Step 3: Preparing The Manifest File

Through this step, you will have updated your Forge manifest file to have our initial set of modules and resources we will need.

## Instructions

1. Open the manifest.yml file.
2. Change the code to:

```yaml
modules:
  function:
    - key: save-rovo-response
      handler: index.saveRovoResponse
  webtrigger:
    - key: rovo-to-chat-ui
      function: save-rovo-response
app:
  runtime:
    name: nodejs22.x
    memoryMB: 256
    architecture: arm64
  id: ari:cloud:ecosystem::app/6cb71cc0-8fe7-4f33-8bee-99b9114d1d69
```