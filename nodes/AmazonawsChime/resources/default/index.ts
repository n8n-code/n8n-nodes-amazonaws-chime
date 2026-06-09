import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Associate Phone Number With User",
					"value": "Associate Phone Number With User",
					"action": "Associate Phone Number With User",
					"description": "Associates a phone number with the specified Amazon Chime user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}#operation=associate-phone-number"
						}
					}
				},
				{
					"name": "Associate Phone Numbers With Voice Connector",
					"value": "Associate Phone Numbers With Voice Connector",
					"action": "Associate Phone Numbers With Voice Connector",
					"description": "Associates phone numbers with the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}#operation=associate-phone-numbers"
						}
					}
				},
				{
					"name": "Associate Phone Numbers With Voice Connector Group",
					"value": "Associate Phone Numbers With Voice Connector Group",
					"action": "Associate Phone Numbers With Voice Connector Group",
					"description": "Associates phone numbers with the specified Amazon Chime Voice Connector group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connector-groups/{{$parameter[\"voiceConnectorGroupId\"]}}#operation=associate-phone-numbers"
						}
					}
				},
				{
					"name": "Associate Signin Delegate Groups With Account",
					"value": "Associate Signin Delegate Groups With Account",
					"action": "Associate Signin Delegate Groups With Account",
					"description": "Associates the specified sign-in delegate groups with the specified Amazon Chime account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}#operation=associate-signin-delegate-groups"
						}
					}
				},
				{
					"name": "Batch Create Attendee",
					"value": "Batch Create Attendee",
					"action": "Batch Create Attendee",
					"description": " Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees#operation=batch-create"
						}
					}
				},
				{
					"name": "Batch Create Channel Membership",
					"value": "Batch Create Channel Membership",
					"action": "Batch Create Channel Membership",
					"description": "Adds a specified number of users to a channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/memberships#operation=batch-create"
						}
					}
				},
				{
					"name": "Batch Create Room Membership",
					"value": "Batch Create Room Membership",
					"action": "Batch Create Room Membership",
					"description": "Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}/memberships#operation=batch-create"
						}
					}
				},
				{
					"name": "Batch Delete Phone Number",
					"value": "Batch Delete Phone Number",
					"action": "Batch Delete Phone Number",
					"description": "<p> Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. </p> <p> Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone-numbers#operation=batch-delete"
						}
					}
				},
				{
					"name": "Batch Suspend User",
					"value": "Batch Suspend User",
					"action": "Batch Suspend User",
					"description": "<p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime account. For more information about different account types, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html\">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended <code>Team</code> account users, invite them to the <code>Team</code> account again. You can use the <a>InviteUsers</a> action to do so.</p> <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p> <p> To sign out users without suspending them, use the <a>LogoutUser</a> action. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users#operation=suspend"
						}
					}
				},
				{
					"name": "Batch Unsuspend User",
					"value": "Batch Unsuspend User",
					"action": "Batch Unsuspend User",
					"description": "<p>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code> accounts can be unsuspended using this action. For more information about different account types, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html\"> Managing Your Amazon Chime Accounts </a> in the account types, in the <i>Amazon Chime Administration Guide</i>. </p> <p> Previously suspended users who are unsuspended using this action are returned to <code>Registered</code> status. Users who are not previously suspended are ignored. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users#operation=unsuspend"
						}
					}
				},
				{
					"name": "Batch Update Phone Number",
					"value": "Batch Update Phone Number",
					"action": "Batch Update Phone Number",
					"description": "<p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone-numbers#operation=batch-update"
						}
					}
				},
				{
					"name": "Batch Update User",
					"value": "Batch Update User",
					"action": "Batch Update User",
					"description": "Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users"
						}
					}
				},
				{
					"name": "List Users",
					"value": "List Users",
					"action": "List Users",
					"description": "Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users"
						}
					}
				},
				{
					"name": "Create Account",
					"value": "Create Account",
					"action": "Create Account",
					"description": "Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code> account types are currently supported for this action. For more information about different account types, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html\">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "List Accounts",
					"value": "List Accounts",
					"action": "List Accounts",
					"description": "Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "Create App Instance",
					"value": "Create App Instance",
					"action": "Create App Instance",
					"description": "Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API. <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app-instances"
						}
					}
				},
				{
					"name": "List App Instances",
					"value": "List App Instances",
					"action": "List App Instances",
					"description": "Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instances"
						}
					}
				},
				{
					"name": "Create App Instance Admin",
					"value": "Create App Instance Admin",
					"action": "Create App Instance Admin",
					"description": "<p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions. </p> <ul> <li> <p> <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p> </li> <li> <p> <code>DeleteChannelMessage</code> actions.</p> </li> </ul> <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/admins"
						}
					}
				},
				{
					"name": "List App Instance Admins",
					"value": "List App Instance Admins",
					"action": "List App Instance Admins",
					"description": "Returns a list of the administrators in the <code>AppInstance</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/admins"
						}
					}
				},
				{
					"name": "Create App Instance User",
					"value": "Create App Instance User",
					"action": "Create App Instance User",
					"description": "Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and <code>Name</code> for that user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app-instance-users"
						}
					}
				},
				{
					"name": "Create Attendee",
					"value": "Create Attendee",
					"action": "Create Attendee",
					"description": " Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees"
						}
					}
				},
				{
					"name": "List Attendees",
					"value": "List Attendees",
					"action": "List Attendees",
					"description": " Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees"
						}
					}
				},
				{
					"name": "Create Bot",
					"value": "Create Bot",
					"action": "Create Bot",
					"description": "Creates a bot for an Amazon Chime Enterprise account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots"
						}
					}
				},
				{
					"name": "List Bots",
					"value": "List Bots",
					"action": "List Bots",
					"description": "Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots"
						}
					}
				},
				{
					"name": "Create Channel",
					"value": "Create Channel",
					"action": "Create Channel",
					"description": "<p>Creates a channel to which you can add users and send messages.</p> <p> <b>Restriction</b>: You can't change a channel's privacy.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels"
						}
					}
				},
				{
					"name": "Create Channel Ban",
					"value": "Create Channel Ban",
					"action": "Create Channel Ban",
					"description": "<p>Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or channels.</p> <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/bans"
						}
					}
				},
				{
					"name": "List Channel Bans",
					"value": "List Channel Bans",
					"action": "List Channel Bans",
					"description": "<p>Lists all the users banned from a particular channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/bans"
						}
					}
				},
				{
					"name": "Create Channel Membership",
					"value": "Create Channel Membership",
					"action": "Create Channel Membership",
					"description": "<p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the request header. A channel member can:</p> <ul> <li> <p>List messages</p> </li> <li> <p>Send messages</p> </li> <li> <p>Receive messages</p> </li> <li> <p>Edit their own messages</p> </li> <li> <p>Leave the channel</p> </li> </ul> <p>Privacy settings impact this action as follows:</p> <ul> <li> <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p> </li> <li> <p>Private Channels: You must be a member to list or send messages.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/memberships"
						}
					}
				},
				{
					"name": "List Channel Memberships",
					"value": "List Channel Memberships",
					"action": "List Channel Memberships",
					"description": "<p>Lists all channel memberships in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/memberships"
						}
					}
				},
				{
					"name": "Create Channel Moderator",
					"value": "Create Channel Moderator",
					"action": "Create Channel Moderator",
					"description": "<p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p> <ul> <li> <p>Add and remove other members of the channel.</p> </li> <li> <p>Add and remove other moderators of the channel.</p> </li> <li> <p>Add and remove user bans for the channel.</p> </li> <li> <p>Redact messages in the channel.</p> </li> <li> <p>List messages in the channel.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/moderators"
						}
					}
				},
				{
					"name": "List Channel Moderators",
					"value": "List Channel Moderators",
					"action": "List Channel Moderators",
					"description": "<p>Lists all the moderators for a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/moderators"
						}
					}
				},
				{
					"name": "Create Media Capture Pipeline",
					"value": "Create Media Capture Pipeline",
					"action": "Create Media Capture Pipeline",
					"description": "Creates a media capture pipeline.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/media-capture-pipelines"
						}
					}
				},
				{
					"name": "List Media Capture Pipelines",
					"value": "List Media Capture Pipelines",
					"action": "List Media Capture Pipelines",
					"description": "Returns a list of media capture pipelines.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/media-capture-pipelines"
						}
					}
				},
				{
					"name": "Create Meeting",
					"value": "Create Meeting",
					"action": "Create Meeting",
					"description": " Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html\">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings"
						}
					}
				},
				{
					"name": "List Meetings",
					"value": "List Meetings",
					"action": "List Meetings",
					"description": " Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/meetings"
						}
					}
				},
				{
					"name": "Create Meeting Dial Out",
					"value": "Create Meeting Dial Out",
					"action": "Create Meeting Dial Out",
					"description": "<p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p> <p>To play welcome audio or implement an interactive voice response (IVR), use the <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/dial-outs"
						}
					}
				},
				{
					"name": "Create Meeting With Attendees",
					"value": "Create Meeting With Attendees",
					"action": "Create Meeting With Attendees",
					"description": " Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html\">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings#operation=create-attendees"
						}
					}
				},
				{
					"name": "Create Phone Number Order",
					"value": "Create Phone Number Order",
					"action": "Create Phone Number Order",
					"description": "Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone-number-orders"
						}
					}
				},
				{
					"name": "List Phone Number Orders",
					"value": "List Phone Number Orders",
					"action": "List Phone Number Orders",
					"description": "Lists the phone number orders for the administrator's Amazon Chime account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone-number-orders"
						}
					}
				},
				{
					"name": "Create Proxy Session",
					"value": "Create Proxy Session",
					"action": "Create Proxy Session",
					"description": "Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/proxy-sessions"
						}
					}
				},
				{
					"name": "List Proxy Sessions",
					"value": "List Proxy Sessions",
					"action": "List Proxy Sessions",
					"description": "Lists the proxy sessions for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/proxy-sessions"
						}
					}
				},
				{
					"name": "Create Room",
					"value": "Create Room",
					"action": "Create Room",
					"description": "Creates a chat room for the specified Amazon Chime Enterprise account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms"
						}
					}
				},
				{
					"name": "List Rooms",
					"value": "List Rooms",
					"action": "List Rooms",
					"description": "Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms"
						}
					}
				},
				{
					"name": "Create Room Membership",
					"value": "Create Room Membership",
					"action": "Create Room Membership",
					"description": "Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}/memberships"
						}
					}
				},
				{
					"name": "List Room Memberships",
					"value": "List Room Memberships",
					"action": "List Room Memberships",
					"description": "Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}/memberships"
						}
					}
				},
				{
					"name": "Create Sip Media Application",
					"value": "Create Sip Media Application",
					"action": "Create Sip Media Application",
					"description": "Creates a SIP media application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sip-media-applications"
						}
					}
				},
				{
					"name": "List Sip Media Applications",
					"value": "List Sip Media Applications",
					"action": "List Sip Media Applications",
					"description": "Lists the SIP media applications under the administrator's AWS account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sip-media-applications"
						}
					}
				},
				{
					"name": "Create Sip Media Application Call",
					"value": "Create Sip Media Application Call",
					"action": "Create Sip Media Application Call",
					"description": "Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified <code>sipMediaApplicationId</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sip-media-applications/{{$parameter[\"sipMediaApplicationId\"]}}/calls"
						}
					}
				},
				{
					"name": "Create Sip Rule",
					"value": "Create Sip Rule",
					"action": "Create Sip Rule",
					"description": "Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sip-rules"
						}
					}
				},
				{
					"name": "List Sip Rules",
					"value": "List Sip Rules",
					"action": "List Sip Rules",
					"description": "Lists the SIP rules under the administrator's AWS account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sip-rules"
						}
					}
				},
				{
					"name": "Create User",
					"value": "Create User",
					"action": "Create User",
					"description": "Creates a user under the specified Amazon Chime account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users#operation=create"
						}
					}
				},
				{
					"name": "Create Voice Connector",
					"value": "Create Voice Connector",
					"action": "Create Voice Connector",
					"description": "<p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p> <p> Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connectors"
						}
					}
				},
				{
					"name": "List Voice Connectors",
					"value": "List Voice Connectors",
					"action": "List Voice Connectors",
					"description": "Lists the Amazon Chime Voice Connectors for the administrator's AWS account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors"
						}
					}
				},
				{
					"name": "Create Voice Connector Group",
					"value": "Create Voice Connector Group",
					"action": "Create Voice Connector Group",
					"description": "<p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including <code>VoiceConnectorItems</code> in the request.</p> <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connector-groups"
						}
					}
				},
				{
					"name": "List Voice Connector Groups",
					"value": "List Voice Connector Groups",
					"action": "List Voice Connector Groups",
					"description": "Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connector-groups"
						}
					}
				},
				{
					"name": "Delete Account",
					"value": "Delete Account",
					"action": "Delete Account",
					"description": "<p>Deletes the specified Amazon Chime account. You must suspend all users before deleting <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to dodo.</p> <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.</p> <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p> <p>After 90 days, deleted accounts are permanently removed from your <code>Disabled</code> accounts list.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}"
						}
					}
				},
				{
					"name": "Get Account",
					"value": "Get Account",
					"action": "Get Account",
					"description": "Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}"
						}
					}
				},
				{
					"name": "Update Account",
					"value": "Update Account",
					"action": "Update Account",
					"description": "Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}"
						}
					}
				},
				{
					"name": "Delete App Instance",
					"value": "Delete App Instance",
					"action": "Delete App Instance",
					"description": "Deletes an <code>AppInstance</code> and all associated data asynchronously.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}"
						}
					}
				},
				{
					"name": "Describe App Instance",
					"value": "Describe App Instance",
					"action": "Describe App Instance",
					"description": "Returns the full details of an <code>AppInstance</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}"
						}
					}
				},
				{
					"name": "Update App Instance",
					"value": "Update App Instance",
					"action": "Update App Instance",
					"description": "Updates <code>AppInstance</code> metadata.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}"
						}
					}
				},
				{
					"name": "Delete App Instance Admin",
					"value": "Delete App Instance Admin",
					"action": "Delete App Instance Admin",
					"description": "Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/admins/{{$parameter[\"appInstanceAdminArn\"]}}"
						}
					}
				},
				{
					"name": "Describe App Instance Admin",
					"value": "Describe App Instance Admin",
					"action": "Describe App Instance Admin",
					"description": "Returns the full details of an <code>AppInstanceAdmin</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/admins/{{$parameter[\"appInstanceAdminArn\"]}}"
						}
					}
				},
				{
					"name": "Delete App Instance Streaming Configurations",
					"value": "Delete App Instance Streaming Configurations",
					"action": "Delete App Instance Streaming Configurations",
					"description": "Deletes the streaming configurations of an <code>AppInstance</code>.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/streaming-configurations"
						}
					}
				},
				{
					"name": "Get App Instance Streaming Configurations",
					"value": "Get App Instance Streaming Configurations",
					"action": "Get App Instance Streaming Configurations",
					"description": "Gets the streaming settings for an <code>AppInstance</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/streaming-configurations"
						}
					}
				},
				{
					"name": "Put App Instance Streaming Configurations",
					"value": "Put App Instance Streaming Configurations",
					"action": "Put App Instance Streaming Configurations",
					"description": "The data streaming configurations of an <code>AppInstance</code>.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/streaming-configurations"
						}
					}
				},
				{
					"name": "Delete App Instance User",
					"value": "Delete App Instance User",
					"action": "Delete App Instance User",
					"description": "Deletes an <code>AppInstanceUser</code>.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app-instance-users/{{$parameter[\"appInstanceUserArn\"]}}"
						}
					}
				},
				{
					"name": "Describe App Instance User",
					"value": "Describe App Instance User",
					"action": "Describe App Instance User",
					"description": "Returns the full details of an <code>AppInstanceUser</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instance-users/{{$parameter[\"appInstanceUserArn\"]}}"
						}
					}
				},
				{
					"name": "Update App Instance User",
					"value": "Update App Instance User",
					"action": "Update App Instance User",
					"description": "Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app-instance-users/{{$parameter[\"appInstanceUserArn\"]}}"
						}
					}
				},
				{
					"name": "Delete Attendee",
					"value": "Delete Attendee",
					"action": "Delete Attendee",
					"description": "Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees/{{$parameter[\"attendeeId\"]}}"
						}
					}
				},
				{
					"name": "Get Attendee",
					"value": "Get Attendee",
					"action": "Get Attendee",
					"description": " Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees/{{$parameter[\"attendeeId\"]}}"
						}
					}
				},
				{
					"name": "Delete Channel",
					"value": "Delete Channel",
					"action": "Delete Channel",
					"description": "<p>Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}"
						}
					}
				},
				{
					"name": "Describe Channel",
					"value": "Describe Channel",
					"action": "Describe Channel",
					"description": "<p>Returns the full details of a channel in an Amazon Chime <code>AppInstance</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}"
						}
					}
				},
				{
					"name": "Update Channel",
					"value": "Update Channel",
					"action": "Update Channel",
					"description": "<p>Update a channel's attributes.</p> <p> <b>Restriction</b>: You can't change a channel's privacy. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}"
						}
					}
				},
				{
					"name": "Delete Channel Ban",
					"value": "Delete Channel Ban",
					"action": "Delete Channel Ban",
					"description": "<p>Removes a user from a channel's ban list.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/bans/{{$parameter[\"memberArn\"]}}"
						}
					}
				},
				{
					"name": "Describe Channel Ban",
					"value": "Describe Channel Ban",
					"action": "Describe Channel Ban",
					"description": "<p>Returns the full details of a channel ban.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/bans/{{$parameter[\"memberArn\"]}}"
						}
					}
				},
				{
					"name": "Delete Channel Membership",
					"value": "Delete Channel Membership",
					"action": "Delete Channel Membership",
					"description": "<p>Removes a member from a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/memberships/{{$parameter[\"memberArn\"]}}"
						}
					}
				},
				{
					"name": "Describe Channel Membership",
					"value": "Describe Channel Membership",
					"action": "Describe Channel Membership",
					"description": "<p>Returns the full details of a user's channel membership.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/memberships/{{$parameter[\"memberArn\"]}}"
						}
					}
				},
				{
					"name": "Delete Channel Message",
					"value": "Delete Channel Message",
					"action": "Delete Channel Message",
					"description": "<p>Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by <code>UpdateChannelMessage</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/messages/{{$parameter[\"messageId\"]}}"
						}
					}
				},
				{
					"name": "Get Channel Message",
					"value": "Get Channel Message",
					"action": "Get Channel Message",
					"description": "<p>Gets the full details of a channel message.</p> <note> <p>The x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/messages/{{$parameter[\"messageId\"]}}"
						}
					}
				},
				{
					"name": "Update Channel Message",
					"value": "Update Channel Message",
					"action": "Update Channel Message",
					"description": "<p>Updates the content of a message.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/messages/{{$parameter[\"messageId\"]}}"
						}
					}
				},
				{
					"name": "Delete Channel Moderator",
					"value": "Delete Channel Moderator",
					"action": "Delete Channel Moderator",
					"description": "<p>Deletes a channel moderator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/moderators/{{$parameter[\"channelModeratorArn\"]}}"
						}
					}
				},
				{
					"name": "Describe Channel Moderator",
					"value": "Describe Channel Moderator",
					"action": "Describe Channel Moderator",
					"description": "<p>Returns the full details of a single ChannelModerator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/moderators/{{$parameter[\"channelModeratorArn\"]}}"
						}
					}
				},
				{
					"name": "Delete Events Configuration",
					"value": "Delete Events Configuration",
					"action": "Delete Events Configuration",
					"description": "Deletes the events configuration that allows a bot to receive outgoing events.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots/{{$parameter[\"botId\"]}}/events-configuration"
						}
					}
				},
				{
					"name": "Get Events Configuration",
					"value": "Get Events Configuration",
					"action": "Get Events Configuration",
					"description": "Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots/{{$parameter[\"botId\"]}}/events-configuration"
						}
					}
				},
				{
					"name": "Put Events Configuration",
					"value": "Put Events Configuration",
					"action": "Put Events Configuration",
					"description": "Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots/{{$parameter[\"botId\"]}}/events-configuration"
						}
					}
				},
				{
					"name": "Delete Media Capture Pipeline",
					"value": "Delete Media Capture Pipeline",
					"action": "Delete Media Capture Pipeline",
					"description": "Deletes the media capture pipeline.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/media-capture-pipelines/{{$parameter[\"mediaPipelineId\"]}}"
						}
					}
				},
				{
					"name": "Get Media Capture Pipeline",
					"value": "Get Media Capture Pipeline",
					"action": "Get Media Capture Pipeline",
					"description": "Gets an existing media capture pipeline.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/media-capture-pipelines/{{$parameter[\"mediaPipelineId\"]}}"
						}
					}
				},
				{
					"name": "Delete Meeting",
					"value": "Delete Meeting",
					"action": "Delete Meeting",
					"description": "Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}"
						}
					}
				},
				{
					"name": "Get Meeting",
					"value": "Get Meeting",
					"action": "Get Meeting",
					"description": " Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html\">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}"
						}
					}
				},
				{
					"name": "Delete Phone Number",
					"value": "Delete Phone Number",
					"action": "Delete Phone Number",
					"description": "<p>Moves the specified phone number into the <b>Deletion queue</b>. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted.</p> <p>Deleted phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/phone-numbers/{{$parameter[\"phoneNumberId\"]}}"
						}
					}
				},
				{
					"name": "Get Phone Number",
					"value": "Get Phone Number",
					"action": "Get Phone Number",
					"description": "Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone-numbers/{{$parameter[\"phoneNumberId\"]}}"
						}
					}
				},
				{
					"name": "Update Phone Number",
					"value": "Update Phone Number",
					"action": "Update Phone Number",
					"description": "<p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone-numbers/{{$parameter[\"phoneNumberId\"]}}"
						}
					}
				},
				{
					"name": "Delete Proxy Session",
					"value": "Delete Proxy Session",
					"action": "Delete Proxy Session",
					"description": "Deletes the specified proxy session from the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/proxy-sessions/{{$parameter[\"proxySessionId\"]}}"
						}
					}
				},
				{
					"name": "Get Proxy Session",
					"value": "Get Proxy Session",
					"action": "Get Proxy Session",
					"description": "Gets the specified proxy session details for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/proxy-sessions/{{$parameter[\"proxySessionId\"]}}"
						}
					}
				},
				{
					"name": "Update Proxy Session",
					"value": "Update Proxy Session",
					"action": "Update Proxy Session",
					"description": "Updates the specified proxy session details, such as voice or SMS capabilities.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/proxy-sessions/{{$parameter[\"proxySessionId\"]}}"
						}
					}
				},
				{
					"name": "Delete Room",
					"value": "Delete Room",
					"action": "Delete Room",
					"description": "Deletes a chat room in an Amazon Chime Enterprise account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}"
						}
					}
				},
				{
					"name": "Get Room",
					"value": "Get Room",
					"action": "Get Room",
					"description": "Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}"
						}
					}
				},
				{
					"name": "Update Room",
					"value": "Update Room",
					"action": "Update Room",
					"description": "Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}"
						}
					}
				},
				{
					"name": "Delete Room Membership",
					"value": "Delete Room Membership",
					"action": "Delete Room Membership",
					"description": "Removes a member from a chat room in an Amazon Chime Enterprise account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}/memberships/{{$parameter[\"memberId\"]}}"
						}
					}
				},
				{
					"name": "Update Room Membership",
					"value": "Update Room Membership",
					"action": "Update Room Membership",
					"description": "Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}/memberships/{{$parameter[\"memberId\"]}}"
						}
					}
				},
				{
					"name": "Delete Sip Media Application",
					"value": "Delete Sip Media Application",
					"action": "Delete Sip Media Application",
					"description": "Deletes a SIP media application.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sip-media-applications/{{$parameter[\"sipMediaApplicationId\"]}}"
						}
					}
				},
				{
					"name": "Get Sip Media Application",
					"value": "Get Sip Media Application",
					"action": "Get Sip Media Application",
					"description": "Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sip-media-applications/{{$parameter[\"sipMediaApplicationId\"]}}"
						}
					}
				},
				{
					"name": "Update Sip Media Application",
					"value": "Update Sip Media Application",
					"action": "Update Sip Media Application",
					"description": "Updates the details of the specified SIP media application.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sip-media-applications/{{$parameter[\"sipMediaApplicationId\"]}}"
						}
					}
				},
				{
					"name": "Delete Sip Rule",
					"value": "Delete Sip Rule",
					"action": "Delete Sip Rule",
					"description": "Deletes a SIP rule. You must disable a SIP rule before you can delete it.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sip-rules/{{$parameter[\"sipRuleId\"]}}"
						}
					}
				},
				{
					"name": "Get Sip Rule",
					"value": "Get Sip Rule",
					"action": "Get Sip Rule",
					"description": "Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sip-rules/{{$parameter[\"sipRuleId\"]}}"
						}
					}
				},
				{
					"name": "Update Sip Rule",
					"value": "Update Sip Rule",
					"action": "Update Sip Rule",
					"description": "Updates the details of the specified SIP rule.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sip-rules/{{$parameter[\"sipRuleId\"]}}"
						}
					}
				},
				{
					"name": "Delete Voice Connector",
					"value": "Delete Voice Connector",
					"action": "Delete Voice Connector",
					"description": "Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}"
						}
					}
				},
				{
					"name": "Get Voice Connector",
					"value": "Get Voice Connector",
					"action": "Get Voice Connector",
					"description": "Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}"
						}
					}
				},
				{
					"name": "Update Voice Connector",
					"value": "Update Voice Connector",
					"action": "Update Voice Connector",
					"description": "Updates details for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}"
						}
					}
				},
				{
					"name": "Delete Voice Connector Emergency Calling Configuration",
					"value": "Delete Voice Connector Emergency Calling Configuration",
					"action": "Delete Voice Connector Emergency Calling Configuration",
					"description": "Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/emergency-calling-configuration"
						}
					}
				},
				{
					"name": "Get Voice Connector Emergency Calling Configuration",
					"value": "Get Voice Connector Emergency Calling Configuration",
					"action": "Get Voice Connector Emergency Calling Configuration",
					"description": "Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/emergency-calling-configuration"
						}
					}
				},
				{
					"name": "Put Voice Connector Emergency Calling Configuration",
					"value": "Put Voice Connector Emergency Calling Configuration",
					"action": "Put Voice Connector Emergency Calling Configuration",
					"description": "Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/emergency-calling-configuration"
						}
					}
				},
				{
					"name": "Delete Voice Connector Group",
					"value": "Delete Voice Connector Group",
					"action": "Delete Voice Connector Group",
					"description": "Deletes the specified Amazon Chime Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connector-groups/{{$parameter[\"voiceConnectorGroupId\"]}}"
						}
					}
				},
				{
					"name": "Get Voice Connector Group",
					"value": "Get Voice Connector Group",
					"action": "Get Voice Connector Group",
					"description": " Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connector-groups/{{$parameter[\"voiceConnectorGroupId\"]}}"
						}
					}
				},
				{
					"name": "Update Voice Connector Group",
					"value": "Update Voice Connector Group",
					"action": "Update Voice Connector Group",
					"description": "Updates details of the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connector-groups/{{$parameter[\"voiceConnectorGroupId\"]}}"
						}
					}
				},
				{
					"name": "Delete Voice Connector Origination",
					"value": "Delete Voice Connector Origination",
					"action": "Delete Voice Connector Origination",
					"description": "<p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p> </note>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/origination"
						}
					}
				},
				{
					"name": "Get Voice Connector Origination",
					"value": "Get Voice Connector Origination",
					"action": "Get Voice Connector Origination",
					"description": "Retrieves origination setting details for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/origination"
						}
					}
				},
				{
					"name": "Put Voice Connector Origination",
					"value": "Put Voice Connector Origination",
					"action": "Put Voice Connector Origination",
					"description": "<p>Adds origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p> </note>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/origination"
						}
					}
				},
				{
					"name": "Delete Voice Connector Proxy",
					"value": "Delete Voice Connector Proxy",
					"action": "Delete Voice Connector Proxy",
					"description": "Deletes the proxy configuration from the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/programmable-numbers/proxy"
						}
					}
				},
				{
					"name": "Get Voice Connector Proxy",
					"value": "Get Voice Connector Proxy",
					"action": "Get Voice Connector Proxy",
					"description": "Gets the proxy configuration details for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/programmable-numbers/proxy"
						}
					}
				},
				{
					"name": "Put Voice Connector Proxy",
					"value": "Put Voice Connector Proxy",
					"action": "Put Voice Connector Proxy",
					"description": "Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/programmable-numbers/proxy"
						}
					}
				},
				{
					"name": "Delete Voice Connector Streaming Configuration",
					"value": "Delete Voice Connector Streaming Configuration",
					"action": "Delete Voice Connector Streaming Configuration",
					"description": "Deletes the streaming configuration for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/streaming-configuration"
						}
					}
				},
				{
					"name": "Get Voice Connector Streaming Configuration",
					"value": "Get Voice Connector Streaming Configuration",
					"action": "Get Voice Connector Streaming Configuration",
					"description": "Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/streaming-configuration"
						}
					}
				},
				{
					"name": "Put Voice Connector Streaming Configuration",
					"value": "Put Voice Connector Streaming Configuration",
					"action": "Put Voice Connector Streaming Configuration",
					"description": "Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/streaming-configuration"
						}
					}
				},
				{
					"name": "Delete Voice Connector Termination",
					"value": "Delete Voice Connector Termination",
					"action": "Delete Voice Connector Termination",
					"description": "<p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p> </note>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/termination"
						}
					}
				},
				{
					"name": "Get Voice Connector Termination",
					"value": "Get Voice Connector Termination",
					"action": "Get Voice Connector Termination",
					"description": "Retrieves termination setting details for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/termination"
						}
					}
				},
				{
					"name": "Put Voice Connector Termination",
					"value": "Put Voice Connector Termination",
					"action": "Put Voice Connector Termination",
					"description": "<p>Adds termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p> </note>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/termination"
						}
					}
				},
				{
					"name": "Delete Voice Connector Termination Credentials",
					"value": "Delete Voice Connector Termination Credentials",
					"action": "Delete Voice Connector Termination Credentials",
					"description": "Deletes the specified SIP credentials used by your equipment to authenticate during call termination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/termination/credentials#operation=delete"
						}
					}
				},
				{
					"name": "Describe Channel Membership For App Instance User",
					"value": "Describe Channel Membership For App Instance User",
					"action": "Describe Channel Membership For App Instance User",
					"description": "<p> Returns the details of a channel based on the membership of the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}#scope=app-instance-user-membership&app-instance-user-arn"
						}
					}
				},
				{
					"name": "Describe Channel Moderated By App Instance User",
					"value": "Describe Channel Moderated By App Instance User",
					"action": "Describe Channel Moderated By App Instance User",
					"description": "<p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}#scope=app-instance-user-moderated-channel&app-instance-user-arn"
						}
					}
				},
				{
					"name": "Disassociate Phone Number From User",
					"value": "Disassociate Phone Number From User",
					"action": "Disassociate Phone Number From User",
					"description": "Disassociates the primary provisioned phone number from the specified Amazon Chime user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}#operation=disassociate-phone-number"
						}
					}
				},
				{
					"name": "Disassociate Phone Numbers From Voice Connector",
					"value": "Disassociate Phone Numbers From Voice Connector",
					"action": "Disassociate Phone Numbers From Voice Connector",
					"description": "Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}#operation=disassociate-phone-numbers"
						}
					}
				},
				{
					"name": "Disassociate Phone Numbers From Voice Connector Group",
					"value": "Disassociate Phone Numbers From Voice Connector Group",
					"action": "Disassociate Phone Numbers From Voice Connector Group",
					"description": "Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connector-groups/{{$parameter[\"voiceConnectorGroupId\"]}}#operation=disassociate-phone-numbers"
						}
					}
				},
				{
					"name": "Disassociate Signin Delegate Groups From Account",
					"value": "Disassociate Signin Delegate Groups From Account",
					"action": "Disassociate Signin Delegate Groups From Account",
					"description": "Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}#operation=disassociate-signin-delegate-groups"
						}
					}
				},
				{
					"name": "Get Account Settings",
					"value": "Get Account Settings",
					"action": "Get Account Settings",
					"description": "Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dialout settings. For more information about these settings, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/policies.html\">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/settings"
						}
					}
				},
				{
					"name": "Update Account Settings",
					"value": "Update Account Settings",
					"action": "Update Account Settings",
					"description": "Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/policies.html\">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/settings"
						}
					}
				},
				{
					"name": "Get App Instance Retention Settings",
					"value": "Get App Instance Retention Settings",
					"action": "Get App Instance Retention Settings",
					"description": "Gets the retention settings for an <code>AppInstance</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/retention-settings"
						}
					}
				},
				{
					"name": "Put App Instance Retention Settings",
					"value": "Put App Instance Retention Settings",
					"action": "Put App Instance Retention Settings",
					"description": "Sets the amount of time in days that a given <code>AppInstance</code> retains data.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app-instances/{{$parameter[\"appInstanceArn\"]}}/retention-settings"
						}
					}
				},
				{
					"name": "Get Bot",
					"value": "Get Bot",
					"action": "Get Bot",
					"description": "Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots/{{$parameter[\"botId\"]}}"
						}
					}
				},
				{
					"name": "Update Bot",
					"value": "Update Bot",
					"action": "Update Bot",
					"description": "Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots/{{$parameter[\"botId\"]}}"
						}
					}
				},
				{
					"name": "Get Global Settings",
					"value": "Get Global Settings",
					"action": "Get Global Settings",
					"description": "Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings"
						}
					}
				},
				{
					"name": "Update Global Settings",
					"value": "Update Global Settings",
					"action": "Update Global Settings",
					"description": "Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/settings"
						}
					}
				},
				{
					"name": "Get Messaging Session Endpoint",
					"value": "Get Messaging Session Endpoint",
					"action": "Get Messaging Session Endpoint",
					"description": "The details of the endpoint for the messaging session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/endpoints/messaging-session"
						}
					}
				},
				{
					"name": "Get Phone Number Order",
					"value": "Get Phone Number Order",
					"action": "Get Phone Number Order",
					"description": "Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone-number-orders/{{$parameter[\"phoneNumberOrderId\"]}}"
						}
					}
				},
				{
					"name": "Get Phone Number Settings",
					"value": "Get Phone Number Settings",
					"action": "Get Phone Number Settings",
					"description": "Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings/phone-number"
						}
					}
				},
				{
					"name": "Update Phone Number Settings",
					"value": "Update Phone Number Settings",
					"action": "Update Phone Number Settings",
					"description": "Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/settings/phone-number"
						}
					}
				},
				{
					"name": "Get Retention Settings",
					"value": "Get Retention Settings",
					"action": "Get Retention Settings",
					"description": " Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html\">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/retention-settings"
						}
					}
				},
				{
					"name": "Put Retention Settings",
					"value": "Put Retention Settings",
					"action": "Put Retention Settings",
					"description": "<p> Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html\">Logging Amazon Chime API Calls with AWS CloudTrail</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p> To turn off existing retention settings, remove the number of days from the corresponding <b>RetentionDays</b> field in the <b>RetentionSettings</b> object. For more information about retention settings, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html\">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/retention-settings"
						}
					}
				},
				{
					"name": "Get Sip Media Application Logging Configuration",
					"value": "Get Sip Media Application Logging Configuration",
					"action": "Get Sip Media Application Logging Configuration",
					"description": "Returns the logging configuration for the specified SIP media application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sip-media-applications/{{$parameter[\"sipMediaApplicationId\"]}}/logging-configuration"
						}
					}
				},
				{
					"name": "Put Sip Media Application Logging Configuration",
					"value": "Put Sip Media Application Logging Configuration",
					"action": "Put Sip Media Application Logging Configuration",
					"description": "Updates the logging configuration for the specified SIP media application.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sip-media-applications/{{$parameter[\"sipMediaApplicationId\"]}}/logging-configuration"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get User",
					"description": "<p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p> <p> To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address. </p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "Update User",
					"description": "Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Get User Settings",
					"value": "Get User Settings",
					"action": "Get User Settings",
					"description": "Retrieves settings for the specified user ID, such as any associated phone number settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}/settings"
						}
					}
				},
				{
					"name": "Update User Settings",
					"value": "Update User Settings",
					"action": "Update User Settings",
					"description": "Updates the settings for the specified user, such as phone number settings.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}/settings"
						}
					}
				},
				{
					"name": "Get Voice Connector Logging Configuration",
					"value": "Get Voice Connector Logging Configuration",
					"action": "Get Voice Connector Logging Configuration",
					"description": "Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/logging-configuration"
						}
					}
				},
				{
					"name": "Put Voice Connector Logging Configuration",
					"value": "Put Voice Connector Logging Configuration",
					"action": "Put Voice Connector Logging Configuration",
					"description": "Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/logging-configuration"
						}
					}
				},
				{
					"name": "Get Voice Connector Termination Health",
					"value": "Get Voice Connector Termination Health",
					"action": "Get Voice Connector Termination Health",
					"description": "Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/termination/health"
						}
					}
				},
				{
					"name": "Invite Users",
					"value": "Invite Users",
					"action": "Invite Users",
					"description": "Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime <code>Team</code> account. Only <code>Team</code> account types are currently supported for this action.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users#operation=add"
						}
					}
				},
				{
					"name": "List App Instance Users",
					"value": "List App Instance Users",
					"action": "List App Instance Users",
					"description": "List all <code>AppInstanceUsers</code> created under a single <code>AppInstance</code>. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app-instance-users#app-instance-arn"
						}
					}
				},
				{
					"name": "List Attendee Tags",
					"value": "List Attendee Tags",
					"action": "List Attendee Tags",
					"description": "Lists the tags applied to an Amazon Chime SDK attendee resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees/{{$parameter[\"attendeeId\"]}}/tags"
						}
					}
				},
				{
					"name": "List Channel Memberships For App Instance User",
					"value": "List Channel Memberships For App Instance User",
					"action": "List Channel Memberships For App Instance User",
					"description": "<p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels#scope=app-instance-user-memberships"
						}
					}
				},
				{
					"name": "List Channel Messages",
					"value": "List Channel Messages",
					"action": "List Channel Messages",
					"description": "<p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending order.</p> <note> <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message.</p> <p>Also, the x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/messages"
						}
					}
				},
				{
					"name": "Send Channel Message",
					"value": "Send Channel Message",
					"action": "Send Channel Message",
					"description": "<p>Sends a message to a particular channel that the member is a part of.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata. <code>CONTROL</code> messages can contain 30 bytes of data and no metadata.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/messages"
						}
					}
				},
				{
					"name": "List Channels",
					"value": "List Channels",
					"action": "List Channels",
					"description": "<p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p> <p class=\"title\"> <b>Functionality &amp; restrictions</b> </p> <ul> <li> <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p> </li> <li> <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the private channels in an account.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels#app-instance-arn"
						}
					}
				},
				{
					"name": "List Channels Moderated By App Instance User",
					"value": "List Channels Moderated By App Instance User",
					"action": "List Channels Moderated By App Instance User",
					"description": "<p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channels#scope=app-instance-user-moderated-channels"
						}
					}
				},
				{
					"name": "List Meeting Tags",
					"value": "List Meeting Tags",
					"action": "List Meeting Tags",
					"description": "Lists the tags applied to an Amazon Chime SDK meeting resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/tags"
						}
					}
				},
				{
					"name": "List Phone Numbers",
					"value": "List Phone Numbers",
					"action": "List Phone Numbers",
					"description": "Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone-numbers"
						}
					}
				},
				{
					"name": "List Supported Phone Number Countries",
					"value": "List Supported Phone Number Countries",
					"action": "List Supported Phone Number Countries",
					"description": "Lists supported phone number countries.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone-number-countries#product-type"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "Lists the tags applied to an Amazon Chime SDK meeting resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tags#arn"
						}
					}
				},
				{
					"name": "List Voice Connector Termination Credentials",
					"value": "List Voice Connector Termination Credentials",
					"action": "List Voice Connector Termination Credentials",
					"description": "Lists the SIP credentials for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/termination/credentials"
						}
					}
				},
				{
					"name": "Logout User",
					"value": "Logout User",
					"action": "Logout User",
					"description": "Logs out the specified user from all of the devices they are currently logged into.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}#operation=logout"
						}
					}
				},
				{
					"name": "Put Voice Connector Termination Credentials",
					"value": "Put Voice Connector Termination Credentials",
					"action": "Put Voice Connector Termination Credentials",
					"description": "Adds termination SIP credentials for the specified Amazon Chime Voice Connector.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/voice-connectors/{{$parameter[\"voiceConnectorId\"]}}/termination/credentials#operation=put"
						}
					}
				},
				{
					"name": "Redact Channel Message",
					"value": "Redact Channel Message",
					"action": "Redact Channel Message",
					"description": "<p>Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/messages/{{$parameter[\"messageId\"]}}#operation=redact"
						}
					}
				},
				{
					"name": "Redact Conversation Message",
					"value": "Redact Conversation Message",
					"action": "Redact Conversation Message",
					"description": "Redacts the specified message from the specified Amazon Chime conversation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/conversations/{{$parameter[\"conversationId\"]}}/messages/{{$parameter[\"messageId\"]}}#operation=redact"
						}
					}
				},
				{
					"name": "Redact Room Message",
					"value": "Redact Room Message",
					"action": "Redact Room Message",
					"description": "Redacts the specified message from the specified Amazon Chime channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/rooms/{{$parameter[\"roomId\"]}}/messages/{{$parameter[\"messageId\"]}}#operation=redact"
						}
					}
				},
				{
					"name": "Regenerate Security Token",
					"value": "Regenerate Security Token",
					"action": "Regenerate Security Token",
					"description": "Regenerates the security token for a bot.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/bots/{{$parameter[\"botId\"]}}#operation=regenerate-security-token"
						}
					}
				},
				{
					"name": "Reset Personal PIN",
					"value": "Reset Personal PIN",
					"action": "Reset Personal PIN",
					"description": "Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the <a>User</a> object with the updated personal meeting PIN.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}/users/{{$parameter[\"userId\"]}}#operation=reset-personal-pin"
						}
					}
				},
				{
					"name": "Restore Phone Number",
					"value": "Restore Phone Number",
					"action": "Restore Phone Number",
					"description": "Moves a phone number from the <b>Deletion queue</b> back into the phone number <b>Inventory</b>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/phone-numbers/{{$parameter[\"phoneNumberId\"]}}#operation=restore"
						}
					}
				},
				{
					"name": "Search Available Phone Numbers",
					"value": "Search Available Phone Numbers",
					"action": "Search Available Phone Numbers",
					"description": "Searches for phone numbers that can be ordered. For US numbers, provide at least one of the following search filters: <code>AreaCode</code>, <code>City</code>, <code>State</code>, or <code>TollFreePrefix</code>. If you provide <code>City</code>, you must also provide <code>State</code>. Numbers outside the US only support the <code>PhoneNumberType</code> filter, which you must use.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search#type=phone-numbers"
						}
					}
				},
				{
					"name": "Start Meeting Transcription",
					"value": "Start Meeting Transcription",
					"action": "Start Meeting Transcription",
					"description": "<p>Starts transcription for the specified <code>meetingId</code>. For more information, refer to <a href=\"https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html\"> Using Amazon Chime SDK live transcription </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <p>If you specify an invalid configuration, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href=\"https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html\">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> <important> <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the <a href=\"https://aws.amazon.com/service-terms/\">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/transcription#operation=start"
						}
					}
				},
				{
					"name": "Stop Meeting Transcription",
					"value": "Stop Meeting Transcription",
					"action": "Stop Meeting Transcription",
					"description": "Stops transcription for the specified <code>meetingId</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/transcription#operation=stop"
						}
					}
				},
				{
					"name": "Tag Attendee",
					"value": "Tag Attendee",
					"action": "Tag Attendee",
					"description": "Applies the specified tags to the specified Amazon Chime SDK attendee.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees/{{$parameter[\"attendeeId\"]}}/tags#operation=add"
						}
					}
				},
				{
					"name": "Tag Meeting",
					"value": "Tag Meeting",
					"action": "Tag Meeting",
					"description": "Applies the specified tags to the specified Amazon Chime SDK meeting.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/tags#operation=add"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Applies the specified tags to the specified Amazon Chime SDK meeting resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tags#operation=tag-resource"
						}
					}
				},
				{
					"name": "Untag Attendee",
					"value": "Untag Attendee",
					"action": "Untag Attendee",
					"description": "Untags the specified tags from the specified Amazon Chime SDK attendee.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/attendees/{{$parameter[\"attendeeId\"]}}/tags#operation=delete"
						}
					}
				},
				{
					"name": "Untag Meeting",
					"value": "Untag Meeting",
					"action": "Untag Meeting",
					"description": "Untags the specified tags from the specified Amazon Chime SDK meeting.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/meetings/{{$parameter[\"meetingId\"]}}/tags#operation=delete"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Untags the specified tags from the specified Amazon Chime SDK meeting resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tags#operation=untag-resource"
						}
					}
				},
				{
					"name": "Update Channel Read Marker",
					"value": "Update Channel Read Marker",
					"action": "Update Channel Read Marker",
					"description": "<p>The details of the time when a user last read messages in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/channels/{{$parameter[\"channelArn\"]}}/readMarker"
						}
					}
				},
				{
					"name": "Update Sip Media Application Call",
					"value": "Update Sip Media Application Call",
					"action": "Update Sip Media Application Call",
					"description": "Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sip-media-applications/{{$parameter[\"sipMediaApplicationId\"]}}/calls/{{$parameter[\"transactionId\"]}}"
						}
					}
				},
				{
					"name": "Validate E 911 Address",
					"value": "Validate E 911 Address",
					"action": "Validate E 911 Address",
					"description": "Validates an address to be used for 911 calls made with Amazon Chime Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/emergency-calling/address"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /accounts/{accountId}/users/{userId}#operation=associate-phone-number",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Number With User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Number With User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Number With User"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "associate-phone-number",
			"type": "options",
			"options": [
				{
					"name": "Associate Phone Number",
					"value": "associate-phone-number"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Number With User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "E 164 Phone Number",
			"name": "E164PhoneNumber",
			"type": "string",
			"default": "",
			"description": "The phone number, in E.164 format.",
			"routing": {
				"send": {
					"property": "E164PhoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Number With User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Number With User"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connectors/{voiceConnectorId}#operation=associate-phone-numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "associate-phone-numbers",
			"type": "options",
			"options": [
				{
					"name": "Associate Phone Numbers",
					"value": "associate-phone-numbers"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "E 164 Phone Numbers",
			"name": "E164PhoneNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of phone numbers, in E.164 format.",
			"routing": {
				"send": {
					"property": "E164PhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Force Associate",
			"name": "ForceAssociate",
			"type": "boolean",
			"default": true,
			"description": "If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.",
			"routing": {
				"send": {
					"property": "ForceAssociate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connector-groups/{voiceConnectorGroupId}#operation=associate-phone-numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Group Id",
			"name": "voiceConnectorGroupId",
			"required": true,
			"description": "The Amazon Chime Voice Connector group ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "associate-phone-numbers",
			"type": "options",
			"options": [
				{
					"name": "Associate Phone Numbers",
					"value": "associate-phone-numbers"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "E 164 Phone Numbers",
			"name": "E164PhoneNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of phone numbers, in E.164 format.",
			"routing": {
				"send": {
					"property": "E164PhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Force Associate",
			"name": "ForceAssociate",
			"type": "boolean",
			"default": true,
			"description": "If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.",
			"routing": {
				"send": {
					"property": "ForceAssociate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Phone Numbers With Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}#operation=associate-signin-delegate-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Signin Delegate Groups With Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Signin Delegate Groups With Account"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "associate-signin-delegate-groups",
			"type": "options",
			"options": [
				{
					"name": "Associate Signin Delegate Groups",
					"value": "associate-signin-delegate-groups"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Signin Delegate Groups With Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Signin Delegate Groups",
			"name": "SigninDelegateGroups",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The sign-in delegate groups.",
			"routing": {
				"send": {
					"property": "SigninDelegateGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Signin Delegate Groups With Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Signin Delegate Groups With Account"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/attendees#operation=batch-create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "batch-create",
			"type": "options",
			"options": [
				{
					"name": "Batch Create",
					"value": "batch-create"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Attendee"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Attendees",
			"name": "Attendees",
			"type": "json",
			"default": "[\n  {\n    \"Tags\": {}\n  }\n]",
			"description": "The request containing the attendees to create.",
			"routing": {
				"send": {
					"property": "Attendees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "POST /channels/{channelArn}/memberships#operation=batch-create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel to which you're adding users.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "batch-create",
			"type": "options",
			"options": [
				{
					"name": "Batch Create",
					"value": "batch-create"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "DEFAULT",
			"description": "The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.",
			"options": [
				{
					"name": "DEFAULT",
					"value": "DEFAULT"
				},
				{
					"name": "HIDDEN",
					"value": "HIDDEN"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Channel Membership"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Member Arns",
			"name": "MemberArns",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The ARNs of the members you want to add to the channel.",
			"routing": {
				"send": {
					"property": "MemberArns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/rooms/{roomId}/memberships#operation=batch-create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "batch-create",
			"type": "options",
			"options": [
				{
					"name": "Batch Create",
					"value": "batch-create"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Room Membership"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Membership Item List",
			"name": "MembershipItemList",
			"type": "json",
			"default": "[\n  {\n    \"Role\": {}\n  }\n]",
			"description": "The list of membership items.",
			"routing": {
				"send": {
					"property": "MembershipItemList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "POST /phone-numbers#operation=batch-delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "batch-delete",
			"type": "options",
			"options": [
				{
					"name": "Batch Delete",
					"value": "batch-delete"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Phone Number"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number Ids",
			"name": "PhoneNumberIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of phone number IDs.",
			"routing": {
				"send": {
					"property": "PhoneNumberIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Delete Phone Number"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users#operation=suspend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Suspend User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Suspend User"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "suspend",
			"type": "options",
			"options": [
				{
					"name": "Suspend",
					"value": "suspend"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Suspend User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id List",
			"name": "UserIdList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The request containing the user IDs to suspend.",
			"routing": {
				"send": {
					"property": "UserIdList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Suspend User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Suspend User"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users#operation=unsuspend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Unsuspend User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Unsuspend User"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "unsuspend",
			"type": "options",
			"options": [
				{
					"name": "Unsuspend",
					"value": "unsuspend"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Unsuspend User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Id List",
			"name": "UserIdList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The request containing the user IDs to unsuspend.",
			"routing": {
				"send": {
					"property": "UserIdList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Unsuspend User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Unsuspend User"
					]
				}
			}
		},
		{
			"displayName": "POST /phone-numbers#operation=batch-update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "batch-update",
			"type": "options",
			"options": [
				{
					"name": "Batch Update",
					"value": "batch-update"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update Phone Number"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Update Phone Number Request Items",
			"name": "UpdatePhoneNumberRequestItems",
			"type": "json",
			"default": "[\n  {\n    \"ProductType\": {},\n    \"CallingName\": {}\n  }\n]",
			"description": "The request containing the phone number IDs and product types or calling names to update.",
			"routing": {
				"send": {
					"property": "UpdatePhoneNumberRequestItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Update User Request Items",
			"name": "UpdateUserRequestItems",
			"type": "json",
			"default": "[\n  {\n    \"LicenseType\": {},\n    \"UserType\": {},\n    \"AlexaForBusinessMetadata\": {}\n  }\n]",
			"description": "The request containing the user IDs and details to update.",
			"routing": {
				"send": {
					"property": "UpdateUserRequestItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Batch Update User"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "User Email",
			"name": "user-email",
			"description": "Optional. The user email address used to filter results. Maximum 1.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user-email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "User Type",
			"name": "user-type",
			"description": "The user type.",
			"default": "PrivateUser",
			"type": "options",
			"options": [
				{
					"name": "Private User",
					"value": "PrivateUser"
				},
				{
					"name": "Shared Device",
					"value": "SharedDevice"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "user-type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call. Defaults to 100.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the Amazon Chime account.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Account"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Amazon Chime account name prefix with which to filter results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "User Email",
			"name": "user-email",
			"description": "User email address with which to filter results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user-email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call. Defaults to 100.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /app-instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The <code>ClientRequestToken</code> of the <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags assigned to the <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instances"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of <code>AppInstance</code>s that you want to return.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instances"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instances"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instances"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instances"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /app-instances/{appInstanceArn}/admins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance Admin"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Instance Admin Arn",
			"name": "AppInstanceAdminArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the administrator of the current <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "AppInstanceAdminArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instances/{appInstanceArn}/admins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Admins"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Admins"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of administrators that you want to return.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Admins"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token returned from previous API requests until the number of administrators is reached.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Admins"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Admins"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Admins"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Admins"
					]
				}
			}
		},
		{
			"displayName": "POST /app-instance-users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Instance Arn",
			"name": "AppInstanceArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the <code>AppInstance</code> request.",
			"routing": {
				"send": {
					"property": "AppInstanceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Instance User Id",
			"name": "AppInstanceUserId",
			"type": "string",
			"default": "",
			"description": "The user ID of the <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "AppInstanceUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The user's name.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The request's metadata. Limited to a 1KB string in UTF-8.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The token assigned to the user requesting an <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags assigned to the <code>AppInstanceUser</code>.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create App Instance User"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/attendees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Attendee"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "External User Id",
			"name": "ExternalUserId",
			"type": "string",
			"default": "",
			"description": "The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.",
			"routing": {
				"send": {
					"property": "ExternalUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tag key-value pairs.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Attendee"
					]
				}
			}
		},
		{
			"displayName": "GET /meetings/{meetingId}/attendees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendees"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendees"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendees"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendees"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendees"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendees"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendees"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/bots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Bot"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Bot"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Name",
			"name": "DisplayName",
			"type": "string",
			"default": "",
			"description": "The bot display name.",
			"routing": {
				"send": {
					"property": "DisplayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Bot"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "Domain",
			"type": "string",
			"default": "",
			"description": "The domain of the Amazon Chime Enterprise account.",
			"routing": {
				"send": {
					"property": "Domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Bot"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Bot"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/bots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Bots"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Bots"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call. The default is 10.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Bots"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Bots"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Bots"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Bots"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Bots"
					]
				}
			}
		},
		{
			"displayName": "POST /channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Instance Arn",
			"name": "AppInstanceArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the channel request.",
			"routing": {
				"send": {
					"property": "AppInstanceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the channel.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "Mode",
			"type": "options",
			"default": "UNRESTRICTED",
			"description": "The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.",
			"options": [
				{
					"name": "UNRESTRICTED",
					"value": "UNRESTRICTED"
				},
				{
					"name": "RESTRICTED",
					"value": "RESTRICTED"
				}
			],
			"routing": {
				"send": {
					"property": "Mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "Privacy",
			"name": "Privacy",
			"type": "options",
			"default": "PUBLIC",
			"description": "The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>.",
			"options": [
				{
					"name": "PUBLIC",
					"value": "PUBLIC"
				},
				{
					"name": "PRIVATE",
					"value": "PRIVATE"
				}
			],
			"routing": {
				"send": {
					"property": "Privacy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The metadata of the creation request. Limited to 1KB and UTF-8.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The client token for the request. An <code>Idempotency</code> token.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tags for the creation request.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "POST /channels/{channelArn}/bans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the ban request.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Ban"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Member Arn",
			"name": "MemberArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the member being banned.",
			"routing": {
				"send": {
					"property": "MemberArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/bans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of bans that you want returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token passed by previous API calls until all requested bans are returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Bans"
					]
				}
			}
		},
		{
			"displayName": "POST /channels/{channelArn}/memberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel to which you're adding users.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Membership"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Member Arn",
			"name": "MemberArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the member you want to add to the channel.",
			"routing": {
				"send": {
					"property": "MemberArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Membership"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "DEFAULT",
			"description": "The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.",
			"options": [
				{
					"name": "DEFAULT",
					"value": "DEFAULT"
				},
				{
					"name": "HIDDEN",
					"value": "HIDDEN"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/memberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The maximum number of channel memberships that you want returned.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned.",
			"default": "DEFAULT",
			"type": "options",
			"options": [
				{
					"name": "DEFAULT",
					"value": "DEFAULT"
				},
				{
					"name": "HIDDEN",
					"value": "HIDDEN"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of channel memberships that you want returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token passed by previous API calls until all requested channel memberships are returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships"
					]
				}
			}
		},
		{
			"displayName": "POST /channels/{channelArn}/moderators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Moderator"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Channel Moderator Arn",
			"name": "ChannelModeratorArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the moderator.",
			"routing": {
				"send": {
					"property": "ChannelModeratorArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/moderators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of moderators that you want returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token passed by previous API calls until all requested moderators are returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Moderators"
					]
				}
			}
		},
		{
			"displayName": "POST /media-capture-pipelines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Type",
			"name": "SourceType",
			"type": "options",
			"default": "ChimeSdkMeeting",
			"description": "Source type from which the media artifacts will be captured. A Chime SDK Meeting is the only supported source.",
			"options": [
				{
					"name": "Chime Sdk Meeting",
					"value": "ChimeSdkMeeting"
				}
			],
			"routing": {
				"send": {
					"property": "SourceType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Arn",
			"name": "SourceArn",
			"type": "string",
			"default": "",
			"description": "ARN of the source from which the media artifacts are captured.",
			"routing": {
				"send": {
					"property": "SourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sink Type",
			"name": "SinkType",
			"type": "options",
			"default": "S3Bucket",
			"description": "Destination type to which the media artifacts are saved. You must use an S3 bucket. ",
			"options": [
				{
					"name": "S 3 Bucket",
					"value": "S3Bucket"
				}
			],
			"routing": {
				"send": {
					"property": "SinkType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sink Arn",
			"name": "SinkArn",
			"type": "string",
			"default": "",
			"description": "The ARN of the sink type.",
			"routing": {
				"send": {
					"property": "SinkArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "Chime Sdk Meeting Configuration",
			"name": "ChimeSdkMeetingConfiguration",
			"type": "json",
			"default": "{\n  \"SourceConfiguration\": {\n    \"SelectedVideoStreams\": {}\n  },\n  \"ArtifactsConfiguration\": {}\n}",
			"description": "The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.",
			"routing": {
				"send": {
					"property": "ChimeSdkMeetingConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "GET /media-capture-pipelines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Media Capture Pipelines"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token used to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Media Capture Pipelines"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call. Valid Range: 1 - 99.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Media Capture Pipelines"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Media Capture Pipelines"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Media Capture Pipelines"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Media Capture Pipelines"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The unique identifier for the client request. Use a different token for different meetings.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"displayName": "External Meeting Id",
			"name": "ExternalMeetingId",
			"type": "string",
			"default": "",
			"description": "The external meeting ID.",
			"routing": {
				"send": {
					"property": "ExternalMeetingId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"displayName": "Meeting Host Id",
			"name": "MeetingHostId",
			"type": "string",
			"default": "",
			"description": "Reserved.",
			"routing": {
				"send": {
					"property": "MeetingHostId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"displayName": "Media Region",
			"name": "MediaRegion",
			"type": "string",
			"default": "",
			"description": "<p> The Region in which to create the meeting. Default: <code>us-east-1</code>. </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>",
			"routing": {
				"send": {
					"property": "MediaRegion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tag key-value pairs.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"displayName": "Notifications Configuration",
			"name": "NotificationsConfiguration",
			"type": "json",
			"default": "{\n  \"SqsQueueArn\": {}\n}",
			"description": " The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). ",
			"routing": {
				"send": {
					"property": "NotificationsConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting"
					]
				}
			}
		},
		{
			"displayName": "GET /meetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meetings"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meetings"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meetings"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meetings"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meetings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meetings"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/dial-outs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting Dial Out"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting Dial Out"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Phone Number",
			"name": "FromPhoneNumber",
			"type": "string",
			"default": "",
			"description": "Phone number used as the caller ID when the remote party receives a call.",
			"routing": {
				"send": {
					"property": "FromPhoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting Dial Out"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Phone Number",
			"name": "ToPhoneNumber",
			"type": "string",
			"default": "",
			"description": "Phone number called when inviting someone to a meeting.",
			"routing": {
				"send": {
					"property": "ToPhoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting Dial Out"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Join Token",
			"name": "JoinToken",
			"type": "string",
			"default": "",
			"description": "Token used by the Amazon Chime SDK attendee. Call the <a href=\"https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html\">CreateAttendee</a> action to get a join token.",
			"routing": {
				"send": {
					"property": "JoinToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting Dial Out"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting Dial Out"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings#operation=create-attendees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "create-attendees",
			"type": "options",
			"options": [
				{
					"name": "Create Attendees",
					"value": "create-attendees"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The unique identifier for the client request. Use a different token for different meetings.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "External Meeting Id",
			"name": "ExternalMeetingId",
			"type": "string",
			"default": "",
			"description": "The external meeting ID.",
			"routing": {
				"send": {
					"property": "ExternalMeetingId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "Meeting Host Id",
			"name": "MeetingHostId",
			"type": "string",
			"default": "",
			"description": "Reserved.",
			"routing": {
				"send": {
					"property": "MeetingHostId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "Media Region",
			"name": "MediaRegion",
			"type": "string",
			"default": "",
			"description": "<p> The Region in which to create the meeting. Default: <code>us-east-1</code> . </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p>",
			"routing": {
				"send": {
					"property": "MediaRegion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tag key-value pairs.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "Notifications Configuration",
			"name": "NotificationsConfiguration",
			"type": "json",
			"default": "{\n  \"SqsQueueArn\": {}\n}",
			"description": " The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). ",
			"routing": {
				"send": {
					"property": "NotificationsConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "Attendees",
			"name": "Attendees",
			"type": "json",
			"default": "[\n  {\n    \"Tags\": {}\n  }\n]",
			"description": "The request containing the attendees to create.",
			"routing": {
				"send": {
					"property": "Attendees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Meeting With Attendees"
					]
				}
			}
		},
		{
			"displayName": "POST /phone-number-orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Phone Number Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Product Type",
			"name": "ProductType",
			"type": "options",
			"default": "BusinessCalling",
			"description": "The phone number product type.",
			"options": [
				{
					"name": "Business Calling",
					"value": "BusinessCalling"
				},
				{
					"name": "Voice Connector",
					"value": "VoiceConnector"
				},
				{
					"name": "Sip Media Application Dial In",
					"value": "SipMediaApplicationDialIn"
				}
			],
			"routing": {
				"send": {
					"property": "ProductType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Phone Number Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "E 164 Phone Numbers",
			"name": "E164PhoneNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of phone numbers, in E.164 format.",
			"routing": {
				"send": {
					"property": "E164PhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Phone Number Order"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Phone Number Order"
					]
				}
			}
		},
		{
			"displayName": "GET /phone-number-orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Number Orders"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Number Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connectors/{voiceConnectorId}/proxy-sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime voice connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Participant Phone Numbers",
			"name": "ParticipantPhoneNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The participant phone numbers.",
			"routing": {
				"send": {
					"property": "ParticipantPhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the proxy session.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Expiry Minutes",
			"name": "ExpiryMinutes",
			"type": "number",
			"default": 0,
			"description": "The number of minutes allowed for the proxy session.",
			"routing": {
				"send": {
					"property": "ExpiryMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Capabilities",
			"name": "Capabilities",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The proxy session capabilities.",
			"routing": {
				"send": {
					"property": "Capabilities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Number Selection Behavior",
			"name": "NumberSelectionBehavior",
			"type": "options",
			"default": "PreferSticky",
			"description": "The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.",
			"options": [
				{
					"name": "Prefer Sticky",
					"value": "PreferSticky"
				},
				{
					"name": "Avoid Sticky",
					"value": "AvoidSticky"
				}
			],
			"routing": {
				"send": {
					"property": "NumberSelectionBehavior",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Geo Match Level",
			"name": "GeoMatchLevel",
			"type": "options",
			"default": "Country",
			"description": "The preference for matching the country or area code of the proxy phone number with that of the first participant.",
			"options": [
				{
					"name": "Country",
					"value": "Country"
				},
				{
					"name": "Area Code",
					"value": "AreaCode"
				}
			],
			"routing": {
				"send": {
					"property": "GeoMatchLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Geo Match Params",
			"name": "GeoMatchParams",
			"type": "json",
			"default": "{\n  \"AreaCode\": {}\n}",
			"description": "The country and area code for a proxy phone number in a proxy phone session.",
			"routing": {
				"send": {
					"property": "GeoMatchParams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/proxy-sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime voice connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "The proxy session status.",
			"default": "Open",
			"type": "options",
			"options": [
				{
					"name": "Open",
					"value": "Open"
				},
				{
					"name": "In Progress",
					"value": "InProgress"
				},
				{
					"name": "Closed",
					"value": "Closed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Proxy Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/rooms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The room name.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The idempotency token for the request.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/rooms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Member Id",
			"name": "member-id",
			"description": "The member ID (user ID or bot ID).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "member-id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Rooms"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/rooms/{roomId}/memberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room Membership"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Member Id",
			"name": "MemberId",
			"type": "string",
			"default": "",
			"description": "The Amazon Chime member ID (user ID or bot ID).",
			"routing": {
				"send": {
					"property": "MemberId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "Role",
			"type": "options",
			"default": "Administrator",
			"description": "The role of the member.",
			"options": [
				{
					"name": "Administrator",
					"value": "Administrator"
				},
				{
					"name": "Member",
					"value": "Member"
				}
			],
			"routing": {
				"send": {
					"property": "Role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Room Membership"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/rooms/{roomId}/memberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Room Memberships"
					]
				}
			}
		},
		{
			"displayName": "POST /sip-media-applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Aws Region",
			"name": "AwsRegion",
			"type": "string",
			"default": "",
			"description": "The AWS Region assigned to the SIP media application.",
			"routing": {
				"send": {
					"property": "AwsRegion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The SIP media application name.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoints",
			"name": "Endpoints",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.",
			"routing": {
				"send": {
					"property": "Endpoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "GET /sip-media-applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Media Applications"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call. Defaults to 100.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Media Applications"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Media Applications"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Media Applications"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Media Applications"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Media Applications"
					]
				}
			}
		},
		{
			"displayName": "POST /sip-media-applications/{sipMediaApplicationId}/calls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Id",
			"name": "sipMediaApplicationId",
			"required": true,
			"description": "The ID of the SIP media application.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application Call"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Phone Number",
			"name": "FromPhoneNumber",
			"type": "string",
			"default": "",
			"description": "The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.",
			"routing": {
				"send": {
					"property": "FromPhoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application Call"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Phone Number",
			"name": "ToPhoneNumber",
			"type": "string",
			"default": "",
			"description": "The phone number that the service should call.",
			"routing": {
				"send": {
					"property": "ToPhoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "Sip Headers",
			"name": "SipHeaders",
			"type": "json",
			"default": "{}",
			"description": "The SIP headers added to an outbound call leg.",
			"routing": {
				"send": {
					"property": "SipHeaders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "POST /sip-rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Rule"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the SIP rule.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Rule"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trigger Type",
			"name": "TriggerType",
			"type": "options",
			"default": "ToPhoneNumber",
			"description": "The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.",
			"options": [
				{
					"name": "To Phone Number",
					"value": "ToPhoneNumber"
				},
				{
					"name": "Request Uri Hostname",
					"value": "RequestUriHostname"
				}
			],
			"routing": {
				"send": {
					"property": "TriggerType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Rule"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trigger Value",
			"name": "TriggerValue",
			"type": "string",
			"default": "",
			"description": "If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.",
			"routing": {
				"send": {
					"property": "TriggerValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Disabled",
			"name": "Disabled",
			"type": "boolean",
			"default": true,
			"description": "Enables or disables a rule. You must disable rules before you can delete them.",
			"routing": {
				"send": {
					"property": "Disabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Rule"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Target Applications",
			"name": "TargetApplications",
			"type": "json",
			"default": "[\n  {\n    \"Priority\": {},\n    \"AwsRegion\": {}\n  }\n]",
			"description": "List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.",
			"routing": {
				"send": {
					"property": "TargetApplications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /sip-rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Rules"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application",
			"name": "sip-media-application",
			"description": "The SIP media application ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sip-media-application",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Rules"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call. Defaults to 100.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Rules"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Rules"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Rules"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Rules"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Sip Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users#operation=create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "create",
			"type": "options",
			"options": [
				{
					"name": "Create",
					"value": "create"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "Username",
			"type": "string",
			"default": "",
			"description": "The user name.",
			"routing": {
				"send": {
					"property": "Username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "",
			"description": "The user's email address.",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "User Type",
			"name": "UserType",
			"type": "options",
			"default": "PrivateUser",
			"description": "The user type.",
			"options": [
				{
					"name": "Private User",
					"value": "PrivateUser"
				},
				{
					"name": "Shared Device",
					"value": "SharedDevice"
				}
			],
			"routing": {
				"send": {
					"property": "UserType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the Amazon Chime Voice Connector.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Aws Region",
			"name": "AwsRegion",
			"type": "options",
			"default": "us-east-1",
			"description": " The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code> . ",
			"options": [
				{
					"name": "Us East 1",
					"value": "us-east-1"
				},
				{
					"name": "Us West 2",
					"value": "us-west-2"
				}
			],
			"routing": {
				"send": {
					"property": "AwsRegion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Require Encryption",
			"name": "RequireEncryption",
			"type": "boolean",
			"default": true,
			"description": "When enabled, requires encryption for the Amazon Chime Voice Connector.",
			"routing": {
				"send": {
					"property": "RequireEncryption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connectors"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connectors"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connectors"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connectors"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connectors"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connector-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the Amazon Chime Voice Connector group.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Items",
			"name": "VoiceConnectorItems",
			"type": "json",
			"default": "[\n  {\n    \"Priority\": {}\n  }\n]",
			"description": "The Amazon Chime Voice Connectors to route inbound calls to.",
			"routing": {
				"send": {
					"property": "VoiceConnectorItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connector-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accounts/{accountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Account"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The new name for the specified Amazon Chime account.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Default License",
			"name": "DefaultLicense",
			"type": "options",
			"default": "Basic",
			"description": "The default license applied when you add users to an Amazon Chime account.",
			"options": [
				{
					"name": "Basic",
					"value": "Basic"
				},
				{
					"name": "Plus",
					"value": "Plus"
				},
				{
					"name": "Pro",
					"value": "Pro"
				},
				{
					"name": "Pro Trial",
					"value": "ProTrial"
				}
			],
			"routing": {
				"send": {
					"property": "DefaultLicense",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app-instances/{appInstanceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instances/{appInstanceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance"
					]
				}
			}
		},
		{
			"displayName": "PUT /app-instances/{appInstanceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name that you want to change.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The metadata that you want to change.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "App Instance Admin Arn",
			"name": "appInstanceAdminArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>'s administrator.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "App Instance Admin Arn",
			"name": "appInstanceAdminArn",
			"required": true,
			"description": "The ARN of the <code>AppInstanceAdmin</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance Admin"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app-instances/{appInstanceArn}/streaming-configurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the streaming configurations being deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instances/{appInstanceArn}/streaming-configurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "PUT /app-instances/{appInstanceArn}/streaming-configurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Instance Streaming Configurations",
			"name": "AppInstanceStreamingConfigurations",
			"type": "json",
			"default": "[\n  {\n    \"ResourceArn\": {}\n  }\n]",
			"description": "The streaming configurations set for an <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "AppInstanceStreamingConfigurations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Streaming Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app-instance-users/{appInstanceUserArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance User"
					]
				}
			}
		},
		{
			"displayName": "App Instance User Arn",
			"name": "appInstanceUserArn",
			"required": true,
			"description": "The ARN of the user request being deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete App Instance User"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instance-users/{appInstanceUserArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance User"
					]
				}
			}
		},
		{
			"displayName": "App Instance User Arn",
			"name": "appInstanceUserArn",
			"required": true,
			"description": "The ARN of the <code>AppInstanceUser</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe App Instance User"
					]
				}
			}
		},
		{
			"displayName": "PUT /app-instance-users/{appInstanceUserArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance User"
					]
				}
			}
		},
		{
			"displayName": "App Instance User Arn",
			"name": "appInstanceUserArn",
			"required": true,
			"description": "The ARN of the <code>AppInstanceUser</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the <code>AppInstanceUser</code>.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The metadata of the <code>AppInstanceUser</code>.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update App Instance User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /meetings/{meetingId}/attendees/{attendeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Attendee"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Attendee"
					]
				}
			}
		},
		{
			"displayName": "Attendee Id",
			"name": "attendeeId",
			"required": true,
			"description": "The Amazon Chime SDK attendee ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Attendee"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Attendee"
					]
				}
			}
		},
		{
			"displayName": "GET /meetings/{meetingId}/attendees/{attendeeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Attendee"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Attendee"
					]
				}
			}
		},
		{
			"displayName": "Attendee Id",
			"name": "attendeeId",
			"required": true,
			"description": "The Amazon Chime SDK attendee ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Attendee"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Attendee"
					]
				}
			}
		},
		{
			"displayName": "DELETE /channels/{channelArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel being deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel"
					]
				}
			}
		},
		{
			"displayName": "PUT /channels/{channelArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the channel.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "Mode",
			"type": "options",
			"default": "UNRESTRICTED",
			"description": "The mode of the update request.",
			"options": [
				{
					"name": "UNRESTRICTED",
					"value": "UNRESTRICTED"
				},
				{
					"name": "RESTRICTED",
					"value": "RESTRICTED"
				}
			],
			"routing": {
				"send": {
					"property": "Mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The metadata for the update request.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "DELETE /channels/{channelArn}/bans/{memberArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel from which the <code>AppInstanceUser</code> was banned.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Member Arn",
			"name": "memberArn",
			"required": true,
			"description": "The ARN of the <code>AppInstanceUser</code> that you want to reinstate.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/bans/{memberArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel from which the user is banned.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Member Arn",
			"name": "memberArn",
			"required": true,
			"description": "The ARN of the member being banned.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Ban"
					]
				}
			}
		},
		{
			"displayName": "DELETE /channels/{channelArn}/memberships/{memberArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel from which you want to remove the user.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Member Arn",
			"name": "memberArn",
			"required": true,
			"description": "The ARN of the member that you're removing from the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/memberships/{memberArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Member Arn",
			"name": "memberArn",
			"required": true,
			"description": "The ARN of the member.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership"
					]
				}
			}
		},
		{
			"displayName": "DELETE /channels/{channelArn}/messages/{messageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "messageId",
			"required": true,
			"description": "The ID of the message being deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Message"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Message"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/messages/{messageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "messageId",
			"required": true,
			"description": "The ID of the message.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel Message"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel Message"
					]
				}
			}
		},
		{
			"displayName": "PUT /channels/{channelArn}/messages/{messageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "messageId",
			"required": true,
			"description": "The ID string of the message being updated.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Message"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "Content",
			"type": "string",
			"default": "",
			"description": "The content of the message being updated.",
			"routing": {
				"send": {
					"property": "Content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The metadata of the message being updated.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Message"
					]
				}
			}
		},
		{
			"displayName": "DELETE /channels/{channelArn}/moderators/{channelModeratorArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Channel Moderator Arn",
			"name": "channelModeratorArn",
			"required": true,
			"description": "The ARN of the moderator being deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/moderators/{channelModeratorArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Channel Moderator Arn",
			"name": "channelModeratorArn",
			"required": true,
			"description": "The ARN of the channel moderator.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderator"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accounts/{accountId}/bots/{botId}/events-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Bot Id",
			"name": "botId",
			"required": true,
			"description": "The bot ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/bots/{botId}/events-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Bot Id",
			"name": "botId",
			"required": true,
			"description": "The bot ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "PUT /accounts/{accountId}/bots/{botId}/events-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Bot Id",
			"name": "botId",
			"required": true,
			"description": "The bot ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Outbound Events HTTPS Endpoint",
			"name": "OutboundEventsHTTPSEndpoint",
			"type": "string",
			"default": "",
			"description": "HTTPS endpoint that allows the bot to receive outgoing events.",
			"routing": {
				"send": {
					"property": "OutboundEventsHTTPSEndpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Lambda Function Arn",
			"name": "LambdaFunctionArn",
			"type": "string",
			"default": "",
			"description": "Lambda function ARN that allows the bot to receive outgoing events.",
			"routing": {
				"send": {
					"property": "LambdaFunctionArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Events Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /media-capture-pipelines/{mediaPipelineId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "Media Pipeline Id",
			"name": "mediaPipelineId",
			"required": true,
			"description": "The ID of the media capture pipeline being deleted. ",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "GET /media-capture-pipelines/{mediaPipelineId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "Media Pipeline Id",
			"name": "mediaPipelineId",
			"required": true,
			"description": "The ID of the pipeline that you want to get.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Media Capture Pipeline"
					]
				}
			}
		},
		{
			"displayName": "DELETE /meetings/{meetingId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Meeting"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Meeting"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Meeting"
					]
				}
			}
		},
		{
			"displayName": "GET /meetings/{meetingId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Meeting"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Meeting"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Meeting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /phone-numbers/{phoneNumberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Phone Number Id",
			"name": "phoneNumberId",
			"required": true,
			"description": "The phone number ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Phone Number"
					]
				}
			}
		},
		{
			"displayName": "GET /phone-numbers/{phoneNumberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Phone Number Id",
			"name": "phoneNumberId",
			"required": true,
			"description": "The phone number ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number"
					]
				}
			}
		},
		{
			"displayName": "POST /phone-numbers/{phoneNumberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Phone Number Id",
			"name": "phoneNumberId",
			"required": true,
			"description": "The phone number ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "ProductType",
			"type": "options",
			"default": "BusinessCalling",
			"description": "The product type.",
			"options": [
				{
					"name": "Business Calling",
					"value": "BusinessCalling"
				},
				{
					"name": "Voice Connector",
					"value": "VoiceConnector"
				},
				{
					"name": "Sip Media Application Dial In",
					"value": "SipMediaApplicationDialIn"
				}
			],
			"routing": {
				"send": {
					"property": "ProductType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Calling Name",
			"name": "CallingName",
			"type": "string",
			"default": "",
			"description": "The outbound calling name associated with the phone number.",
			"routing": {
				"send": {
					"property": "CallingName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime voice connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Proxy Session Id",
			"name": "proxySessionId",
			"required": true,
			"description": "The proxy session ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime voice connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Proxy Session Id",
			"name": "proxySessionId",
			"required": true,
			"description": "The proxy session ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime voice connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Proxy Session Id",
			"name": "proxySessionId",
			"required": true,
			"description": "The proxy session ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Proxy Session"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Capabilities",
			"name": "Capabilities",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The proxy session capabilities.",
			"routing": {
				"send": {
					"property": "Capabilities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Expiry Minutes",
			"name": "ExpiryMinutes",
			"type": "number",
			"default": 0,
			"description": "The number of minutes allowed for the proxy session.",
			"routing": {
				"send": {
					"property": "ExpiryMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Proxy Session"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accounts/{accountId}/rooms/{roomId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The chat room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/rooms/{roomId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Room"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Room"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Room"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Room"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/rooms/{roomId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The room name.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accounts/{accountId}/rooms/{roomId}/memberships/{memberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Member Id",
			"name": "memberId",
			"required": true,
			"description": "The member ID (user ID or bot ID).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Room Membership"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/rooms/{roomId}/memberships/{memberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Member Id",
			"name": "memberId",
			"required": true,
			"description": "The member ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "Role",
			"type": "options",
			"default": "Administrator",
			"description": "The role of the member.",
			"options": [
				{
					"name": "Administrator",
					"value": "Administrator"
				},
				{
					"name": "Member",
					"value": "Member"
				}
			],
			"routing": {
				"send": {
					"property": "Role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room Membership"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Room Membership"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sip-media-applications/{sipMediaApplicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Id",
			"name": "sipMediaApplicationId",
			"required": true,
			"description": "The SIP media application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "GET /sip-media-applications/{sipMediaApplicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Id",
			"name": "sipMediaApplicationId",
			"required": true,
			"description": "The SIP media application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "PUT /sip-media-applications/{sipMediaApplicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Id",
			"name": "sipMediaApplicationId",
			"required": true,
			"description": "The SIP media application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The new name for the specified SIP media application.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Endpoints",
			"name": "Endpoints",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The new set of endpoints for the specified SIP media application.",
			"routing": {
				"send": {
					"property": "Endpoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sip-rules/{sipRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Sip Rule Id",
			"name": "sipRuleId",
			"required": true,
			"description": "The SIP rule ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /sip-rules/{sipRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Sip Rule Id",
			"name": "sipRuleId",
			"required": true,
			"description": "The SIP rule ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "PUT /sip-rules/{sipRuleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Sip Rule Id",
			"name": "sipRuleId",
			"required": true,
			"description": "The SIP rule ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Rule"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The new name for the specified SIP rule.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Disabled",
			"name": "Disabled",
			"type": "boolean",
			"default": true,
			"description": "The new value specified to indicate whether the rule is disabled.",
			"routing": {
				"send": {
					"property": "Disabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Target Applications",
			"name": "TargetApplications",
			"type": "json",
			"default": "[\n  {\n    \"Priority\": {},\n    \"AwsRegion\": {}\n  }\n]",
			"description": "The new value of the list of target applications.",
			"routing": {
				"send": {
					"property": "TargetApplications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Rule"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connectors/{voiceConnectorId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connectors/{voiceConnectorId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the Amazon Chime Voice Connector.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Require Encryption",
			"name": "RequireEncryption",
			"type": "boolean",
			"default": true,
			"description": "When enabled, requires encryption for the Amazon Chime Voice Connector.",
			"routing": {
				"send": {
					"property": "RequireEncryption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connectors/{voiceConnectorId}/emergency-calling-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/emergency-calling-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connectors/{voiceConnectorId}/emergency-calling-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Emergency Calling Configuration",
			"name": "EmergencyCallingConfiguration",
			"type": "json",
			"default": "{\n  \"DNIS\": [\n    {\n      \"EmergencyPhoneNumber\": {},\n      \"TestPhoneNumber\": {},\n      \"CallingCountry\": {}\n    }\n  ]\n}",
			"description": "The emergency calling configuration details associated with an Amazon Chime Voice Connector.",
			"routing": {
				"send": {
					"property": "EmergencyCallingConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Emergency Calling Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connector-groups/{voiceConnectorGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Group Id",
			"name": "voiceConnectorGroupId",
			"required": true,
			"description": "The Amazon Chime Voice Connector group ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connector-groups/{voiceConnectorGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Group Id",
			"name": "voiceConnectorGroupId",
			"required": true,
			"description": "The Amazon Chime Voice Connector group ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connector-groups/{voiceConnectorGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Group Id",
			"name": "voiceConnectorGroupId",
			"required": true,
			"description": "The Amazon Chime Voice Connector group ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the Amazon Chime Voice Connector group.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Voice Connector Items",
			"name": "VoiceConnectorItems",
			"type": "json",
			"default": "[\n  {\n    \"Priority\": {}\n  }\n]",
			"description": "The <code>VoiceConnectorItems</code> to associate with the group.",
			"routing": {
				"send": {
					"property": "VoiceConnectorItems",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connectors/{voiceConnectorId}/origination",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/origination",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connectors/{voiceConnectorId}/origination",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Origination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Origination",
			"name": "Origination",
			"type": "json",
			"default": "{\n  \"Routes\": [\n    {\n      \"Host\": {},\n      \"Port\": {},\n      \"Protocol\": {},\n      \"Priority\": {},\n      \"Weight\": {}\n    }\n  ],\n  \"Disabled\": {}\n}",
			"description": "<p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>",
			"routing": {
				"send": {
					"property": "Origination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Origination"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime voice connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connectors/{voiceConnectorId}/programmable-numbers/proxy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime voice connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Proxy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Default Session Expiry Minutes",
			"name": "DefaultSessionExpiryMinutes",
			"type": "number",
			"default": 0,
			"description": "The default number of minutes allowed for proxy sessions.",
			"routing": {
				"send": {
					"property": "DefaultSessionExpiryMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Proxy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number Pool Countries",
			"name": "PhoneNumberPoolCountries",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The countries for proxy phone numbers to be selected from.",
			"routing": {
				"send": {
					"property": "PhoneNumberPoolCountries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Fall Back Phone Number",
			"name": "FallBackPhoneNumber",
			"type": "string",
			"default": "",
			"description": "The phone number to route calls to after a proxy session expires.",
			"routing": {
				"send": {
					"property": "FallBackPhoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Disabled",
			"name": "Disabled",
			"type": "boolean",
			"default": true,
			"description": "When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.",
			"routing": {
				"send": {
					"property": "Disabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Proxy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connectors/{voiceConnectorId}/streaming-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/streaming-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connectors/{voiceConnectorId}/streaming-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Streaming Configuration",
			"name": "StreamingConfiguration",
			"type": "json",
			"default": "{\n  \"Disabled\": {},\n  \"StreamingNotificationTargets\": {}\n}",
			"description": "The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.",
			"routing": {
				"send": {
					"property": "StreamingConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Streaming Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /voice-connectors/{voiceConnectorId}/termination",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/termination",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connectors/{voiceConnectorId}/termination",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Termination",
			"name": "Termination",
			"type": "json",
			"default": "{\n  \"DefaultPhoneNumber\": {},\n  \"CallingRegions\": {},\n  \"CidrAllowedList\": {},\n  \"Disabled\": {}\n}",
			"description": "Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.",
			"routing": {
				"send": {
					"property": "Termination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connectors/{voiceConnectorId}/termination/credentials#operation=delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "delete",
			"type": "options",
			"options": [
				{
					"name": "Delete",
					"value": "delete"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Usernames",
			"name": "Usernames",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.",
			"routing": {
				"send": {
					"property": "Usernames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}#scope=app-instance-user-membership&app-instance-user-arn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel to which the user belongs.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "App Instance User Arn",
			"name": "app-instance-user-arn",
			"required": true,
			"description": "The ARN of the user in a channel.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app-instance-user-arn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"default": "app-instance-user-membership",
			"type": "options",
			"options": [
				{
					"name": "App Instance User Membership",
					"value": "app-instance-user-membership"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Membership For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}#scope=app-instance-user-moderated-channel&app-instance-user-arn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the moderated channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "App Instance User Arn",
			"name": "app-instance-user-arn",
			"required": true,
			"description": "The ARN of the <code>AppInstanceUser</code> in the moderated channel.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app-instance-user-arn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"default": "app-instance-user-moderated-channel",
			"type": "options",
			"options": [
				{
					"name": "App Instance User Moderated Channel",
					"value": "app-instance-user-moderated-channel"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Channel Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users/{userId}#operation=disassociate-phone-number",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Number From User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Number From User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Number From User"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "disassociate-phone-number",
			"type": "options",
			"options": [
				{
					"name": "Disassociate Phone Number",
					"value": "disassociate-phone-number"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Number From User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Number From User"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connectors/{voiceConnectorId}#operation=disassociate-phone-numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "disassociate-phone-numbers",
			"type": "options",
			"options": [
				{
					"name": "Disassociate Phone Numbers",
					"value": "disassociate-phone-numbers"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "E 164 Phone Numbers",
			"name": "E164PhoneNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of phone numbers, in E.164 format.",
			"routing": {
				"send": {
					"property": "E164PhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connector-groups/{voiceConnectorGroupId}#operation=disassociate-phone-numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Group Id",
			"name": "voiceConnectorGroupId",
			"required": true,
			"description": "The Amazon Chime Voice Connector group ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "disassociate-phone-numbers",
			"type": "options",
			"options": [
				{
					"name": "Disassociate Phone Numbers",
					"value": "disassociate-phone-numbers"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "E 164 Phone Numbers",
			"name": "E164PhoneNumbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of phone numbers, in E.164 format.",
			"routing": {
				"send": {
					"property": "E164PhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Phone Numbers From Voice Connector Group"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}#operation=disassociate-signin-delegate-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Signin Delegate Groups From Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Signin Delegate Groups From Account"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "disassociate-signin-delegate-groups",
			"type": "options",
			"options": [
				{
					"name": "Disassociate Signin Delegate Groups",
					"value": "disassociate-signin-delegate-groups"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Signin Delegate Groups From Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Group Names",
			"name": "GroupNames",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The sign-in delegate group names.",
			"routing": {
				"send": {
					"property": "GroupNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Signin Delegate Groups From Account"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Signin Delegate Groups From Account"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Account Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /accounts/{accountId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account Settings",
			"name": "AccountSettings",
			"type": "json",
			"default": "{\n  \"EnableDialOut\": {}\n}",
			"description": "Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href=\"https://docs.aws.amazon.com/chime/latest/ag/policies.html\">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.",
			"routing": {
				"send": {
					"property": "AccountSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Account Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instances/{appInstanceArn}/retention-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get App Instance Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get App Instance Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get App Instance Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /app-instances/{appInstanceArn}/retention-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "appInstanceArn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Retention Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Instance Retention Settings",
			"name": "AppInstanceRetentionSettings",
			"type": "json",
			"default": "{\n  \"ChannelRetentionSettings\": {\n    \"RetentionDays\": {}\n  }\n}",
			"description": "The details of the data-retention settings for an <code>AppInstance</code>.",
			"routing": {
				"send": {
					"property": "AppInstanceRetentionSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put App Instance Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/bots/{botId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Bot"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Bot"
					]
				}
			}
		},
		{
			"displayName": "Bot Id",
			"name": "botId",
			"required": true,
			"description": "The bot ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Bot"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Bot"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/bots/{botId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Bot"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Bot"
					]
				}
			}
		},
		{
			"displayName": "Bot Id",
			"name": "botId",
			"required": true,
			"description": "The bot ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Bot"
					]
				}
			}
		},
		{
			"displayName": "Disabled",
			"name": "Disabled",
			"type": "boolean",
			"default": true,
			"description": "When true, stops the specified bot from running in your account.",
			"routing": {
				"send": {
					"property": "Disabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Bot"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Bot"
					]
				}
			}
		},
		{
			"displayName": "GET /settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Global Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Global Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Global Settings"
					]
				}
			}
		},
		{
			"displayName": "Business Calling",
			"name": "BusinessCalling",
			"type": "json",
			"default": "{}",
			"description": "The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.",
			"routing": {
				"send": {
					"property": "BusinessCalling",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Global Settings"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector",
			"name": "VoiceConnector",
			"type": "json",
			"default": "{}",
			"description": "The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.",
			"routing": {
				"send": {
					"property": "VoiceConnector",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Global Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Global Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /endpoints/messaging-session",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Messaging Session Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Messaging Session Endpoint"
					]
				}
			}
		},
		{
			"displayName": "GET /phone-number-orders/{phoneNumberOrderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number Order"
					]
				}
			}
		},
		{
			"displayName": "Phone Number Order Id",
			"name": "phoneNumberOrderId",
			"required": true,
			"description": "The ID for the phone number order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number Order"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number Order"
					]
				}
			}
		},
		{
			"displayName": "GET /settings/phone-number",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Phone Number Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /settings/phone-number",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Calling Name",
			"name": "CallingName",
			"type": "string",
			"default": "",
			"description": "The default outbound calling name for the account.",
			"routing": {
				"send": {
					"property": "CallingName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Phone Number Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/retention-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /accounts/{accountId}/retention-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Retention Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Retention Settings",
			"name": "RetentionSettings",
			"type": "json",
			"default": "{\n  \"RoomRetentionSettings\": {\n    \"RetentionDays\": {}\n  },\n  \"ConversationRetentionSettings\": {}\n}",
			"description": "The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.",
			"routing": {
				"send": {
					"property": "RetentionSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Retention Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /sip-media-applications/{sipMediaApplicationId}/logging-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Media Application Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Id",
			"name": "sipMediaApplicationId",
			"required": true,
			"description": "The SIP media application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Media Application Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Sip Media Application Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "PUT /sip-media-applications/{sipMediaApplicationId}/logging-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Sip Media Application Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Id",
			"name": "sipMediaApplicationId",
			"required": true,
			"description": "The SIP media application ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Sip Media Application Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Logging Configuration",
			"name": "SipMediaApplicationLoggingConfiguration",
			"type": "json",
			"default": "{}",
			"description": "Logging configuration of the SIP media application.",
			"routing": {
				"send": {
					"property": "SipMediaApplicationLoggingConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Sip Media Application Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Sip Media Application Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "License Type",
			"name": "LicenseType",
			"type": "options",
			"default": "Basic",
			"description": "The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.",
			"options": [
				{
					"name": "Basic",
					"value": "Basic"
				},
				{
					"name": "Plus",
					"value": "Plus"
				},
				{
					"name": "Pro",
					"value": "Pro"
				},
				{
					"name": "Pro Trial",
					"value": "ProTrial"
				}
			],
			"routing": {
				"send": {
					"property": "LicenseType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "User Type",
			"name": "UserType",
			"type": "options",
			"default": "PrivateUser",
			"description": "The user type.",
			"options": [
				{
					"name": "Private User",
					"value": "PrivateUser"
				},
				{
					"name": "Shared Device",
					"value": "SharedDevice"
				}
			],
			"routing": {
				"send": {
					"property": "UserType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Alexa For Business Metadata",
			"name": "AlexaForBusinessMetadata",
			"type": "json",
			"default": "{\n  \"AlexaForBusinessRoomArn\": {}\n}",
			"description": "The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.",
			"routing": {
				"send": {
					"property": "AlexaForBusinessMetadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}/users/{userId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User Settings"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User Settings"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get User Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /accounts/{accountId}/users/{userId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User Settings"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User Settings"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Settings",
			"name": "UserSettings",
			"type": "json",
			"default": "{\n  \"Telephony\": {\n    \"InboundCalling\": {},\n    \"OutboundCalling\": {},\n    \"SMS\": {}\n  }\n}",
			"description": "Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.",
			"routing": {
				"send": {
					"property": "UserSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update User Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/logging-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "PUT /voice-connectors/{voiceConnectorId}/logging-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Logging Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Logging Configuration",
			"name": "LoggingConfiguration",
			"type": "json",
			"default": "{\n  \"EnableMediaMetricLogs\": {}\n}",
			"description": "The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.",
			"routing": {
				"send": {
					"property": "LoggingConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Logging Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/termination/health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Termination Health"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Termination Health"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Voice Connector Termination Health"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users#operation=add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "add",
			"type": "options",
			"options": [
				{
					"name": "Add",
					"value": "add"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Email List",
			"name": "UserEmailList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The user email addresses to which to send the email invitation.",
			"routing": {
				"send": {
					"property": "UserEmailList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"displayName": "User Type",
			"name": "UserType",
			"type": "options",
			"default": "PrivateUser",
			"description": "The user type.",
			"options": [
				{
					"name": "Private User",
					"value": "PrivateUser"
				},
				{
					"name": "Shared Device",
					"value": "SharedDevice"
				}
			],
			"routing": {
				"send": {
					"property": "UserType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"displayName": "GET /app-instance-users#app-instance-arn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Users"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "app-instance-arn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app-instance-arn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Users"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of requests that you want returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Users"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token passed by previous API calls until all requested users are returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Users"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Users"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Users"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List App Instance Users"
					]
				}
			}
		},
		{
			"displayName": "GET /meetings/{meetingId}/attendees/{attendeeId}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendee Tags"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendee Tags"
					]
				}
			}
		},
		{
			"displayName": "Attendee Id",
			"name": "attendeeId",
			"required": true,
			"description": "The Amazon Chime SDK attendee ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendee Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Attendee Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /channels#scope=app-instance-user-memberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "App Instance User Arn",
			"name": "app-instance-user-arn",
			"description": "The ARN of the <code>AppInstanceUser</code>s",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app-instance-user-arn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of users that you want returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token returned from previous API requests until the number of channel memberships is reached.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"default": "app-instance-user-memberships",
			"type": "options",
			"options": [
				{
					"name": "App Instance User Memberships",
					"value": "app-instance-user-memberships"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Memberships For App Instance User"
					]
				}
			}
		},
		{
			"displayName": "GET /channels/{channelArn}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "sort-order",
			"description": "The order in which you want messages sorted. Default is Descending, based on time created.",
			"default": "ASCENDING",
			"type": "options",
			"options": [
				{
					"name": "ASCENDING",
					"value": "ASCENDING"
				},
				{
					"name": "DESCENDING",
					"value": "DESCENDING"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort-order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Not Before",
			"name": "not-before",
			"description": "The initial or starting time stamp for your requested messages.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "not-before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Not After",
			"name": "not-after",
			"description": "The final or ending time stamp for your requested messages.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "not-after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of messages that you want returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token passed by previous API calls until all requested messages are returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channel Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /channels/{channelArn}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content",
			"name": "Content",
			"type": "string",
			"default": "",
			"description": "The content of the message.",
			"routing": {
				"send": {
					"property": "Content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "STANDARD",
			"description": "The type of message, <code>STANDARD</code> or <code>CONTROL</code>.",
			"options": [
				{
					"name": "STANDARD",
					"value": "STANDARD"
				},
				{
					"name": "CONTROL",
					"value": "CONTROL"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Persistence",
			"name": "Persistence",
			"type": "options",
			"default": "PERSISTENT",
			"description": "Boolean that controls whether the message is persisted on the back end. Required.",
			"options": [
				{
					"name": "PERSISTENT",
					"value": "PERSISTENT"
				},
				{
					"name": "NON PERSISTENT",
					"value": "NON_PERSISTENT"
				}
			],
			"routing": {
				"send": {
					"property": "Persistence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "string",
			"default": "",
			"description": "The optional metadata for each message.",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Request Token",
			"name": "ClientRequestToken",
			"type": "string",
			"default": "",
			"description": "The <code>Idempotency</code> token for each client request.",
			"routing": {
				"send": {
					"property": "ClientRequestToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Send Channel Message"
					]
				}
			}
		},
		{
			"displayName": "GET /channels#app-instance-arn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "App Instance Arn",
			"name": "app-instance-arn",
			"required": true,
			"description": "The ARN of the <code>AppInstance</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app-instance-arn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Privacy",
			"name": "privacy",
			"description": "The privacy setting. <code>PUBLIC</code> retrieves all the public channels. <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code> can retrieve private channels. ",
			"default": "PUBLIC",
			"type": "options",
			"options": [
				{
					"name": "PUBLIC",
					"value": "PUBLIC"
				},
				{
					"name": "PRIVATE",
					"value": "PRIVATE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "privacy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of channels that you want to return.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token passed by previous API calls until all requested channels are returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /channels#scope=app-instance-user-moderated-channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "App Instance User Arn",
			"name": "app-instance-user-arn",
			"description": "The ARN of the user in the moderated channel.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app-instance-user-arn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of channels in the request.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token returned from previous API requests until the number of channels moderated by the user is reached.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"default": "app-instance-user-moderated-channels",
			"type": "options",
			"options": [
				{
					"name": "App Instance User Moderated Channels",
					"value": "app-instance-user-moderated-channels"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels Moderated By App Instance User"
					]
				}
			}
		},
		{
			"displayName": "GET /meetings/{meetingId}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meeting Tags"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meeting Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Meeting Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /phone-numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "The phone number status.",
			"default": "AcquireInProgress",
			"type": "options",
			"options": [
				{
					"name": "Acquire In Progress",
					"value": "AcquireInProgress"
				},
				{
					"name": "Acquire Failed",
					"value": "AcquireFailed"
				},
				{
					"name": "Unassigned",
					"value": "Unassigned"
				},
				{
					"name": "Assigned",
					"value": "Assigned"
				},
				{
					"name": "Release In Progress",
					"value": "ReleaseInProgress"
				},
				{
					"name": "Delete In Progress",
					"value": "DeleteInProgress"
				},
				{
					"name": "Release Failed",
					"value": "ReleaseFailed"
				},
				{
					"name": "Delete Failed",
					"value": "DeleteFailed"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "product-type",
			"description": "The phone number product type.",
			"default": "BusinessCalling",
			"type": "options",
			"options": [
				{
					"name": "Business Calling",
					"value": "BusinessCalling"
				},
				{
					"name": "Voice Connector",
					"value": "VoiceConnector"
				},
				{
					"name": "Sip Media Application Dial In",
					"value": "SipMediaApplicationDialIn"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "product-type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Name",
			"name": "filter-name",
			"description": "The filter to use to limit the number of results.",
			"default": "AccountId",
			"type": "options",
			"options": [
				{
					"name": "Account Id",
					"value": "AccountId"
				},
				{
					"name": "User Id",
					"value": "UserId"
				},
				{
					"name": "Voice Connector Id",
					"value": "VoiceConnectorId"
				},
				{
					"name": "Voice Connector Group Id",
					"value": "VoiceConnectorGroupId"
				},
				{
					"name": "Sip Rule Id",
					"value": "SipRuleId"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "filter-name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Filter Value",
			"name": "filter-value",
			"description": "The value to use for the filter.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter-value",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token to use to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "GET /phone-number-countries#product-type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Supported Phone Number Countries"
					]
				}
			}
		},
		{
			"displayName": "Product Type",
			"name": "product-type",
			"required": true,
			"description": "The phone number product type.",
			"default": "BusinessCalling",
			"type": "options",
			"options": [
				{
					"name": "Business Calling",
					"value": "BusinessCalling"
				},
				{
					"name": "Voice Connector",
					"value": "VoiceConnector"
				},
				{
					"name": "Sip Media Application Dial In",
					"value": "SipMediaApplicationDialIn"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "product-type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Supported Phone Number Countries"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Supported Phone Number Countries"
					]
				}
			}
		},
		{
			"displayName": "GET /tags#arn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Arn",
			"name": "arn",
			"required": true,
			"description": "The resource ARN.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "arn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /voice-connectors/{voiceConnectorId}/termination/credentials",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users/{userId}#operation=logout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Logout User"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Logout User"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Logout User"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "logout",
			"type": "options",
			"options": [
				{
					"name": "Logout",
					"value": "logout"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Logout User"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Logout User"
					]
				}
			}
		},
		{
			"displayName": "POST /voice-connectors/{voiceConnectorId}/termination/credentials#operation=put",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Voice Connector Id",
			"name": "voiceConnectorId",
			"required": true,
			"description": "The Amazon Chime Voice Connector ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "put",
			"type": "options",
			"options": [
				{
					"name": "Put",
					"value": "put"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Credentials",
			"name": "Credentials",
			"type": "json",
			"default": "[\n  {\n    \"Password\": {}\n  }\n]",
			"description": "The termination SIP credentials.",
			"routing": {
				"send": {
					"property": "Credentials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Voice Connector Termination Credentials"
					]
				}
			}
		},
		{
			"displayName": "POST /channels/{channelArn}/messages/{messageId}#operation=redact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel containing the messages that you want to redact.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "messageId",
			"required": true,
			"description": "The ID of the message being redacted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Channel Message"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "redact",
			"type": "options",
			"options": [
				{
					"name": "Redact",
					"value": "redact"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Channel Message"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Channel Message"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/conversations/{conversationId}/messages/{messageId}#operation=redact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Conversation Message"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Conversation Message"
					]
				}
			}
		},
		{
			"displayName": "Conversation Id",
			"name": "conversationId",
			"required": true,
			"description": "The conversation ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Conversation Message"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "messageId",
			"required": true,
			"description": "The message ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Conversation Message"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "redact",
			"type": "options",
			"options": [
				{
					"name": "Redact",
					"value": "redact"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Conversation Message"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Conversation Message"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/rooms/{roomId}/messages/{messageId}#operation=redact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Room Message"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Room Message"
					]
				}
			}
		},
		{
			"displayName": "Room Id",
			"name": "roomId",
			"required": true,
			"description": "The room ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Room Message"
					]
				}
			}
		},
		{
			"displayName": "Message Id",
			"name": "messageId",
			"required": true,
			"description": "The message ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Room Message"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "redact",
			"type": "options",
			"options": [
				{
					"name": "Redact",
					"value": "redact"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Room Message"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Redact Room Message"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/bots/{botId}#operation=regenerate-security-token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Regenerate Security Token"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Regenerate Security Token"
					]
				}
			}
		},
		{
			"displayName": "Bot Id",
			"name": "botId",
			"required": true,
			"description": "The bot ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Regenerate Security Token"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "regenerate-security-token",
			"type": "options",
			"options": [
				{
					"name": "Regenerate Security Token",
					"value": "regenerate-security-token"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Regenerate Security Token"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Regenerate Security Token"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/{accountId}/users/{userId}#operation=reset-personal-pin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Reset Personal PIN"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "The Amazon Chime account ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Reset Personal PIN"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "The user ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Reset Personal PIN"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "reset-personal-pin",
			"type": "options",
			"options": [
				{
					"name": "Reset Personal Pin",
					"value": "reset-personal-pin"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Reset Personal PIN"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Reset Personal PIN"
					]
				}
			}
		},
		{
			"displayName": "POST /phone-numbers/{phoneNumberId}#operation=restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Phone Number Id",
			"name": "phoneNumberId",
			"required": true,
			"description": "The phone number.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "restore",
			"type": "options",
			"options": [
				{
					"name": "Restore",
					"value": "restore"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Phone Number"
					]
				}
			}
		},
		{
			"displayName": "GET /search#type=phone-numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Area Code",
			"name": "area-code",
			"description": "The area code used to filter results. Only applies to the US.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "area-code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"description": "The city used to filter results. Only applies to the US.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"description": "The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"description": "The state used to filter results. Required only if you provide <code>City</code>. Only applies to the US.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Toll Free Prefix",
			"name": "toll-free-prefix",
			"description": "The toll-free prefix that you use to filter results. Only applies to the US.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toll-free-prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Phone Number Type",
			"name": "phone-number-type",
			"description": "The phone number type used to filter results. Required for non-US numbers.",
			"default": "Local",
			"type": "options",
			"options": [
				{
					"name": "Local",
					"value": "Local"
				},
				{
					"name": "Toll Free",
					"value": "TollFree"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "phone-number-type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": "The maximum number of results to return in a single call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": "The token used to retrieve the next page of results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "phone-numbers",
			"type": "options",
			"options": [
				{
					"name": "Phone Numbers",
					"value": "phone-numbers"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Search Available Phone Numbers"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/transcription#operation=start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The unique ID of the meeting being transcribed.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "start",
			"type": "options",
			"options": [
				{
					"name": "Start",
					"value": "start"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Meeting Transcription"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Transcription Configuration",
			"name": "TranscriptionConfiguration",
			"type": "json",
			"default": "{\n  \"EngineTranscribeSettings\": {\n    \"LanguageCode\": {},\n    \"VocabularyFilterMethod\": {},\n    \"VocabularyFilterName\": {},\n    \"VocabularyName\": {},\n    \"Region\": {},\n    \"EnablePartialResultsStabilization\": {},\n    \"PartialResultsStability\": {},\n    \"ContentIdentificationType\": {},\n    \"ContentRedactionType\": {},\n    \"PiiEntityTypes\": {},\n    \"LanguageModelName\": {},\n    \"IdentifyLanguage\": {},\n    \"LanguageOptions\": {},\n    \"PreferredLanguage\": {},\n    \"VocabularyNames\": {},\n    \"VocabularyFilterNames\": {}\n  },\n  \"EngineTranscribeMedicalSettings\": {}\n}",
			"description": "The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.",
			"routing": {
				"send": {
					"property": "TranscriptionConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/transcription#operation=stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The unique ID of the meeting for which you stop transcription.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "stop",
			"type": "options",
			"options": [
				{
					"name": "Stop",
					"value": "stop"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Meeting Transcription"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/attendees/{attendeeId}/tags#operation=add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Attendee Id",
			"name": "attendeeId",
			"required": true,
			"description": "The Amazon Chime SDK attendee ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "add",
			"type": "options",
			"options": [
				{
					"name": "Add",
					"value": "add"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Attendee"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tag key-value pairs.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Attendee"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/tags#operation=add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Meeting"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Meeting"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "add",
			"type": "options",
			"options": [
				{
					"name": "Add",
					"value": "add"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Meeting"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tag key-value pairs.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Meeting"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Meeting"
					]
				}
			}
		},
		{
			"displayName": "POST /tags#operation=tag-resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "tag-resource",
			"type": "options",
			"options": [
				{
					"name": "Tag Resource",
					"value": "tag-resource"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ARN",
			"name": "ResourceARN",
			"type": "string",
			"default": "",
			"description": "The resource ARN.",
			"routing": {
				"send": {
					"property": "ResourceARN",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "The tag key-value pairs.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/attendees/{attendeeId}/tags#operation=delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Attendee Id",
			"name": "attendeeId",
			"required": true,
			"description": "The Amazon Chime SDK attendee ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "delete",
			"type": "options",
			"options": [
				{
					"name": "Delete",
					"value": "delete"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Attendee"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The tag keys.",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Attendee"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Attendee"
					]
				}
			}
		},
		{
			"displayName": "POST /meetings/{meetingId}/tags#operation=delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Meeting"
					]
				}
			}
		},
		{
			"displayName": "Meeting Id",
			"name": "meetingId",
			"required": true,
			"description": "The Amazon Chime SDK meeting ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Meeting"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "delete",
			"type": "options",
			"options": [
				{
					"name": "Delete",
					"value": "delete"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Meeting"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The tag keys.",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Meeting"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Meeting"
					]
				}
			}
		},
		{
			"displayName": "POST /tags#operation=untag-resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "operation",
			"required": true,
			"default": "untag-resource",
			"type": "options",
			"options": [
				{
					"name": "Untag Resource",
					"value": "untag-resource"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ARN",
			"name": "ResourceARN",
			"type": "string",
			"default": "",
			"description": "The resource ARN.",
			"routing": {
				"send": {
					"property": "ResourceARN",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The tag keys.",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "PUT /channels/{channelArn}/readMarker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Read Marker"
					]
				}
			}
		},
		{
			"displayName": "Channel Arn",
			"name": "channelArn",
			"required": true,
			"description": "The ARN of the channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Read Marker"
					]
				}
			}
		},
		{
			"displayName": "X Amz Chime Bearer",
			"name": "x-amz-chime-bearer",
			"description": "The <code>AppInstanceUserArn</code> of the user that makes the API call.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-chime-bearer": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Read Marker"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel Read Marker"
					]
				}
			}
		},
		{
			"displayName": "POST /sip-media-applications/{sipMediaApplicationId}/calls/{transactionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "Sip Media Application Id",
			"name": "sipMediaApplicationId",
			"required": true,
			"description": "The ID of the SIP media application handling the call.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "Transaction Id",
			"name": "transactionId",
			"required": true,
			"description": "The ID of the call transaction.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application Call"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Arguments",
			"name": "Arguments",
			"type": "json",
			"default": "{}",
			"description": "Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.",
			"routing": {
				"send": {
					"property": "Arguments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Sip Media Application Call"
					]
				}
			}
		},
		{
			"displayName": "POST /emergency-calling/address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Aws Account Id",
			"name": "AwsAccountId",
			"type": "string",
			"default": "",
			"description": "The AWS account ID.",
			"routing": {
				"send": {
					"property": "AwsAccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street Number",
			"name": "StreetNumber",
			"type": "string",
			"default": "",
			"description": "The address street number, such as <code>200</code> or <code>2121</code>.",
			"routing": {
				"send": {
					"property": "StreetNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street Info",
			"name": "StreetInfo",
			"type": "string",
			"default": "",
			"description": "The address street information, such as <code>8th Avenue</code>.",
			"routing": {
				"send": {
					"property": "StreetInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "City",
			"name": "City",
			"type": "string",
			"default": "",
			"description": "The address city, such as <code>Portland</code>.",
			"routing": {
				"send": {
					"property": "City",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "State",
			"name": "State",
			"type": "string",
			"default": "",
			"description": "The address state, such as <code>ME</code>.",
			"routing": {
				"send": {
					"property": "State",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country",
			"name": "Country",
			"type": "string",
			"default": "",
			"description": "The address country, such as <code>US</code>. ",
			"routing": {
				"send": {
					"property": "Country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Postal Code",
			"name": "PostalCode",
			"type": "string",
			"default": "",
			"description": "The address postal code, such as <code>04352</code>.",
			"routing": {
				"send": {
					"property": "PostalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Validate E 911 Address"
					]
				}
			}
		},
];
