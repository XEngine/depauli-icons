
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
            children.concat([_c('path',{attrs:{"d":"M3.684 24a.75.75 0 010-1.5h6.279l2.431-7.127a1.687 1.687 0 011.589-1.123h8.33c.537 0 1.043.255 1.362.682.323.436.412 1.003.237 1.516l-2.402 7.044a.75.75 0 01-.71.508H3.684zm16.579-1.5l2.229-6.536a.15.15 0 00-.022-.138.197.197 0 00-.153-.076h-8.333c-.079 0-.15.05-.176.124l-2.26 6.626h8.715z"}}),_c('path',{attrs:{"d":"M16.891 20.598c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75zm0-2a.25.25 0 100 .5.25.25 0 000-.5zM.75 24a.747.747 0 01-.75-.75c.002-4.137 3.37-7.503 7.507-7.503.758 0 1.504.114 2.223.337a.749.749 0 01-.222 1.467.731.731 0 01-.223-.034A6.015 6.015 0 001.5 23.252.75.75 0 01.75 24z"}}),_c('path',{attrs:{"d":"M7.5 15.75a4.88 4.88 0 01-4.875-4.875c0-.839.221-1.67.639-2.404.017-.035.035-.06.045-.076A4.9 4.9 0 017.5 6c2.384 0 4.448 1.774 4.812 4.13a.75.75 0 01.025.167c.025.212.038.401.038.578A4.88 4.88 0 017.5 15.75zm-3.269-5.713A3.379 3.379 0 007.5 14.25a3.38 3.38 0 003.34-2.885 7.632 7.632 0 01-6.609-1.328zm.71-1.356a6.106 6.106 0 003.952 1.435c.621 0 1.231-.093 1.817-.277A3.396 3.396 0 007.5 7.5c-.985 0-1.919.436-2.559 1.181zM17.25 10.5a.75.75 0 01-.75-.75V9H15a.75.75 0 010-1.5h3.155a.589.589 0 00.551-.372.594.594 0 00-.308-.76l-2.621-.814a2.08 2.08 0 01-1.373-1.969 2.08 2.08 0 01.617-1.477 2.08 2.08 0 011.475-.608h.004V.75a.75.75 0 011.5 0v.75h1.125a.75.75 0 010 1.5H16.5a.59.59 0 00-.595.589.587.587 0 00.351.542l2.622.814a2.083 2.083 0 011.201 1.139c.22.514.228 1.083.02 1.601A2.082 2.082 0 0118.156 9H18v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    