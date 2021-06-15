
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
            children.concat([_c('path',{attrs:{"d":"M9.75 24a.75.75 0 01-.75-.75l.001-7.522a.777.777 0 01.01-.097c.001-.014.001-.016.004-.03a.57.57 0 01.023-.082.426.426 0 01.051-.12.67.67 0 01.032-.057L13.56 9H1.75C.785 9 0 8.215 0 7.25v-5.5C0 .785.785 0 1.75 0h21.5a.75.75 0 01.75.75v7.5l-.001.026a.781.781 0 01-.033.193l-.024.072a.593.593 0 01-.029.056.549.549 0 01-.038.066L19.44 15h3.81a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H9.75zm12.75-1.5v-6h-2.25v2.25a.75.75 0 01-1.5 0V16.5h-3v2.25a.75.75 0 01-1.5 0V16.5H10.5v6h12zM17.609 15l4.2-6H15.39l2.219 6zM22.5 7.5v-6h-3v2.25a.75.75 0 01-1.5 0V1.5h-3v2.25a.75.75 0 01-1.5 0V1.5h-3v2.25a.75.75 0 01-1.5 0V1.5H5.25v6H22.5zm-20.75-6a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h2v-6h-2z"}})])
          )
        }
      }
    