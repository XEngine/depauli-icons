
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
            children.concat([_c('path',{attrs:{"d":"M15 24c-4.963 0-9-4.037-9-9a8.994 8.994 0 013-6.7V5.25C9 3.182 7.318 1.5 5.25 1.5S1.5 3.182 1.5 5.25v4.5a.75.75 0 01-1.5 0v-4.5C0 2.355 2.355 0 5.25 0s5.25 2.355 5.25 5.25v1.959A8.932 8.932 0 0115 6c4.963 0 9 4.037 9 9s-4.037 9-9 9zm0-16.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"}}),_c('path',{attrs:{"d":"M15 17.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    