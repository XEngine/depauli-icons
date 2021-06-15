
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
            children.concat([_c('path',{attrs:{"d":"M4.246 24.001c-.205 0-.407-.027-.602-.082a2.232 2.232 0 01-1.357-1.059 2.238 2.238 0 01-.211-1.709 31.994 31.994 0 001.497-10.28 3.302 3.302 0 01-.074-.764 1.472 1.472 0 01.594-1.173l6.906-4.825V1.5a1.487 1.487 0 01.773-1.313 1.497 1.497 0 011.131-.132l3.529.887c.455.129.812.441.991.859.157.368.161.776.012 1.148a1.488 1.488 0 01-.875.848l-3.127.967 5.947 4.17c.388.267.621.711.619 1.188.005.241-.02.498-.076.757a31.92 31.92 0 001.484 10.244A2.253 2.253 0 0119.247 24H4.246zm15-1.5a.746.746 0 00.724-.948 33.317 33.317 0 01-1.518-8.562 3.284 3.284 0 01-1.685.51 3.286 3.286 0 01-2.373-1.045 3.87 3.87 0 01-5.289 0 3.255 3.255 0 01-2.345 1.045 3.341 3.341 0 01-1.716-.514 33.472 33.472 0 01-1.529 8.592c-.102.371.139.788.531.896a.746.746 0 00.199.027h3.756V19.25a2.754 2.754 0 012.75-2.75h2a2.754 2.754 0 012.75 2.75v3.251h3.745zm-5.247-.001v-3.25c0-.689-.561-1.25-1.25-1.25h-2c-.689 0-1.25.561-1.25 1.25v3.25h4.5zM5.063 10.652A1.822 1.822 0 006.767 12a1.73 1.73 0 001.573-1.103l1.759-4.33-5.1 3.563c-.002.133.009.26.034.389a.854.854 0 01.03.133zm10.095.247A1.746 1.746 0 0016.76 12c.764-.019 1.451-.557 1.668-1.312a.746.746 0 01.045-.193c.02-.116.029-.232.027-.345l-5.098-3.575 1.756 4.324zm-5.274.184c.193.249.429.456.692.606a2.365 2.365 0 003.039-.604l-1.866-4.593-1.865 4.591zm2.615-7.6l3.537-1.094-3.537-.889v1.983z"}})])
          )
        }
      }
    