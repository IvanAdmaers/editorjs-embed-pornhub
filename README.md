# editorjs-embed-pornhub

This is an EditorJS plugin extension for embedding videos from pornhub.

## Installation

```bash
# Via npm:
npm i editorjs-embed-pornhub

# Via yarn:
yarn add editorjs-embed-pornhub
```

## Usage

```js
import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import { pornhubUrl, pornhubEmbed } from 'editorjs-embed-pornhub';

/*
  pornhubUrl example - https://www.pornhub.com/view_video.php?viewkey=1849749437

  pornhubEmbed example - https://www.pornhub.com/embed/1849749437
*/

new EditorJS({
  tools: {
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          pornhubUrl,
          pornhubEmbed,
        },
      },
    },
  },
});
```
