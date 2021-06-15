
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.75.75 0 01-.75-.75V21h-9v2.25a.75.75 0 01-1.5 0v-2.379a2.258 2.258 0 01-1.5-2.121V16.5c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h1.49a9.562 9.562 0 01-.74-3.757C5.25 3.699 8.278 0 12 0s6.75 3.701 6.75 8.25a9.528 9.528 0 01-.74 3.75h1.49c.827 0 1.5.673 1.5 1.5V15c0 .827-.673 1.5-1.5 1.5v2.25c0 .96-.615 1.808-1.5 2.121v2.379a.75.75 0 01-.75.75zM6 18.75c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V16.5H6v2.25zM4.5 15h15v-1.5h-15V15zm11.857-3a8.011 8.011 0 00.893-3.743C17.25 4.53 14.895 1.5 12 1.5S6.75 4.528 6.75 8.25A8.025 8.025 0 007.643 12h8.714z"}})])
          )
        }
      }
    