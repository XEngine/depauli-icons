
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M15.721 16.5a2.24 2.24 0 01-1.757-.845L12 13.201l-1.964 2.455c-.43.537-1.07.844-1.757.844H6.1a1.493 1.493 0 01-1.061-.441 1.5 1.5 0 01-.091-2.019l5.9-7.079a1.501 1.501 0 012.305.002l5.899 7.078c.257.308.378.697.341 1.096A1.498 1.498 0 0117.9 16.5h-2.179zM12 11.25c.229 0 .443.103.586.282l2.55 3.187a.747.747 0 00.585.281h2.18l-5.9-7.079L6.101 15h2.178a.747.747 0 00.585-.281l2.55-3.187A.747.747 0 0112 11.25z"}})])
          )
        }
      }
    