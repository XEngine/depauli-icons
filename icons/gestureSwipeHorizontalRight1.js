
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
            children.concat([_c('path',{attrs:{"d":"M6.748 14.998a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M3.748 24a.75.75 0 01-.75-.75V13.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v9.748a.75.75 0 01-1.5 0V13.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v9.75a.75.75 0 01-.75.75zM17.248 10.498a.75.75 0 010-1.5h5.25v-5.25a.75.75 0 011.5 0v6a.75.75 0 01-.75.75h-6z"}}),_c('path',{attrs:{"d":"M14.248 7.498a.75.75 0 010-1.5h5.25V5.61A19.517 19.517 0 009.75 2.985c-2.976 0-5.974.705-8.669 2.039a.745.745 0 01-1.004-.338.75.75 0 01.339-1.005 21.16 21.16 0 019.338-2.196c3.378 0 6.733.832 9.745 2.411V.748a.75.75 0 011.5 0v6a.75.75 0 01-.75.75h-6.001z"}})])
          )
        }
      }
    