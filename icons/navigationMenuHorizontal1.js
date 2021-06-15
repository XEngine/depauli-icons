
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
            children.concat([_c('path',{attrs:{"d":"M6 14.25A2.252 2.252 0 013.75 12c0-1.241 1.009-2.25 2.25-2.25S8.25 10.759 8.25 12A2.252 2.252 0 016 14.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM18 14.25A2.252 2.252 0 0115.75 12c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25A2.252 2.252 0 0118 14.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM12 14.25A2.252 2.252 0 019.75 12 2.252 2.252 0 0112 9.75 2.252 2.252 0 0114.25 12 2.252 2.252 0 0112 14.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M12 24.003c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}})])
          )
        }
      }
    