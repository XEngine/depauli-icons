
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
            children.concat([_c('path',{attrs:{"d":"M.992 24a.751.751 0 01-.742-.758.766.766 0 01.741-.742h.126A10.6 10.6 0 0011.7 12.75H.75a.75.75 0 010-1.5h10.952A10.598 10.598 0 001.111 1.5h-.103A.762.762 0 01.25.757.745.745 0 01.992 0l.125-.001A12.09 12.09 0 0113.204 11.25h8.235l-1.72-1.72a.746.746 0 01.001-1.06.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026a.725.725 0 010 .517l-.006.016a.755.755 0 01-.168.257L20.78 15.53a.744.744 0 01-1.06 0 .749.749 0 010-1.06l1.72-1.72h-8.235A12.095 12.095 0 011.118 24H.992z"}})])
          )
        }
      }
    