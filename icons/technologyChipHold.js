
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
            children.concat([_c('path',{attrs:{"d":"M6.75 16.5a.75.75 0 01-.75-.75V15H4.5v.75a.75.75 0 01-1.5 0v-.768A1.754 1.754 0 011.518 13.5H.75a.75.75 0 010-1.5h.75v-1.5H.75a.75.75 0 010-1.5h.768A1.754 1.754 0 013 7.518V6.75a.75.75 0 011.5 0v.75H6v-.75a.75.75 0 011.5 0v.768c.765.11 1.372.717 1.482 1.482h.768a.75.75 0 010 1.5H9V12h.75a.75.75 0 010 1.5h-.768A1.754 1.754 0 017.5 14.982v.768a.75.75 0 01-.75.75zM3.25 9a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h4a.25.25 0 00.25-.25v-4A.25.25 0 007.25 9h-4z"}}),_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V9a6.007 6.007 0 00-5.726-5.994A9.741 9.741 0 0119.5 9.749a.75.75 0 01-1.5.002c-.005-4.545-3.707-8.246-8.251-8.251H4.5C3.673 1.5 3 2.173 3 3s.673 1.5 1.5 1.5h2.25c4.549 0 8.25 3.701 8.25 8.25A5.256 5.256 0 019.75 18h-3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h3A2.252 2.252 0 0112 23.25a.75.75 0 01-1.5 0 .75.75 0 00-.75-.75h-3c-1.654 0-3-1.346-3-3s1.346-3 3-3h3a3.754 3.754 0 003.75-3.75A6.758 6.758 0 006.75 6H4.5c-1.654 0-3-1.346-3-3s1.346-3 3-3h5.25a9.705 9.705 0 015.177 1.5H16.5C20.635 1.5 24 4.865 24 9v14.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    