# @n8n-dev/n8n-nodes-amazonaws-chime

![amazonaws-chime Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-amazonaws-chime.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-amazonaws-chime)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing amazonaws-chime API integrations by hand.**

Every time you connect n8n to amazonaws-chime, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to amazonaws-chime took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-amazonaws-chime
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-amazonaws-chime`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **amazonaws-chime API** → paste your API key
3. Drag the **amazonaws-chime** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Default</b> (191 operations)</summary>

- Post Associate Phone Number With User
- Post Associate Phone Numbers With Voice Connector
- Post Associate Phone Numbers With Voice Connector Group
- Post Associate Signin Delegate Groups With Account
- Post Batch Create Attendee
- Post Batch Create Channel Membership
- Post Batch Create Room Membership
- Post Batch Delete Phone Number
- Post Batch Suspend User
- Post Batch Unsuspend User
- Post Batch Update Phone Number
- Post Batch Update User
- Get List Users
- Post Create Account
- Get List Accounts
- Post Create App Instance
- Get List App Instances
- Post Create App Instance Admin
- Get List App Instance Admins
- Post Create App Instance User
- Post Create Attendee
- Get List Attendees
- Post Create Bot
- Get List Bots
- Post Create Channel
- Post Create Channel Ban
- Get List Channel Bans
- Post Create Channel Membership
- Get List Channel Memberships
- Post Create Channel Moderator
- Get List Channel Moderators
- Post Create Media Capture Pipeline
- Get List Media Capture Pipelines
- Post Create Meeting
- Get List Meetings
- Post Create Meeting Dial Out
- Post Create Meeting With Attendees
- Post Create Phone Number Order
- Get List Phone Number Orders
- Post Create Proxy Session
- Get List Proxy Sessions
- Post Create Room
- Get List Rooms
- Post Create Room Membership
- Get List Room Memberships
- Post Create Sip Media Application
- Get List Sip Media Applications
- Post Create Sip Media Application Call
- Post Create Sip Rule
- Get List Sip Rules
- Post Create User
- Post Create Voice Connector
- Get List Voice Connectors
- Post Create Voice Connector Group
- Get List Voice Connector Groups
- Delete Account
- Get Account
- Post Update Account
- Delete App Instance
- Get Describe App Instance
- Put Update App Instance
- Delete App Instance Admin
- Get Describe App Instance Admin
- Delete App Instance Streaming Configurations
- Get App Instance Streaming Configurations
- Put App Instance Streaming Configurations
- Delete App Instance User
- Get Describe App Instance User
- Put Update App Instance User
- Delete Attendee
- Get Attendee
- Delete Channel
- Get Describe Channel
- Put Update Channel
- Delete Channel Ban
- Get Describe Channel Ban
- Delete Channel Membership
- Get Describe Channel Membership
- Delete Channel Message
- Get Channel Message
- Put Update Channel Message
- Delete Channel Moderator
- Get Describe Channel Moderator
- Delete Events Configuration
- Get Events Configuration
- Put Events Configuration
- Delete Media Capture Pipeline
- Get Media Capture Pipeline
- Delete Meeting
- Get Meeting
- Delete Phone Number
- Get Phone Number
- Post Update Phone Number
- Delete Proxy Session
- Get Proxy Session
- Post Update Proxy Session
- Delete Room
- Get Room
- Post Update Room
- Delete Room Membership
- Post Update Room Membership
- Delete Sip Media Application
- Get Sip Media Application
- Put Update Sip Media Application
- Delete Sip Rule
- Get Sip Rule
- Put Update Sip Rule
- Delete Voice Connector
- Get Voice Connector
- Put Update Voice Connector
- Delete Voice Connector Emergency Calling Configuration
- Get Voice Connector Emergency Calling Configuration
- Put Voice Connector Emergency Calling Configuration
- Delete Voice Connector Group
- Get Voice Connector Group
- Put Update Voice Connector Group
- Delete Voice Connector Origination
- Get Voice Connector Origination
- Put Voice Connector Origination
- Delete Voice Connector Proxy
- Get Voice Connector Proxy
- Put Voice Connector Proxy
- Delete Voice Connector Streaming Configuration
- Get Voice Connector Streaming Configuration
- Put Voice Connector Streaming Configuration
- Delete Voice Connector Termination
- Get Voice Connector Termination
- Put Voice Connector Termination
- Post Delete Voice Connector Termination Credentials
- Get Describe Channel Membership For App Instance User
- Get Describe Channel Moderated By App Instance User
- Post Disassociate Phone Number From User
- Post Disassociate Phone Numbers From Voice Connector
- Post Disassociate Phone Numbers From Voice Connector Group
- Post Disassociate Signin Delegate Groups From Account
- Get Account Settings
- Put Update Account Settings
- Get App Instance Retention Settings
- Put App Instance Retention Settings
- Get Bot
- Post Update Bot
- Get Global Settings
- Put Update Global Settings
- Get Messaging Session Endpoint
- Get Phone Number Order
- Get Phone Number Settings
- Put Update Phone Number Settings
- Get Retention Settings
- Put Retention Settings
- Get Sip Media Application Logging Configuration
- Put Sip Media Application Logging Configuration
- Get User
- Post Update User
- Get User Settings
- Put Update User Settings
- Get Voice Connector Logging Configuration
- Put Voice Connector Logging Configuration
- Get Voice Connector Termination Health
- Post Invite Users
- Get List App Instance Users
- Get List Attendee Tags
- Get List Channel Memberships For App Instance User
- Get List Channel Messages
- Post Send Channel Message
- Get List Channels
- Get List Channels Moderated By App Instance User
- Get List Meeting Tags
- Get List Phone Numbers
- Get List Supported Phone Number Countries
- Get List Tags For Resource
- Get List Voice Connector Termination Credentials
- Post Logout User
- Post Put Voice Connector Termination Credentials
- Post Redact Channel Message
- Post Redact Conversation Message
- Post Redact Room Message
- Post Regenerate Security Token
- Post Reset Personal PIN
- Post Restore Phone Number
- Get Search Available Phone Numbers
- Post Start Meeting Transcription
- Post Stop Meeting Transcription
- Post Tag Attendee
- Post Tag Meeting
- Post Tag Resource
- Post Untag Attendee
- Post Untag Meeting
- Post Untag Resource
- Put Update Channel Read Marker
- Post Update Sip Media Application Call
- Post Validate E 911 Address

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from amazonaws-chime docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official amazonaws-chime OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **amazonaws-chime** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the amazonaws-chime API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
