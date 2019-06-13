import { Link } from 'tiptap-extensions';

export default class CustomLink extends Link {
    // eslint-disable-next-line class-methods-use-this
    get schema() {
        return {
            attrs: {
                href: {
                    default: null,
                },
                target: {
                    default: null,
                },
            },
            inclusive: false,
            parseDOM: [
                {
                    tag: 'a[href]',
                    getAttrs: dom => ({
                        href: dom.getAttribute('href'),
                        target: dom.getAttribute('target'),
                    }),
                },
            ],
            toDOM: ({ attrs }) => {
                attrs.target = '_blank';
                attrs.rel = 'noopener noreferrer nofollow';
                return ['a', attrs];
            },
        };
    }
}
