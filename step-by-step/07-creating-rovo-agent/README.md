# Step 4: Adding More Modules

Through this step, you will have setup a rovo agent to use for our feature.

## Instructions

1. Go to Jira Home. For example: `https://zishan-aslam.atlassian.net/jira`
2. Click `Ask Rovo` in the top right corner. This will open the chat menu.
3. On the left sidebar of this chat menu, Click `Agents`.
4. Then you will see the `+ Create` button appear. Click this.
5. When the studio to create a Rovo agent opens, click `Skip to manual setup`
6. Enter a name for the Rovo Agent when the option appears in the `Overview` tab.
7. On the left sidebar, click the `Default Scenario` tab under the `Scenarios` dropdown.
8. Paste the following instructions:

Act as a concierge that: 
(a) understands what the user wants to accomplish
(b) selects the most appropriate Service Desk form
(c) gives the user the direct link to open that form. When uncertain, present the top 3 matches with short justifications.

If confidence ≥ 0.7 → show one recommended form + link. Else → show top 3 with reasons.

Output format

If confident:

<link>

If not confident:

“Here are the best matches. Pick one to open:”

<form_name> — reason. Open: <link>

<form_name> — reason. Open: <link>

<form_name> — reason. Open: <link>

If no good match exists → offer “Get IT help” link.

------------------------------------------

9. Go to `https://zishan-aslam.atlassian.net/rest/servicedeskapi/servicedesk/332/requesttype` but change the instance name to your name. This will give you a bunch of information. Copy all of it.
10. Go to a empty Rovo chat with the default agent and ask it to transform that data in the link to the following shape: { name, description, link }. Use the following prompt:

Help me transform the following data into this form: { name, description, link } where the link is transformed from each items _links.self url links in each item to look like: https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/10 We customize the instance name, the portal id and the request type id

PASTE THAT BIG DATA FROM #9 HERE

--------------------------------

10.Copy the response from Rovo which should look like below and paste it at the bottom of your Rovo agent's instructions.

[
  {
    "name": "Fix an account problem",
    "description": "Having trouble accessing certain websites or systems? We'll help you out.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/10"
  },
  {
    "name": "Get a guest wifi account",
    "description": "Raise a request to ask for temp wifi access for guests.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/11"
  },
  {
    "name": "Get IT help",
    "description": "Get assistance for general IT problems and questions.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/1"
  },
  {
    "name": "Investigate a problem",
    "description": "Create a problem to track the cause of one or more incidents.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/12"
  },
  {
    "name": "New mobile device",
    "description": "Need a mobile phone or time for replacement? Let us know.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/13"
  },
  {
    "name": "Onboard new employees",
    "description": "Request access for new employees.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/8"
  },
  {
    "name": "Provision hardware for new employee",
    "description": "Submit a hardware request for a new employee.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/14"
  },
  {
    "name": "Provision software for new employee",
    "description": "Submit a software request for a new employee.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/15"
  },
  {
    "name": "Report a system problem",
    "description": "Let us know if something isn't working properly and we'll aim to get it back up and running quickly.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/6"
  },
  {
    "name": "Report broken hardware",
    "description": "Report hardware that might be faulty or broken e.g. a broken computer screen or a damaged server.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/7"
  },
  {
    "name": "Request a change",
    "description": "For example, upgrade a server (VPN) or an application (Jira).",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/16"
  },
  {
    "name": "Request a new account",
    "description": "Request a new account for a system.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/3"
  },
  {
    "name": "Request admin access",
    "description": "For example, if you need to administer Jira.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/2"
  },
  {
    "name": "Request new hardware",
    "description": "For example, a new mouse or monitor.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/9"
  },
  {
    "name": "Request new software",
    "description": "If you need a software license, raise a request here.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/4"
  },
  {
    "name": "Set up new user accounts and systems access",
    "description": "Need user accounts or systems access for a new employee? Submit a request here.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/17"
  },
  {
    "name": "Set up VPN to the office",
    "description": "Want to access work stuff from outside? Let us know.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/18"
  },
  {
    "name": "Emailed request",
    "description": "Request received from your email support channel.",
    "link": "https://zishan-aslam.atlassian.net/servicedesk/customer/portal/1/create/5"
  }
]
