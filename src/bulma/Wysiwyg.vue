<template>
    <div :class="['wysiwyg-wrapper', {'has-error': hasError}]">
        <editor v-bind="$attrs"
            :toolbar="toolbar"
            :plugins="plugins"
            :init="{ menubar }"/>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
    name: 'Wysiwyg',

    components: { Editor },

    props: {
        hasError: {
            type: Boolean,
            required: true,
        },
        menubar: {
            type: [String, Boolean],
            default: false,
        },
        plugins: {
            type: String,
            default: 'codesample autolink link autoresize lists emoticons image preview table',
        },
        toolbar: {
            type: String,
            default: 'newdocument undo redo bold italic strikethrough underline codesample h2 bullist numlist alignleft aligncenter alignright alignjustify blockquote indent outdent link table emoticons forecolor backcolor preview removeformat',
        },
    },
};
</script>

<style lang="scss">
@import 'bulma/sass/utilities/derived-variables';

.wysiwyg-wrapper.has-error {
    border: 1px solid $danger;
}
</style>
