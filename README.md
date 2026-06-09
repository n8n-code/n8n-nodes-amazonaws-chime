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

| Resource | Operations |
|----------|------------|
| Default | Post associate phone number with user, Post associate phone numbers with voice connector, Post associate phone numbers with voice connector group, Post associate signin delegate groups with account, Post batch create attendee, Post batch create channel membership, Post batch create room membership, Post batch delete phone number, Post batch suspend user, Post batch unsuspend user, Post batch update phone number, Post batch update user, Get list users, Post create account, Get list accounts, Post create app instance, Get list app instances, Post create app instance admin, Get list app instance admins, Post create app instance user, Post create attendee, Get list attendees, Post create bot, Get list bots, Post create channel, Post create channel ban, Get list channel bans, Post create channel membership, Get list channel memberships, Post create channel moderator, Get list channel moderators, Post create media capture pipeline, Get list media capture pipelines, Post create meeting, Get list meetings, Post create meeting dial out, Post create meeting with attendees, Post create phone number order, Get list phone number orders, Post create proxy session, Get list proxy sessions, Post create room, Get list rooms, Post create room membership, Get list room memberships, Post create sip media application, Get list sip media applications, Post create sip media application call, Post create sip rule, Get list sip rules, Post create user, Post create voice connector, Get list voice connectors, Post create voice connector group, Get list voice connector groups, Delete account, Get account, Post update account, Delete app instance, Get describe app instance, Put update app instance, Delete app instance admin, Get describe app instance admin, Delete app instance streaming configurations, Get app instance streaming configurations, Put app instance streaming configurations, Delete app instance user, Get describe app instance user, Put update app instance user, Delete attendee, Get attendee, Delete channel, Get describe channel, Put update channel, Delete channel ban, Get describe channel ban, Delete channel membership, Get describe channel membership, Delete channel message, Get channel message, Put update channel message, Delete channel moderator, Get describe channel moderator, Delete events configuration, Get events configuration, Put events configuration, Delete media capture pipeline, Get media capture pipeline, Delete meeting, Get meeting, Delete phone number, Get phone number, Post update phone number, Delete proxy session, Get proxy session, Post update proxy session, Delete room, Get room, Post update room, Delete room membership, Post update room membership, Delete sip media application, Get sip media application, Put update sip media application, Delete sip rule, Get sip rule, Put update sip rule, Delete voice connector, Get voice connector, Put update voice connector, Delete voice connector emergency calling configuration, Get voice connector emergency calling configuration, Put voice connector emergency calling configuration, Delete voice connector group, Get voice connector group, Put update voice connector group, Delete voice connector origination, Get voice connector origination, Put voice connector origination, Delete voice connector proxy, Get voice connector proxy, Put voice connector proxy, Delete voice connector streaming configuration, Get voice connector streaming configuration, Put voice connector streaming configuration, Delete voice connector termination, Get voice connector termination, Put voice connector termination, Post delete voice connector termination credentials, Get describe channel membership for app instance user, Get describe channel moderated by app instance user, Post disassociate phone number from user, Post disassociate phone numbers from voice connector, Post disassociate phone numbers from voice connector group, Post disassociate signin delegate groups from account, Get account settings, Put update account settings, Get app instance retention settings, Put app instance retention settings, Get bot, Post update bot, Get global settings, Put update global settings, Get messaging session endpoint, Get phone number order, Get phone number settings, Put update phone number settings, Get retention settings, Put retention settings, Get sip media application logging configuration, Put sip media application logging configuration, Get user, Post update user, Get user settings, Put update user settings, Get voice connector logging configuration, Put voice connector logging configuration, Get voice connector termination health, Post invite users, Get list app instance users, Get list attendee tags, Get list channel memberships for app instance user, Get list channel messages, Post send channel message, Get list channels, Get list channels moderated by app instance user, Get list meeting tags, Get list phone numbers, Get list supported phone number countries, Get list tags for resource, Get list voice connector termination credentials, Post logout user, Post put voice connector termination credentials, Post redact channel message, Post redact conversation message, Post redact room message, Post regenerate security token, Post reset personal pin, Post restore phone number, Get search available phone numbers, Post start meeting transcription, Post stop meeting transcription, Post tag attendee, Post tag meeting, Post tag resource, Post untag attendee, Post untag meeting, Post untag resource, Put update channel read marker, Post update sip media application call, Post validate e 911 address |

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
