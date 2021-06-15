
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
            children.concat([_c('path',{attrs:{"d":"M14.427 23.25a2.24 2.24 0 01-2.013-1.244l-1.835-3.671a.745.745 0 01.033-.73.744.744 0 01.638-.355H12v-1.5c0-.827.673-1.5 1.5-1.5h3a.75.75 0 010 1.5h-3v1.5h5.25V13.5c0-.827.673-1.5 1.5-1.5H21v-1.5a.75.75 0 011.5 0V12c.827 0 1.5.673 1.5 1.5V18a.442.442 0 01-.003.049.724.724 0 01-.035.183l-1.16 3.479a2.247 2.247 0 01-2.135 1.539h-6.24zm-.671-1.915a.746.746 0 00.67.415h6.243a.75.75 0 00.712-.513l.829-2.487h-9.746l1.292 2.585zM22.5 17.25V13.5h-2.25v3.75h2.25z"}}),_c('path',{attrs:{"d":"M2.25 20.25A2.252 2.252 0 010 18V7.5c0-.599.233-1.16.656-1.585l2.772-4.163A2.246 2.246 0 015.3.75h8.9a2.248 2.248 0 011.869 1.002l2.775 4.163c.424.425.656.986.656 1.585V9A.75.75 0 0118 9V7.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75V18c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm14.348-15l-1.777-2.666a.75.75 0 00-.623-.334H10.5v3h6.098zM9 5.25v-3H5.3a.749.749 0 00-.624.334L2.901 5.25H9z"}})])
          )
        }
      }
    