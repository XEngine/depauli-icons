
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 01-.75-.75V16.5h-1.5v6.75a.75.75 0 01-1.5 0V16.5h-7.5v6.75a.75.75 0 01-1.5 0V16.5h-1.5v6.75a.75.75 0 01-1.5 0V16.5H1.761C.79 16.5 0 15.71 0 14.739V1.761C0 .79.79 0 1.761 0h20.478C23.21 0 24 .79 24 1.761v12.978c0 .971-.79 1.761-1.761 1.761H20.25v6.75a.75.75 0 01-.75.75zM1.761 1.5a.261.261 0 00-.261.261v12.978c0 .144.117.261.261.261h20.478a.261.261 0 00.261-.261V1.761a.261.261 0 00-.261-.261H19.5V3h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5H18V1.5h-5.25V3h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V1.5H6V3h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V1.5H1.761z"}}),_c('path',{attrs:{"d":"M11.25 9.75a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM11.25 12.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    