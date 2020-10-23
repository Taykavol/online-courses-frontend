<template>
  <div class="editor relative bg-white outline-none  ">
    <editor-menu-bubble class="  " :editor="editor" :keep-in-bounds="keepInBounds" v-slot="{ commands, isActive, menu }">
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          B
        </button>

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          I
        </button>
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

      </div>
    </editor-menu-bubble>
    <editor-content class="editor__content" :editor="editor" />
    <div @click="getHTML()" class=" bg-gray-300">Cool, right?</div>
    <div class="">{{json}}</div>
  </div>
</template>

<script>
// import Icon from '~/components/temp/Icon.vue'
import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
//   Blockquote,
//   BulletList,
//   CodeBlock,
//   HardBreak,
  Heading,
//   ListItem,
//   OrderedList,
//   TodoItem,
//   TodoList,
  Bold,
//   Code,
  Italic,
//   Link,
//   Strike,
//   Underline,
//   History,
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBubble,
    // EditorFloatingMenu,
    // Icon,
  },
  data() {
    return {
      keepInBounds: true,
      json:null,
      editor: new Editor({
        extensions: [
        //   new Blockquote(),
        //   new BulletList(),
        //   new CodeBlock(),
        //   new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
        //   new ListItem(),
        //   new OrderedList(),
        //   new TodoItem(),
        //   new TodoList(),
        //   new Link(),
          new Bold(),
        //   new Code(),
          new Italic(),
        //   new Strike(),
        //   new Underline(),
        //   new History(),
        ],
        // content: [{
        //   type: 'paragraph',
        //   content: [
        //     {
        //       type: 'text',
        //       text: 'This is some inserted text. 👋',
        //     } 
        //   ]
        //   }],
        // onInit:(state) =>{
        //     console.log('hey',state)
        //     this.json = state
        // },
        // onUpdate: ({  getHTML }) => {
        //   this.json = getHTML()
        // },
      }),
    }
  },
  methods:{
        setContent() {
      // you can pass a json document
      this.editor.setContent({
        type: 'doc',
        content: [{
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'This is some inserted text. 👋',
            },
          ],
        }],
      }, true)
      // HTML string is also supported
      // this.editor.setContent('<p>This is some inserted text. 👋</p>')
      // this.editor.focus()
    },
    getHTML() {
        this.json = this.editor.getHTML()
    }
  },
  computed: {
      jsonEditor() {
          return this.editor.content
      }
  },
  mounted() {
      this.setContent()
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" >
$color-white: white;
$color-black: black;
$color-grey: gray;
.menububble {
  position: absolute;
  display: flex;
  z-index: 20;
  background: $color-black;
  border-radius: 5px;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;

  &.is-active {
    opacity: 1;
    visibility: visible;
  }

  &__button {
    display: inline-flex;
    background: transparent;
    border: 0;
    color: $color-white;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: rgba($color-white, 0.1);
    }

    &.is-active {
      background-color: rgba($color-white, 0.2);
    }
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__input {
    font: inherit;
    border: none;
    background: transparent;
    color: $color-white;
  }
}
.ProseMirror {
    outline: none;
}
.editor {
  position: relative;
  max-width: 30rem;
  margin: 0 auto 5rem auto;


  
}




// .editor {
//     height: 100vh;
// }
/* @import url('~/node_modules/tiptap/src/style.css'); */
</style>
<style >

h1 {
    @apply text-2xl leading-7
}
h2 {
    @apply text-xl
}
h3 {
    @apply text-lg
}
strong {
    @apply font-semibold
}

</style>