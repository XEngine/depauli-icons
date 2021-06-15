
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
            children.concat([_c('path',{attrs:{"d":"M1 23.75a.743.743 0 01-.53-.22C.328 23.389.25 23.2.25 23s.078-.389.22-.53l4.243-4.243-2.067-2.067a1.5 1.5 0 01.232-2.312 5.274 5.274 0 016.038.177L22.743.196a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L9.975 15.086a5.246 5.246 0 01-.458 6.822l-.03.032-.033.031a5.242 5.242 0 01-6.822.459l-1.102 1.1a.744.744 0 01-.53.22zm2.705-2.394a3.689 3.689 0 002.068.621c.751 0 1.459-.213 2.07-.621l-2.069-2.069-2.069 2.069zm2.063-6.875a3.73 3.73 0 00-2.063.618l5.198 5.197c.407-.61.62-1.318.62-2.069 0-1.002-.39-1.944-1.099-2.652a3.728 3.728 0 00-2.656-1.094z"}})])
          )
        }
      }
    