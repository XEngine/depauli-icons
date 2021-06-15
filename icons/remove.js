
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
            children.concat([_c('path',{attrs:{"d":"M19.5 20.25a.743.743 0 01-.53-.22L12 13.061l-6.97 6.97a.744.744 0 01-1.06 0 .752.752 0 010-1.061L10.94 12 3.97 5.03c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22L12 10.94l6.97-6.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L13.061 12l6.97 6.97a.75.75 0 01-.531 1.28z"}})])
          )
        }
      }
    