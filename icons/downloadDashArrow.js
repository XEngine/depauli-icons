
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
            children.concat([_c('path',{attrs:{"d":"M12 24.001a.743.743 0 01-.53-.22l-8.25-8.25a.749.749 0 01.53-1.28h3v-2.25a.75.75 0 011.5 0v3a.75.75 0 01-.75.75H5.561L12 22.19l6.439-6.439H16.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v2.25h3a.75.75 0 01.53 1.28l-8.25 8.25a.743.743 0 01-.53.22zM7.5 9.751a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM7.5 3.751a.75.75 0 01-.75-.75V.751a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM16.5 9.751a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM16.5 3.751a.75.75 0 01-.75-.75V.751a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    