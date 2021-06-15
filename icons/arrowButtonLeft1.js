
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
            children.concat([_c('path',{attrs:{"d":"M11.689 24a.743.743 0 01-.53-.22L.44 13.06A1.483 1.483 0 010 12.001c0-.4.155-.777.438-1.06L11.159.22c.141-.142.329-.22.53-.22s.389.078.531.22c.142.141.22.33.22.53s-.078.389-.22.53L1.5 12l10.719 10.72a.752.752 0 010 1.061.746.746 0 01-.53.219z"}}),_c('path',{attrs:{"d":"M22.939 24a.743.743 0 01-.53-.22L11.69 13.06a1.5 1.5 0 01-.001-2.119L22.409.22c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53L12.75 12l10.719 10.72a.752.752 0 010 1.061.748.748 0 01-.53.219z"}})])
          )
        }
      }
    