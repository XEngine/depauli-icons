
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
            children.concat([_c('path',{attrs:{"d":"M4.875 24a.75.75 0 01-.75-.75V.75l.002-.037a1.395 1.395 0 01.017-.127l.017-.059C4.169.5 4.177.479 4.184.46l.01-.023A.593.593 0 014.23.372a.57.57 0 01.076-.107.838.838 0 01.11-.106c.021-.016.04-.031.061-.044a1.005 1.005 0 01.128-.064.755.755 0 01.062-.02c.029-.008.053-.015.078-.019a.677.677 0 01.07-.008.473.473 0 01.152.003.58.58 0 01.133.029c.023.008.045.015.066.024l.029.012 14.251 6.75a.75.75 0 01.054 1.326L5.625 16.182v7.068a.75.75 0 01-.75.75zm.75-9.551l11.888-6.883L5.625 1.935v12.514z"}})])
          )
        }
      }
    