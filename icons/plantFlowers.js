
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24.016A2.252 2.252 0 010 21.766v-8.25c0-1.24 1.009-2.25 2.25-2.25h8.923a3.738 3.738 0 00-3.037-2.943 3.02 3.02 0 01-2.886 2.193c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.39 0 2.593.969 2.914 2.297 1.174.15 2.263.7 3.086 1.54V5.918A3.017 3.017 0 019 3.016c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.37-.947 2.564-2.25 2.902v2.436a5.267 5.267 0 013.086-1.54 3.01 3.01 0 012.914-2.297c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.02 3.02 0 01-2.886-2.193 3.738 3.738 0 00-3.037 2.943h8.923a2.252 2.252 0 012.25 2.25v8.25a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75v-8.25a.75.75 0 00-.75-.75H19.5v9.75h2.25zm-3.75 0v-2.25H6v2.25h12zm-15.75-9.75a.75.75 0 00-.75.75v8.25c0 .414.336.75.75.75H4.5v-9.75H2.25zm15.75 6v-2.25H6v2.25h12zm0-3.75v-2.25H6v2.25h12zm.75-9c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-13.5 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm6.75-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    