
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
            children.concat([_c('path',{attrs:{"d":"M5.997 22.411a.75.75 0 010-1.5h1.649l.627-2.807a45.667 45.667 0 00-6.437 1.052 1.488 1.488 0 01-1.839-1.46V3.126c-.002-.395.151-.77.431-1.054.28-.284.654-.441 1.053-.443h.002c.124 0 .244.015.353.041 3.328.793 6.75 1.21 10.17 1.241A45.701 45.701 0 0022.157 1.67a1.484 1.484 0 011.129.182 1.48 1.48 0 01.71 1.288v14.559a1.495 1.495 0 01-1.476 1.503 1.54 1.54 0 01-.363-.041 45.67 45.67 0 00-6.437-1.054l.627 2.806h1.649a.75.75 0 010 1.5H5.997zm8.814-1.5l-.654-2.926a44.851 44.851 0 00-2.161-.074c-.7.007-1.425.031-2.159.073l-.654 2.927h5.628zm7.714-3.21h-.004.004zm-21.028-.002a46.864 46.864 0 017.558-1.165.735.735 0 01.236-.018 46.808 46.808 0 012.702-.104c.89.009 1.796.044 2.701.105a.762.762 0 01.257.019 47.3 47.3 0 017.546 1.163V3.13a47.208 47.208 0 01-10.49 1.281A47.281 47.281 0 011.488 3.129l.009 14.57z"}})])
          )
        }
      }
    