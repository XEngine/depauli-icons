
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M6 12.75c-1.241 0-2.25-1.009-2.25-2.25S4.759 8.25 6 8.25s2.25 1.009 2.25 2.25S7.241 12.75 6 12.75zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9 17.25c-1.241 0-2.25-1.009-2.25-2.25S7.759 12.75 9 12.75s2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM12 12.75c-1.241 0-2.25-1.009-2.25-2.25S10.759 8.25 12 8.25s2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM18 12.75c-1.241 0-2.25-1.009-2.25-2.25S16.759 8.25 18 8.25s2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM15 17.25c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM12 21.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM12 6.75a.75.75 0 01-.75-.75V3.75a.75.75 0 011.5 0v1.5a2.412 2.412 0 002.259-1.65l.029-.087a.748.748 0 011.383-.098c.09.179.104.383.041.573l-.029.087a3.907 3.907 0 01-3.711 2.675H12z"}})])
          )
        }
      }
    