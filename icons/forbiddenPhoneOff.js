
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
            children.concat([_c('path',{attrs:{"d":"M6.001 15a.75.75 0 01-.75-.75v-9a3.754 3.754 0 013.75-3.75h6a.75.75 0 010 1.5h-6a2.252 2.252 0 00-2.25 2.25v9a.75.75 0 01-.75.75zM9.001 24a3.745 3.745 0 01-2.822-1.279.747.747 0 01.071-1.059.75.75 0 011.058.071 2.245 2.245 0 001.689.767H15a2.252 2.252 0 002.25-2.25v-.75h-7.5a.75.75 0 11.001-1.5h7.5v-7.5a.75.75 0 011.5 0v9.75a3.754 3.754 0 01-3.75 3.75h-6zM.751 24a.752.752 0 01-.53-1.281l22.5-22.5c.141-.141.329-.219.53-.219s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-22.5 22.5a.744.744 0 01-.53.22z"}})])
          )
        }
      }
    