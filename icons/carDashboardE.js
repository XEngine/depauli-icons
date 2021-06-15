
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 19.5c-1.241 0-2.25-1.009-2.25-2.25S10.759 15 12 15c.427 0 .844.123 1.202.35l6.584-5.184a.748.748 0 011.209.678.749.749 0 01-.281.501l-6.584 5.183A2.252 2.252 0 0112 19.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM12.75 12a2.252 2.252 0 01-2.25-2.25v-3a2.252 2.252 0 012.25-2.25h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v.75h1.5a.75.75 0 010 1.5H12v.75c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    