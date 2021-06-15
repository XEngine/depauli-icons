
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
            children.concat([_c('path',{attrs:{"d":"M5.286 7.5c-1.241 0-2.25-1.009-2.25-2.25S4.046 3 5.286 3s2.25 1.009 2.25 2.25S6.527 7.5 5.286 7.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM5.286 13.5a2.252 2.252 0 01-2.25-2.25c0-1.24 1.01-2.25 2.25-2.25s2.25 1.009 2.25 2.25a2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM5.286 19.5c-1.241 0-2.25-1.009-2.25-2.25S4.046 15 5.286 15s2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M5.285 24a4.67 4.67 0 01-4.663-4.663V2.707A2.71 2.71 0 013.329 0h3.913a2.71 2.71 0 012.706 2.707v14.881l6.393-11.072a1.208 1.208 0 00-.442-1.649L12.51 2.912a1.218 1.218 0 00-.61-.162l-.042.001a.749.749 0 01-.53-1.27.744.744 0 01.526-.23l.062-.001c.469 0 .934.126 1.345.363l3.388 1.956a2.71 2.71 0 01.99 3.698l-7.441 12.889 11.072-6.395a1.21 1.21 0 00.441-1.648l-1.957-3.389a1.197 1.197 0 00-.307-.35.752.752 0 01.456-1.346.74.74 0 01.456.155c.282.217.515.483.693.79l1.957 3.389a2.71 2.71 0 01-.99 3.696L7.666 23.35a.472.472 0 01-.068.032A4.653 4.653 0 015.285 24zM3.329 1.5c-.666 0-1.207.542-1.207 1.207v16.63A3.168 3.168 0 005.285 22.5c.845 0 1.639-.329 2.237-.926a3.14 3.14 0 00.927-2.237V2.707c0-.665-.541-1.207-1.206-1.207H3.329z"}})])
          )
        }
      }
    