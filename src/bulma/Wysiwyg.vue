<template>
    <div class="wysiwyg">
        <editor-menu-bar :editor="editor">
            <template v-slot:default="{ commands, isActive }">
                <div class="menubar">
                    <a class="button tiptap-control"
                        @click="commands.undo">
                        <span class="icon">
                            <fa icon="undo"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        @click="commands.redo">
                        <span class="icon">
                            <fa icon="redo"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        @click="commands.horizontal_rule">
                        <span class="icon">
                            <fa icon="minus"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.bold() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.bold">
                        <span class="icon">
                            <fa icon="bold"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.italic() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.italic">
                        <span class="icon">
                            <fa icon="italic"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.strike() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.strike">
                        <span class="icon">
                            <fa icon="strikethrough"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.underline() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.underline">
                        <span class="icon">
                            <fa icon="underline"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.code() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.code">
                        <span class="icon">
                            <fa icon="terminal"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.paragraph() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.paragraph">
                        <span class="icon">
                            <fa icon="paragraph"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.heading({ level: 5 }) },
                            { 'is-inactive': !editable }
                        ]" @click="commands.heading({ level: 5 })">
                        <span class="icon">
                            <fa icon="heading"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.bullet_list() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.bullet_list">
                        <span class="icon">
                            <fa icon="list"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.ordered_list() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.ordered_list">
                        <span class="icon">
                            <fa icon="list-ol"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.paragraph({ textAlign: 'left' }) },
                            { 'is-inactive': !editable }
                        ]" @click="commands.paragraph({ textAlign: 'left' })">
                        <span class="icon">
                            <fa icon="align-left"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.paragraph({ textAlign: 'center' }) },
                            { 'is-inactive': !editable }
                        ]" @click="commands.paragraph({ textAlign: 'center' })">
                        <span class="icon">
                            <fa icon="align-center"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.paragraph({ textAlign: 'right' }) },
                            { 'is-inactive': !editable }
                        ]" @click="commands.paragraph({ textAlign: 'right' })">
                        <span class="icon">
                            <fa icon="align-right"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.blockquote() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.blockquote">
                        <span class="icon">
                            <fa icon="quote-right"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.code_block() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.code_block">
                        <span class="icon">
                            <fa icon="code"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        :class="[
                            { 'is-active': isActive.todo_list() },
                            { 'is-inactive': !editable }
                        ]" @click="commands.todo_list">
                        <span class="icon">
                            <fa icon="check-square"/>
                        </span>
                    </a>
                    <a class="button tiptap-control"
                        @click="commands.createTable({
                            rowsCount: 3, colsCount: 3, withHeaderRow: false
                        })">
                        <span class="icon">
                            <fa icon="table"/>
                        </span>
                    </a>
                    <span v-if="isActive.table()">
                        <a class="button tiptap-control"
                            @click="commands.deleteTable">
                            <span class="icon">
                                <fal>
                                    <fa icon="table"/>
                                    <fa class="has-text-danger"
                                        icon="times"
                                        transform="shrink-5 up-5 right-8"/>
                                </fal>
                            </span>
                        </a>
                        <a class="button tiptap-control"
                            @click="commands.addColumnBefore">
                            <span class="icon">
                                 <fal>
                                    <fa icon="grip-lines"
                                        transform="rotate-90"/>
                                    <fa class="has-text-success"
                                        icon="plus"
                                        transform="shrink-7 down-5 left-8"/>
                                </fal>
                            </span>
                        </a>
                        <a class="button tiptap-control"
                            @click="commands.addColumnAfter">
                            <span class="icon">
                                 <fal>
                                    <fa icon="grip-lines"
                                        transform="rotate-90"/>
                                    <fa class="has-text-success"
                                        icon="plus"
                                        transform="shrink-7 down-5 right-8"/>
                                </fal>
                            </span>
                        </a>
                        <a class="button tiptap-control"
                            @click="commands.deleteColumn">
                            <span class="icon">
                                 <fal>
                                    <fa icon="grip-lines"
                                        transform="rotate-90"/>
                                    <fa class="has-text-danger"
                                        icon="times"
                                        transform="shrink-7 up-5 right-8"/>
                                </fal>
                            </span>
                        </a>
                        <a class="button tiptap-control"
                            @click="commands.addRowBefore">
                            <span class="icon">
                                 <fal>
                                    <fa icon="grip-lines"/>
                                    <fa class="has-text-success"
                                        icon="plus"
                                        transform="shrink-7 up-7"/>
                                </fal>
                            </span>
                        </a>
                       <a class="button tiptap-control"
                            @click="commands.addRowAfter">
                            <span class="icon">
                                 <fal>
                                    <fa icon="grip-lines"/>
                                    <fa class="has-text-success"
                                        icon="plus"
                                        transform="shrink-7 down-7"/>
                                </fal>
                            </span>
                        </a>
                        <a class="button tiptap-control"
                            @click="commands.deleteRow">
                            <span class="icon">
                                 <fal>
                                    <fa icon="grip-lines"/>
                                    <fa class="has-text-danger"
                                        icon="times"
                                        transform="shrink-7 up-7 right-8"/>
                                </fal>
                            </span>
                        </a>
                        <a class="button tiptap-control"
                            @click="commands.toggleCellMerge">
                            <span class="icon">
                                <fal>
                                    <fa icon="arrow-right"
                                        transform="shrink-6 left-6"/>
                                    <fa icon="arrow-left"
                                        transform="shrink-6 right-6"/>
                                </fal>

                            </span>
                        </a>
                    </span>
                    <a class="button tiptap-control"
                        @click="editable = !editable"
                        v-if="!readonly">
                        <span class="icon">
                            <fa icon="glasses"
                                v-if="editable"/>
                            <fa icon="edit"
                                v-else/>
                        </span>
                    </a>
                </div>
            </template>
        </editor-menu-bar>
        <editor-menu-bubble class="menububble"
            :editor="editor"
            @hide="hideLinkMenu">
            <template v-slot:default="{ commands, isActive, getMarkAttrs, menu }">
                <div class="menububble"
                    :class="{ 'is-active': menu.isActive }"
                    :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`">
                    <form class="menububble__form"
                        v-if="linkMenu"
                        @submit.prevent="setLinkUrl(commands.link, linkUrl)">
                        <input class="menububble__input"
                            type="text"
                            v-model="linkUrl"
                            placeholder="https://"
                            ref="linkInput"
                            @keydown.esc="hideLinkMenu">
                        <button class="button is-small is-black"
                            @click="readonly ? null : setLinkUrl(commands.link, null)"
                            type="button">
                            <a class="delete"/>
                        </button>
                    </form>
                    <template v-else>
                        <button class="button is-small is-black"
                            @click="showLinkMenu(getMarkAttrs('link'))"
                            :class="{ 'is-active': isActive.link() }">
                            <span>{{ isActive.link() ? 'Update Link' : 'Add Link' }}</span>
                            <span class="icon">
                                <fa icon="link"/>
                            </span>
                        </button>
                    </template>
                </div>
            </template>
        </editor-menu-bubble>
        <editor-content class="editor"
            :class="{ 'is-danger': hasError }"
            :editor="editor"
            ref="editor"/>
    </div>
</template>

<script>
import {
    Editor, EditorContent, EditorMenuBar, EditorMenuBubble,
} from 'tiptap';
import {
    Blockquote, CodeBlock, HardBreak, Heading, HorizontalRule, OrderedList,
    BulletList, ListItem, TodoItem, TodoList, Bold, Code, Italic, Strike,
    Underline, History, Table, TableHeader, TableCell, TableRow, Placeholder,
} from 'tiptap-extensions';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBold, faItalic, faStrikethrough, faUnderline, faCode, faParagraph, faList,
    faListOl, faQuoteRight, faLink, faCheckSquare, faGlasses, faEdit, faTerminal,
    faHeading, faAlignLeft, faAlignRight, faAlignCenter, faTimes, faUndo, faRedo,
    faTable, faMinus, faGripLines, faPlus, faArrowLeft, faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import Link from '../classes/CustomLink';
import Paragraph from '../classes/Paragraph';

library.add(
    faBold, faItalic, faStrikethrough, faUnderline, faCode, faParagraph, faList,
    faListOl, faQuoteRight, faLink, faCheckSquare, faGlasses, faEdit, faTerminal,
    faHeading, faAlignLeft, faAlignRight, faAlignCenter, faTimes, faUndo, faRedo,
    faTable, faMinus, faGripLines, faPlus, faArrowLeft, faArrowRight,
);

export default {
    name: 'Wysiwyg',

    components: { EditorContent, EditorMenuBar, EditorMenuBubble },

    props: {
        hasError: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: 'Write something...',
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [String, Object],
            required: false,
            default: '',
        },
    },

    data: v => ({
        editor: null,
        linkUrl: null,
        linkMenu: false,
        editable: !v.readonly,
        extensions: [
            new Blockquote(),
            new BulletList(),
            new CodeBlock(),
            new HardBreak(),
            new Heading({ levels: [5] }),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new TodoItem(),
            new TodoList(),
            new Bold(),
            new Code(),
            new Italic(),
            new Link(),
            new Strike(),
            new Underline(),
            new History(),
            new Paragraph(),
            new Table(),
            new TableHeader(),
            new TableCell(),
            new TableRow(),
            new Placeholder({
                emptyClass: 'is-empty',
                emptyNodeText: v.placeholder,
                showOnlyWhenEditable: true,
            }),
        ],
    }),

    watch: {
        editable() {
            this.editor.setOptions({
                editable: this.editable,
            });
        },
    },

    mounted() {
        this.editor = new Editor({
            content: this.value,
            editable: this.editable,
            extensions: this.extensions,
            onUpdate: e => this.$emit('input', e.getHTML()),
        });

        this.$nextTick(() => {
            this.$nextTick(() => {
                const container = this.$refs.editor.$el.querySelector('.ProseMirror');
                container.classList.add('textarea');
                container.style.height = 'fit-content';
                container.style.minHeight = '120px';
            });
        });
    },

    beforeDestroy() {
        this.editor.destroy();
        this.editor = null;
    },

    methods: {
        showLinkMenu(attrs) {
            if (!this.editable) {
                return;
            }

            this.linkUrl = attrs.href;
            this.linkMenu = true;
            this.$nextTick(() => {
                this.$refs.linkInput.focus();
            });
        },
        hideLinkMenu() {
            this.linkUrl = null;
            this.linkMenu = false;
        },
        setLinkUrl(command, url) {
            command({ href: url });
            this.hideLinkMenu();
            this.editor.focus();
        },
    },
};
</script>

<style lang="scss">
    $color-black: #000000;
    $color-white: #ffffff;
    $color-grey: #dddddd;

    .wysiwyg .editor {
        word-wrap: break-word;

        p.is-empty:first-child::before {
            content: attr(data-empty-text);
            float: left;
            color: #aaa;
            pointer-events: none;
            height: 0;
            font-style: italic;
        }

        h5 {
            font-size: 1.25rem;
        }

        pre {
            padding: 0.7rem 1rem;
            border-radius: 5px;
            background: $color-black;
            color: $color-white;
            font-size: 0.8rem;
            overflow-x: auto;

            code {
                display: block;
            }
        }

        p code {
            display: inline-block;
            padding: 0 0.4rem;
            border-radius: 5px;
            font-size: 0.8rem;
            font-weight: bold;
            background: rgba($color-black, 0.1);
            color: rgba($color-black, 0.8);
        }

        ul {
            list-style-type: square;
            list-style-position: outside;
            list-style-image: none;
        }

        ul,
        ol {
        padding-left: 1rem;
        }

        li > p,
        li > ol,
        li > ul {
        margin: 0;
        }

        blockquote {
            border-left: 3px solid rgba($color-black, 0.1);
            color: rgba($color-black, 0.8);
            padding-left: 0.8rem;
            font-style: italic;

            p {
                margin: 0;
            }
        }

        img {
            max-width: 100%;
            border-radius: 3px;
        }

        table {
            border-collapse: collapse;
            table-layout: fixed;
            width: 100%;
            margin: 0;
            overflow: hidden;

            td, th {
                min-width: 1em;
                border: 2px solid $color-grey;
                padding: 3px 5px;
                vertical-align: top;
                box-sizing: border-box;
                position: relative;
                font-size: 0.8em;
                > * {
                margin-bottom: 0;
                }
            }

            th {
                font-weight: bold;
                text-align: left;
            }

            .selectedCell:after {
                z-index: 2;
                position: absolute;
                content: "";
                left: 0; right: 0; top: 0; bottom: 0;
                background: rgba(200, 200, 255, 0.4);
                pointer-events: none;
            }

            .column-resize-handle {
                position: absolute;
                right: -2px; top: 0; bottom: 0;
                width: 4px;
                z-index: 20;
                background-color: #adf;
                pointer-events: none;
            }
        }

        overflow-x: auto;
    }

    .menubar {
        margin-bottom: 0.3rem;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;

        .button.tiptap-control {
            background: 0;
            border: none;
            opacity: 0.6;
            padding-left: 0.5em;
            padding-right: 0.5em;
            -webkit-transition: opacity ease 0.3s;
            transition: opacity ease 0.3s;

            &:hover {
                opacity: 1;
            }

            &.is-active {
                opacity: 1;
            }

            &.is-inactive {
                opacity: 0.3;
                pointer-events: none;
            }
        }
    }

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
            margin-bottom: 0;
        }

        &__input {
            font: inherit;
            border: none;
            background: transparent;
            color: $color-white;
        }
    }

    ul[data-type="todo_list"] {
        padding-left: 0;
    }
    li[data-type="todo_item"] {
        display: flex;
        flex-direction: row;
    }
    .todo-checkbox {
        border: 2px solid $color-black;
        height: 0.9em;
        width: 0.9em;
        box-sizing: border-box;
        margin-right: 10px;
        margin-top: 0.3rem;
        user-select: none;
        -webkit-user-select: none;
        cursor: pointer;
        border-radius: 0.2em;
        background-color: transparent;
        transition: 0.4s background;
    }
    .todo-content {
        flex: 1;
    }
    li[data-done="true"] {
        text-decoration: line-through;
    }
    li[data-done="true"] .todo-checkbox {
        background-color: $color-black;
    }
    li[data-done="false"] {
        text-decoration: none;
    }
</style>
