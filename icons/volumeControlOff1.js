
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
            children.concat([_c('path',{attrs:{"d":"M16.127 22.088a1.5 1.5 0 01-.149-.007 9.005 9.005 0 01-6.285-3.543.748.748 0 01.599-1.2c.235 0 .459.112.6.3a7.498 7.498 0 005.233 2.951v-8.744a.75.75 0 011.5 0v8.744a1.489 1.489 0 01-.55 1.16 1.505 1.505 0 01-.948.339zM2.626 22.125a.752.752 0 01-.53-1.281l3.97-3.97h-1.19c-.827 0-1.5-.673-1.5-1.5v-4.5c0-.827.673-1.5 1.5-1.5h3.828a9.003 9.003 0 017.27-5.205 1.496 1.496 0 011.618 1.177l3.253-3.253a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-18.75 18.75a.734.734 0 01-.529.222zm2.25-6.75h2.689l8.561-8.561V5.663h-.016a7.468 7.468 0 00-6.21 4.734.746.746 0 01-.699.477H4.876v4.501z"}})])
          )
        }
      }
    