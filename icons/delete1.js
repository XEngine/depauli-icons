
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
            children.concat([_c('path',{attrs:{"d":"M11.998 24c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M16.498 17.25a.743.743 0 01-.53-.22l-3.97-3.97-3.969 3.97a.743.743 0 01-.53.22.743.743 0 01-.53-.22.744.744 0 010-1.06L10.937 12l-3.97-3.97a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53.141-.142.33-.22.53-.22s.389.078.53.22l3.97 3.97 3.969-3.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L13.058 12l3.97 3.97a.744.744 0 010 1.06.749.749 0 01-.53.22z"}})])
          )
        }
      }
    