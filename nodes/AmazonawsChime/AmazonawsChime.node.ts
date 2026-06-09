import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsChime implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-chime',
		name: 'N8nDevAmazonawsChime',
		icon: { light: 'file:./amazonaws-chime.png', dark: 'file:./amazonaws-chime.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Amazon Chime application programming interface (API) is designed so administrators can perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice Connectors. Th..',
		defaults: { name: 'amazonaws-chime' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsChimeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
