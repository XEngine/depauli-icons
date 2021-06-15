
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
            children.concat([_c('path',{attrs:{"d":"M6.75 9.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM17.25 20.25c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M3.5 23.25A2.754 2.754 0 01.75 20.5v-17A2.754 2.754 0 013.5.75h17a2.754 2.754 0 012.75 2.75v17a2.754 2.754 0 01-2.75 2.75h-17zm17-1.5c.689 0 1.25-.561 1.25-1.25v-7.75h-9v9h7.75zM2.25 20.5c0 .689.561 1.25 1.25 1.25h7.75v-9h-9v7.75zm19.5-9.25V3.5c0-.689-.561-1.25-1.25-1.25h-7.75v9h9zm-10.5 0v-9H3.5c-.689 0-1.25.561-1.25 1.25v7.75h9z"}})])
          )
        }
      }
    