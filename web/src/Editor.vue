<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import { HocuspocusProvider } from "@hocuspocus/provider";
import TipTapCollaboration from "@tiptap/extension-collaboration";

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

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    const provider = new HocuspocusProvider({
      url: "ws://127.0.0.1:8000",
      name: "my-test-page",
      onAwarenessUpdate(data) {
        console.log('awareness', data);
      },
      onStatus: ({ status }) => {
        console.log({ status });
      },
    });

    this.editor = new Editor({
      extensions: [
				...TIP_TAP_EXTENSIONS,
				TipTapCollaboration.configure({
					document: provider.document,
					field: 'default'
				}),
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>