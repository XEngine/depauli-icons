
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
            children.concat([_c('path',{attrs:{"d":"M9 9a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 019 9zM15 9a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 0115 9z"}}),_c('path',{attrs:{"d":"M12 24c-4.166 0-5.662-3.705-7.362-12H3.75a.75.75 0 00-.75.75v3.879a2.258 2.258 0 011.5 2.121v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 01-1.5 0v-1.5c0-.96.615-1.808 1.5-2.121V12.75a2.252 2.252 0 012.25-2.25h.75v-3C4.5 3.365 7.865 0 12 0s7.5 3.365 7.5 7.5v3h.75a2.252 2.252 0 012.25 2.25v3.879A2.26 2.26 0 0124 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 01-1.5 0v-1.5c0-.96.615-1.808 1.5-2.121V12.75a.75.75 0 00-.75-.75h-.887C17.667 20.295 16.172 24 12 24zM6.169 12C8.039 20.97 9.493 22.5 12 22.5c2.512 0 3.967-1.53 5.832-10.5H6.169zM18 10.5v-3c0-3.308-2.692-6-6-6s-6 2.692-6 6v3h12z"}})])
          )
        }
      }
    