
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
            children.concat([_c('path',{attrs:{"d":"M4.91 23.998a1.493 1.493 0 01-1.4-2.027 28.06 28.06 0 001.77-9.969 28.089 28.089 0 00-1.771-9.983A1.494 1.494 0 014.898-.003h14.181l.058-.002c.173 0 .356.041.546.122.368.157.652.449.801.82.149.371.144.779-.013 1.146a25.791 25.791 0 00-1.69 9.894 25.921 25.921 0 001.702 9.959c.07.162.11.363.11.566-.001.4-.158.776-.442 1.058a1.49 1.49 0 01-1.056.436H4.91zm14.181-1.5a27.377 27.377 0 01-1.811-10.519 27.27 27.27 0 011.8-10.457l.007-.024H4.908A29.414 29.414 0 016.78 12.002a29.572 29.572 0 01-1.866 10.497h.004l14.173-.001z"}})])
          )
        }
      }
    