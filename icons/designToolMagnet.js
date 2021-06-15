
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
            children.concat([_c('path',{attrs:{"d":"M9.761 23.738a9.434 9.434 0 01-6.716-2.778c-3.704-3.709-3.701-9.733 0-13.433L6.73 3.84l.022-.025a.48.48 0 01.024-.022L9.844.723a1.62 1.62 0 011.15-.475c.434 0 .842.168 1.148.473l2.477 2.477a1.626 1.626 0 01-.002 2.297L7.812 12.3a2.752 2.752 0 000 3.888c.518.518 1.209.804 1.944.804s1.426-.285 1.944-.804l6.805-6.805a1.615 1.615 0 011.149-.476c.435 0 .843.169 1.149.476l2.479 2.478c.631.634.632 1.665.001 2.298l-6.806 6.802a9.435 9.435 0 01-6.716 2.777zm-5.656-3.839a7.943 7.943 0 005.656 2.34c2.138 0 4.146-.83 5.654-2.337l3.182-3.18-2.654-2.654-3.182 3.182a4.225 4.225 0 01-3.005 1.243 4.22 4.22 0 01-3.005-1.243 4.256 4.256 0 010-6.01l3.182-3.182-2.65-2.65-3.178 3.18a7.943 7.943 0 00-2.339 5.655c0 2.139.83 4.147 2.338 5.655l.001.001zm15.553-4.238l2.564-2.562a.128.128 0 00-.001-.178l-2.478-2.477a.125.125 0 00-.088-.037.12.12 0 00-.084.033l-2.567 2.567 2.654 2.654zm-8.664-8.664l2.563-2.563a.124.124 0 00.001-.175l-2.476-2.476a.127.127 0 00-.178.001l-2.56 2.563 2.65 2.65z"}})])
          )
        }
      }
    