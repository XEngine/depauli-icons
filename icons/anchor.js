
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
            children.concat([_c('path',{attrs:{"d":"M11.929 24a.75.75 0 01-.75-.75v-1.532a11.339 11.339 0 01-9.251-6.008A1.502 1.502 0 013.25 13.5h1.929a.75.75 0 010 1.5H3.25a9.848 9.848 0 007.929 5.215V10.5h-3a.75.75 0 010-1.5h3V5.902A3.016 3.016 0 018.929 3c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.37-.947 2.564-2.25 2.901V9h3a.75.75 0 010 1.5h-3v9.715a9.839 9.839 0 007.923-5.204L18.679 15a.75.75 0 010-1.5h1.929a1.502 1.502 0 011.317 2.219 11.33 11.33 0 01-9.246 5.999v1.532a.75.75 0 01-.75.75zm0-22.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    