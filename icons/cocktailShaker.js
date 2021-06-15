
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
            children.concat([_c('path',{attrs:{"d":"M8.594 24a2.248 2.248 0 01-2.239-2.001L5.007 9.833a.294.294 0 01-.003-.044c-.002-.014-.002-.023-.002-.039A6.77 6.77 0 018.75 3.707V2.25A2.252 2.252 0 0111 0h1.5a2.252 2.252 0 012.25 2.25v1.455a6.77 6.77 0 013.75 6.086c0 .014 0 .025-.002.04l-1.352 12.168A2.248 2.248 0 0114.909 24H8.594zm-.749-2.167a.75.75 0 00.745.667h6.318a.749.749 0 00.745-.667l1.26-11.333H6.59l1.255 11.333zM16.947 9a5.263 5.263 0 00-5.195-4.5A5.262 5.262 0 006.557 9h10.39zM11 1.5a.75.75 0 00-.75.75v.919a6.755 6.755 0 013-.001V2.25a.75.75 0 00-.75-.75H11z"}})])
          )
        }
      }
    