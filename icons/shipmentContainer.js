
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5a2.24 2.24 0 011.572.641l.02.018.023.025c.404.41.635.971.635 1.566v19.5a2.234 2.234 0 01-.659 1.59l-.02.019c-.423.414-.98.641-1.571.641H2.25zm19.19-1.5l-3.053-3.053A1.45 1.45 0 0118 19.5H6a1.45 1.45 0 01-.387-.053L2.561 22.5H21.44zM1.5 21.439l3.053-3.053A1.438 1.438 0 014.5 18V6c0-.13.018-.26.053-.387L1.5 2.56v18.879zm21-.001V2.562l-3.052 3.053c.034.126.052.255.052.385v12c0 .131-.018.26-.053.386l3.053 3.052zM6.017 18.015L17.998 18l.002-.002V15H6v2.998l.017.017zM18 13.5v-3H6v3h12zM18 9V6.004l-.016-.016L6.005 6l-.018.017L5.999 9H18zm0-4.5c.131 0 .26.018.387.053L21.44 1.5H2.562l3.052 3.053C5.74 4.518 5.87 4.5 6 4.5h12z"}})])
          )
        }
      }
    