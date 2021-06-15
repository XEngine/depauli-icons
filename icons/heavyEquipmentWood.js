
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
            children.concat([_c('path',{attrs:{"d":"M19.5 20.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM12 19.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M7.5 20.75c-1.654 0-3-1.346-3-3s1.346-3 3-3v-7.5H6V11a2.252 2.252 0 01-2.25 2.25H1.5V17c0 .414.336.75.75.75H3a.75.75 0 010 1.5h-.75A2.252 2.252 0 010 17v-6a5.256 5.256 0 015.25-5.25H7.5c.827 0 1.5.673 1.5 1.5v4.5h5.25v-1.5h-3a.75.75 0 010-1.5h3v-1.5h-3a.75.75 0 010-1.5h3V3.5a.75.75 0 011.5 0v2.25h7.5a.75.75 0 010 1.5h-7.5v1.5h7.5a.75.75 0 010 1.5h-7.5v1.5H21a.75.75 0 010 1.5H9v1.906a3.017 3.017 0 011.5 2.594c0 1.654-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-3.75-4.5A.75.75 0 004.5 11V7.328c-1.712.352-3 1.891-3 3.672v.75h2.25z"}})])
          )
        }
      }
    