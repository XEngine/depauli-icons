
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
            children.concat([_c('path',{attrs:{"d":"M3.401 23.667c-.335 0-.669-.05-.994-.149a3.376 3.376 0 01-2.008-1.651A3.408 3.408 0 010 20.27a3.39 3.39 0 011.797-2.997l.006-.003a3.373 3.373 0 01-1.404-1.403A3.408 3.408 0 010 14.27a3.39 3.39 0 011.797-2.997l.013-.007A3.38 3.38 0 010 8.27a3.39 3.39 0 011.797-2.997l8.437-4.5a3.764 3.764 0 011.765-.442c.613 0 1.223.153 1.765.442l8.437 4.5a3.39 3.39 0 011.797 2.997 3.377 3.377 0 01-1.806 2.998l.009.005a3.39 3.39 0 011.797 2.997 3.379 3.379 0 01-1.806 2.999l.009.005a3.387 3.387 0 011.797 2.997 3.397 3.397 0 01-4.99 2.998l-5.949-3.175a2.253 2.253 0 00-2.118 0l-5.946 3.173c-.492.262-1.043.4-1.594.4zm8.598-9.836c-.367 0-.734.092-1.059.265l-8.437 4.5a1.894 1.894 0 00-.78 2.566c.238.447.636.774 1.121.922a1.903 1.903 0 001.445-.141l5.946-3.173A3.764 3.764 0 0112 18.328c.613 0 1.223.153 1.765.442l5.946 3.173a1.899 1.899 0 002.787-1.674 1.89 1.89 0 00-1.003-1.673l-8.437-4.5a2.262 2.262 0 00-1.059-.265zm0-6c-.367 0-.734.092-1.059.265l-8.437 4.5a1.894 1.894 0 00-.78 2.566c.238.447.636.774 1.121.922a1.907 1.907 0 001.445-.141l5.946-3.172A3.764 3.764 0 0112 12.329c.612 0 1.223.153 1.765.442l5.946 3.172a1.899 1.899 0 002.787-1.674c0-.701-.384-1.343-1.003-1.673l-8.437-4.5a2.265 2.265 0 00-1.059-.265zm0-6c-.367 0-.734.092-1.059.265l-8.437 4.5a1.894 1.894 0 00-.78 2.565 1.895 1.895 0 002.566.781l5.946-3.172A3.775 3.775 0 0112 6.329c.612 0 1.223.153 1.765.442l5.946 3.172a1.899 1.899 0 002.787-1.674c0-.701-.384-1.342-1.003-1.673l-8.437-4.5a2.265 2.265 0 00-1.059-.265z"}})])
          )
        }
      }
    