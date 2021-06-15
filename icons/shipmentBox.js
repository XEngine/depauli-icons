
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V8.25c0-.37.092-.737.267-1.062l2.388-5.831A2.267 2.267 0 015.471 0h13.055c.892 0 1.699.525 2.06 1.337l2.397 5.85c.174.326.267.693.267 1.063v13.5A2.252 2.252 0 0121 24H3zM3 7.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V8.25A.75.75 0 0021 7.5H3zM20.875 6l-1.669-4.075a.74.74 0 00-.677-.425H12.75V6h8.125zM11.25 6V1.5H5.472a.75.75 0 00-.686.446L3.125 6h8.125z"}}),_c('path',{attrs:{"d":"M14.25 19.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    