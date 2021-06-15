
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
            children.concat([_c('path',{attrs:{"d":"M9 9a.75.75 0 01-.75-.75V.75A.75.75 0 019 0h1.5a2.252 2.252 0 012.25 2.25V3c0 .563-.206 1.091-.575 1.5.37.409.575.937.575 1.5v.75A2.252 2.252 0 0110.5 9H9zm1.5-1.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-.75V7.5h.75zm0-3.75a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75h-.75v2.25h.75zM4.5 15a.75.75 0 01-.75-.75V12h-1.5v2.25a.75.75 0 01-1.5 0v-6C.75 7.009 1.759 6 3 6s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.5V8.25a.75.75 0 00-1.5 0v2.25h1.5zM15 24c-.827 0-1.5-.673-1.5-1.5v-2.25h-2.25c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h2.25V12c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v2.25h2.25c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H19.5v2.25c0 .827-.673 1.5-1.5 1.5h-3zm-3.75-5.25h3a.75.75 0 01.75.75v3h3v-3a.75.75 0 01.75-.75h3v-3h-3A.75.75 0 0118 15v-3h-3v3a.75.75 0 01-.75.75h-3v3z"}})])
          )
        }
      }
    