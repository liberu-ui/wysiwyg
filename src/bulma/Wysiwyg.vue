<template>
    <editor v-bind="$attrs"
        :toolbar="toolbar"
        :plugins="plugins"
        :init="{ menubar }"/>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
    name: 'Wysiwyg',

    components: { Editor },

    props: {
        toolbar: {
            type: String,
            default: 'newdocument undo redo bold italic strikethrough underline codesample h2 bullist numlist alignleft aligncenter alignright alignjustify blockquote indent outdent link table emoticons forecolor backcolor preview removeformat',
        },
        plugins: {
            type: String,
            default: 'codesample autolink link autoresize lists emoticons image preview table',
        },
        menubar: {
            type: [String, Boolean],
            default: false,
        },
    },
};
</script>
