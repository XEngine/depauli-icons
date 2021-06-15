
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M8.335 19.5a1.512 1.512 0 01-1.481-1.789 5.247 5.247 0 015.148-4.211 5.267 5.267 0 015.142 4.201 1.514 1.514 0 01-1.476 1.8H8.335zm3.666-4.5a3.744 3.744 0 00-3.675 3h7.339a3.744 3.744 0 00-3.664-3zM6 10.5A.75.75 0 016 9h1.939L6.22 7.28C6.078 7.139 6 6.95 6 6.75s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3 3a.75.75 0 01-.53 1.28H6zM14.25 10.5a.75.75 0 01-.53-1.28l3-3c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53L16.061 9H18a.75.75 0 010 1.5h-3.75z"}})])
          )
        }
      }
    