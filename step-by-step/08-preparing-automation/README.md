# Step 8: Preparing The Automation

Through this step, you will have setup a automation to allow our forge application to communicate to our Rovo agent.

## Instructions

1. Go to the automations page in your project settings.
2. Click Create Rule
3. For the trigger, use `Incoming Webhook` trigger.
4. Add the `Use Rovo Agent` component.
5. Choose the `Form Finder` Rovo agent we created earlier.
6. In the prompt, you can put `{{webhookData.prompt}}`.
7. Add the final component, `Send Web Request`.
8. Make sure to select `POST` method for the HTTP method option.
9. Go back to your terminal where you have your forge application and type `forge webtrigger`.
10. From the list provided, choose the correct installation where we want the webtrigger url.
11. From the following list of webtriggers, since we only have one webtrigger, you can press enter to select the `rovo-to-chat-ui` webtrigger.
12. Copy that url provided.
13. Back in the automation, in the Send Web Request component under the `Web Request URL` option, paste the URL you just copied above.
14. For the web request data option, choose `Custom Data`.
15. In the data we are going to send a JSON payload that looks like the following:

```json
{
  "requestId": "{{webhookData.requestId}}",
  "response": "{{agentResponse}}"
}
```

**NOTE:** The formatting for the payload above is very important. Have to be very careful.

16. Go ahead and save the rule with any name you like for example `Connect Forge To Rovo`.
17. Once the rule is saved, the webhook component will be enabled, and you can get the webhook url and secret.
18. Copy both the webhook url and secret, and paste them in your `index.ts` file.

```ts
const automationWebhookUrl = "paste-url-here";
const automationWebhookSecret = "paste-secret-here";
```

19. In the webhook component under the work item criteria, make sure to choose `No work items from the webhook`.
20. Save the automation rule.
