
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21.75A2.252 2.252 0 010 19.5V12c0-.286.054-.566.161-.833l2.88-8.41a.748.748 0 01.709-.507h3A.75.75 0 017.5 3c0 1.199 2.103 2.25 4.5 2.25S16.5 4.199 16.5 3a.75.75 0 01.75-.75h3a.75.75 0 01.709.507l2.879 8.409c.108.267.162.548.162.834v7.5a2.252 2.252 0 01-2.25 2.25H2.25zM1.5 19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-.75H21c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5V12a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v.75H3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H1.5v.75zM21 17.25h1.5v-3H21v3zm-18 0v-3H1.5v3H3zm-.769-7.5h19.537l-2.054-6h-1.827c-.54 1.756-2.941 3-5.887 3-2.945 0-5.347-1.244-5.887-3H4.286l-2.055 6z"}}),_c('path',{attrs:{"d":"M8.25 15.75a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    