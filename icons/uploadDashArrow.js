
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
            children.concat([_c('path',{attrs:{"d":"M16.5 12.751a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h1.939L12 1.812 5.56 8.251H7.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-2.25h-3a.747.747 0 01-.693-.463.745.745 0 01.163-.817l8.25-8.25a.744.744 0 011.06 0l8.25 8.25a.75.75 0 01-.53 1.281h-3v2.25a.75.75 0 01-.75.749zM16.5 18.751a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM16.5 24.001a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM7.5 18.751a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM7.5 24.001a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    