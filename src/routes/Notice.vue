// <template>
//   <div class="editor">
//     <editor-menu-bar v-if="swMenubar" :editor="editor" v-slot="{ commands, isActive, getMarkAttrs }">
//       <div class="menubar">
//         <button class="menubar__button" @click.prevent="showLinkMenu(getMarkAttrs('link'))" :class="{ 'is-active': isActive.link() }">
//           <font-awesome-icon :icon="['fas', 'link']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click.prevent="commands.bold">
//           <font-awesome-icon :icon="['fas', 'bold']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click.prevent="commands.italic">
//           <font-awesome-icon :icon="['fas', 'italic']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.strike() }" @click.prevent="commands.strike">
//           <font-awesome-icon :icon="['fas', 'strikethrough']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.underline() }" @click.prevent="commands.underline">
//           <font-awesome-icon :icon="['fas', 'underline']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.code() }" @click.prevent="commands.code">
//           <font-awesome-icon :icon="['fas', 'code']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.code_block() }" @click.prevent="commands.code_block">
//           <font-awesome-icon :icon="['fas', 'file-code']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.paragraph() }" @click.prevent="commands.paragraph">
//           <font-awesome-icon :icon="['fas', 'paragraph']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click.prevent="commands.heading({ level: 1 })">
//           H1
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click.prevent="commands.heading({ level: 2 })">
//           H2
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click.prevent="commands.heading({ level: 3 })">
//           H3
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.bullet_list() }" @click.prevent="commands.bullet_list">
//           <font-awesome-icon :icon="['fas', 'list-ul']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.ordered_list() }" @click.prevent="commands.ordered_list">
//           <font-awesome-icon :icon="['fas', 'list-ol']" />
//         </button>

//         <button class="menubar__button" :class="{ 'is-active': isActive.blockquote() }" @click.prevent="commands.blockquote">
//           <font-awesome-icon :icon="['fas', 'quote-left']" />
//         </button>

//         <button class="menubar__button" @click.prevent="commands.horizontal_rule">
//           <font-awesome-icon :icon="['fas', 'window-minimize']" />
//         </button>

//         <button class="menubar__button" @click.prevent="commands.undo">
//           <font-awesome-icon :icon="['fas', 'undo']" />
//         </button>

//         <button class="menubar__button" @click.prevent="commands.redo">
//           <font-awesome-icon :icon="['fas', 'redo']" />
//         </button>
//       </div>
//     </editor-menu-bar>

//     <editor-content class="editor__content" :editor="editor" />
//   </div>
// </template>

// <script>
// import { Editor, EditorContent, EditorMenuBar } from "tiptap";
// import { Blockquote, CodeBlock, HardBreak, Heading, HorizontalRule, OrderedList, BulletList, ListItem, TodoItem, TodoList, Bold, Code, Italic, Link, Strike, Underline, History } from "tiptap-extensions";
// export default {
//     components: {
//         EditorContent,
//         EditorMenuBar,
//     },
//     props: ["description", "menubar", "readOnly"],
//     data() {
//         return {
//             swMenubar: this.menubar,
//             linkUrl: null,
//             linkMenuIsActive: false,
//             editor: null,
//         };
//     },

//     mounted() {
//         this.editor = new Editor({
//             editable: !this.readOnly,
//             extensions: [new Blockquote(), new BulletList(), new CodeBlock(), new HardBreak(), new Heading({ levels: [1, 2, 3] }), new Link({ rel: "", target: "_blank" }), new HorizontalRule(), new ListItem(), new OrderedList(), new TodoItem(), new TodoList(), new Bold(), new Code(), new Italic(), new Strike(), new Underline(), new History()],
//             content: this.description,
//             onUpdate: ({ getHTML }) => {
//                 this.$emit("editorContent", getHTML());
//             },
//         });
//     },

//     beforeDestroy() {
//         this.editor.destroy();
//     },

//     methods: {
//         showLinkMenu(attrs) {
//             this.linkUrl = attrs.href;
//             this.linkMenuIsActive = true;
//             this.$nextTick(() => {
//                 this.$refs.linkInput.focus();
//             });
//         },

//         hideLinkMenu() {
//             this.linkUrl = null;
//             this.linkMenuIsActive = false;
//         },

//         setLinkUrl(command, url) {
//             command({ href: url, target: "_blank" });
//             this.hideLinkMenu();
//         },
//     },
// };
// </script>

// <style lang="scss" scope>
// @import "~/scss/main";

// .editor {
//     position: relative;
//     // max-width: 30rem;
//     margin: 0 auto 5rem auto;
//     .menubar {
//         text-align: center;
//         border-bottom: 1px solid #ddd;
//         padding: 0.2rem 0;
//         transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;
//         &.is-hidden {
//             visibility: hidden;
//             opacity: 0;
//         }

//         &.is-focused {
//             visibility: visible;
//             opacity: 1;
//             transition: visibility 0.2s, opacity 0.2s;
//         }

//         &__button {
//             font-weight: bold;
//             display: inline-flex;
//             background: transparent;
//             border: 0;
//             color: $black;
//             padding: 0.2rem 0.5rem;
//             margin-right: 0.2rem;
//             border-radius: 3px;
//             cursor: pointer;

//             &:hover {
//                 background-color: rgba($black, 0.05);
//             }

//             &.is-active {
//                 background-color: rgba($black, 0.1);
//             }
//         }

//         span#{&}__button {
//             font-size: 13.3333px;
//         }
//     }

//     .editor__content {
//         overflow-wrap: break-word;
//         word-wrap: break-word;
//         word-break: break-word;
//         .ProseMirror {
//             min-height: 10rem;
//             padding: 0.5rem;
//             &:focus {
//                 outline: none;
//             }
//             pre {
//                 padding: 0.7rem 1rem;
//                 border-radius: 5px;
//                 background: $black;
//                 color: $white;
//                 font-size: 0.8rem;
//                 overflow-x: auto;

//                 code {
//                     display: block;
//                 }
//             }

//             p code {
//                 padding: 0.2rem 0.4rem;
//                 border-radius: 5px;
//                 font-size: 0.8rem;
//                 font-weight: bold;
//                 background: rgba($black, 0.1);
//                 color: rgba($black, 0.8);
//             }

//             ul,
//             ol {
//                 padding-left: 1rem;
//             }

//             li > p,
//             li > ol,
//             li > ul {
//                 margin: 0;
//             }

//             a:not(.btn) {
//                 color: $black;
//                 text-decoration: underline;
//             }
//             blockquote {
//                 border-left: 3px solid rgba($black, 0.1);
//                 color: rgba($black, 0.8);
//                 padding-left: 0.8rem;
//                 font-style: italic;

//                 p {
//                     margin: 0;
//                 }
//             }

//             img {
//                 max-width: 100%;
//                 border-radius: 3px;
//             }

//             table {
//                 border-collapse: collapse;
//                 table-layout: fixed;
//                 width: 100%;
//                 margin: 0;
//                 overflow: hidden;

//                 td,
//                 th {
//                     min-width: 1em;
//                     border: 2px solid $gray-400;
//                     padding: 3px 5px;
//                     vertical-align: top;
//                     box-sizing: border-box;
//                     position: relative;
//                     > * {
//                         margin-bottom: 0;
//                     }
//                 }

//                 th {
//                     font-weight: bold;
//                     text-align: left;
//                 }

//                 .selectedCell:after {
//                     z-index: 2;
//                     position: absolute;
//                     content: "";
//                     left: 0;
//                     right: 0;
//                     top: 0;
//                     bottom: 0;
//                     background: rgba(200, 200, 255, 0.4);
//                     pointer-events: none;
//                 }

//                 .column-resize-handle {
//                     position: absolute;
//                     right: -2px;
//                     top: 0;
//                     bottom: 0;
//                     width: 4px;
//                     z-index: 20;
//                     background-color: #adf;
//                     pointer-events: none;
//                 }
//             }

//             .tableWrapper {
//                 margin: 1em 0;
//                 overflow-x: auto;
//             }

//             .resize-cursor {
//                 cursor: ew-resize;
//                 cursor: col-resize;
//             }
//         }
//     }
// }
// </style>