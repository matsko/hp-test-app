import { Server } from '@hocuspocus/server'
import { TiptapTransformer } from "@hocuspocus/transformer";

import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Strike from "@tiptap/extension-strike";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";

const TIP_TAP_EXTENSIONS = [
  Document,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  BulletList,
  ListItem,
];

const server = Server.configure({
  port: 80,
	async onLoadDocument(data) {
		const ydoc = TiptapTransformer.toYdoc(
			PAGE,	
			"default",
			TIP_TAP_EXTENSIONS,
		);
		return ydoc;
	},
})

server.listen(8000, () => {
	console.log('socket started');
});

const PAGE = {
		"type": "doc",
		"content": [
			{
				"type": "paragraph",
				"content": [
					{
						"type": "text",
						"text": "hello world!"
					}
				]
			},
		]
};