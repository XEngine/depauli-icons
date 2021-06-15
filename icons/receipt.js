
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
            children.concat([_c('path',{attrs:{"d":"M8.25 13.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.25 10.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.25 7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-3a3.754 3.754 0 013.75-3.75h.75V3.75A3.754 3.754 0 018.25 0h12A3.754 3.754 0 0124 3.75v1.5a.75.75 0 01-.75.75H19.5v14.25a2.252 2.252 0 01-2.25 2.25H13.5v.75a.75.75 0 01-.75.75h-12zM12 22.5v-3.75c0-.259.044-.511.129-.75H3.75a2.252 2.252 0 00-2.25 2.25v2.25H12zm2.295-6c1.112 0 2.057.836 2.199 1.945a.757.757 0 01.006.095v1.711a.75.75 0 101.5-.001V1.5H8.25A2.252 2.252 0 006 3.75V16.5h8.295zm.834 4.5a2.231 2.231 0 01-.129-.75v-1.655a.71.71 0 00-.697-.596l-.029.001a.76.76 0 00-.774.75V21h1.629zM22.5 4.5v-.75a2.252 2.252 0 00-2.25-2.25h-.75v3h3z"}})])
          )
        }
      }
    