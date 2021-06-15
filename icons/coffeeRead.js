
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
            children.concat([_c('path',{attrs:{"d":"M9.97 21.44a.75.75 0 01-.485-.178 14.494 14.494 0 00-7.578-3.328A2.197 2.197 0 010 15.76V2.2A2.185 2.185 0 01.874.447a2.18 2.18 0 011.63-.424 16.131 16.131 0 017.883 3.556c.259.121.546.187.835.191l.028-.001a2.052 2.052 0 00.868-.19A16.116 16.116 0 0119.987.024a2.204 2.204 0 012.515 2.174V12.75a.75.75 0 01-1.502 0V2.2a.701.701 0 00-.796-.692 14.604 14.604 0 00-7.19 3.276.753.753 0 01-.141.094 3.492 3.492 0 01-.873.314v7.558a.75.75 0 01-1.5 0V5.191a3.498 3.498 0 01-.869-.312.774.774 0 01-.14-.093 14.617 14.617 0 00-7.205-3.279.691.691 0 00-.508.137.693.693 0 00-.278.558v13.559a.69.69 0 00.599.685 15.99 15.99 0 018.356 3.671.746.746 0 01.088 1.057.751.751 0 01-.573.266z"}}),_c('path',{attrs:{"d":"M16.5 24a4.505 4.505 0 01-4.5-4.5v-3.75a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v.75c1.654 0 3 1.346 3 3s-1.346 3-3 3h-1.149A4.484 4.484 0 0116.5 24zm-3-4.5c0 1.654 1.346 3 3 3s3-1.346 3-3v-3h-6v3zM21 21c.827 0 1.5-.673 1.5-1.5S21.827 18 21 18v1.5c0 .517-.087 1.019-.26 1.5H21z"}})])
          )
        }
      }
    