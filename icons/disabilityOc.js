
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
            children.concat([_c('path',{attrs:{"d":"M6.339 17.625A5.63 5.63 0 01.714 12c0-3.102 2.523-5.625 5.625-5.625S11.964 8.898 11.964 12a5.632 5.632 0 01-5.625 5.625zm0-9.75A4.13 4.13 0 002.214 12c0 2.274 1.85 4.125 4.125 4.125s4.125-1.851 4.125-4.125a4.13 4.13 0 00-4.125-4.125zM19.089 17.625a5.59 5.59 0 01-3.978-1.647 5.632 5.632 0 010-7.955 5.59 5.59 0 013.977-1.648 5.59 5.59 0 013.978 1.647c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0 4.097 4.097 0 00-2.917-1.206 4.097 4.097 0 00-2.917 1.206 4.13 4.13 0 000 5.834c.779.779 1.815 1.208 2.917 1.208s2.137-.429 2.917-1.208a.744.744 0 011.06 0 .749.749 0 010 1.06 5.582 5.582 0 01-3.977 1.649z"}})])
          )
        }
      }
    