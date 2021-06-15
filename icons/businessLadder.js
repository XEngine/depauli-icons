
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
            children.concat([_c('path',{attrs:{"d":"M13.5 24a.748.748 0 01-.687-1.048l1.496-3.452H3.193l-1.754 4.048a.75.75 0 11-1.377-.596l9.75-22.5a.751.751 0 011.377.596L9.693 4.5h11.115L22.562.452a.75.75 0 011.376.596l-9.75 22.5A.747.747 0 0113.5 24zm1.458-6l1.3-3H5.143l-1.3 3h11.115zm1.95-4.5l1.3-3H7.093l-1.3 3h11.115zM18.859 9l1.3-3H9.043l-1.3 3h11.116z"}})])
          )
        }
      }
    