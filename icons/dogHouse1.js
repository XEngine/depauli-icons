
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5.25 19.5A2.252 2.252 0 013 17.25V8.91l-1.781 1.425a.75.75 0 11-.938-1.17l11.25-9a.749.749 0 01.938 0l7.043 5.634a.747.747 0 01.117 1.054.75.75 0 01-1.054.117L12 1.71l-7.5 6v9.54c0 .413.336.75.75.75h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M16.5 15.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.01 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM11.25 18.75C10.009 18.75 9 17.741 9 16.5s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.01 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM21.75 18.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25S24 15.259 24 16.5s-1.01 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM13.501 24c-.402 0-.776-.154-1.058-.433a1.486 1.486 0 01-.445-1.057 1.505 1.505 0 01.304-.913L15.3 17.6a1.488 1.488 0 011.203-.6 1.487 1.487 0 011.197.6l3 4a1.496 1.496 0 01-.3 2.1c-.259.194-.579.3-.9.3h-5.999zm-.001-1.5h6l-2.999-3.999L13.5 22.5z"}})])
          )
        }
      }
    