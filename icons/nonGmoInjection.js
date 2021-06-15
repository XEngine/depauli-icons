
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
            children.concat([_c('path',{attrs:{"d":"M8.251 12.75a.75.75 0 01-.75-.75V8.25a4.469 4.469 0 011.32-3.182 4.444 4.444 0 012.43-1.249V.75a.75.75 0 011.5 0v3.066a4.51 4.51 0 011.95.834.748.748 0 01.151 1.05.752.752 0 01-1.05.15 3.015 3.015 0 00-1.797-.599c-.802 0-1.556.312-2.122.878a2.981 2.981 0 00-.88 2.122V12a.754.754 0 01-.752.75zM8.251 24a.75.75 0 010-1.5h1.5v-2.25h-1.5a.75.75 0 010-1.5h6.75v-3h-2.25a.75.75 0 010-1.5h2.25V12a.75.75 0 011.5 0v6.75h1.5a.75.75 0 010 1.5h-3.75v2.25h1.5a.75.75 0 010 1.5h-7.5zm4.5-1.5v-2.25h-1.5v2.25h1.5zM.751 24a.752.752 0 01-.53-1.281l22.5-22.5c.141-.141.329-.219.53-.219s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-22.5 22.5a.744.744 0 01-.53.22z"}})])
          )
        }
      }
    