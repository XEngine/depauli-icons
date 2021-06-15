
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
            children.concat([_c('path',{attrs:{"d":"M23.231 23.012a4.032 4.032 0 01-2.798-1.129 4.039 4.039 0 01-2.803 1.129 4.059 4.059 0 01-2.818-1.131 4.052 4.052 0 01-2.807 1.13 4.063 4.063 0 01-2.82-1.13 4.048 4.048 0 01-2.804 1.13 4.062 4.062 0 01-2.816-1.128 4.04 4.04 0 01-2.81 1.129C.327 23-.001 22.67 0 22.261a.751.751 0 01.75-.749c.896 0 1.708-.452 2.178-1.208a.745.745 0 01.637-.354c.261 0 .5.133.637.355a2.547 2.547 0 002.178 1.208 2.546 2.546 0 002.168-1.208.745.745 0 01.637-.354c.261 0 .499.132.637.353a2.553 2.553 0 002.182 1.209 2.557 2.557 0 002.172-1.209.747.747 0 01.637-.354c.261 0 .5.133.637.354a2.548 2.548 0 002.178 1.208 2.546 2.546 0 002.168-1.208c.138-.222.376-.354.637-.354s.5.133.637.354a2.54 2.54 0 002.172 1.208.753.753 0 01.536 1.284.732.732 0 01-.523.217l-.024-.001zM17.125 19.226a.742.742 0 01-.644-.366.745.745 0 01-.083-.568l.575-2.277a2.253 2.253 0 00-1.631-2.727l-2.908-.735a2.238 2.238 0 00-1.704.249 2.233 2.233 0 00-1.03 1.381l-1.117 4.413a.75.75 0 01-.727.566.752.752 0 01-.727-.935l1.117-4.413a3.72 3.72 0 011.715-2.301 3.742 3.742 0 012.84-.415l.727.184 2.392-9.454a.752.752 0 011.248-.356l4.354 4.196a.746.746 0 01.195.765.747.747 0 01-.598.516l-5.153.817-.248.974 2.181.552a.75.75 0 01-.368 1.454l-2.182-.552-.368 1.456.728.184c2 .506 3.22 2.546 2.718 4.548l-.575 2.278a.749.749 0 01-.727.566zm-.761-13.043l3.031-.48-2.339-2.254-.692 2.734z"}})])
          )
        }
      }
    