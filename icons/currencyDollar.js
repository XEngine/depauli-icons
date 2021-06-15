
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V21H7.5a.75.75 0 010-1.5h5.7a2.553 2.553 0 002.55-2.55c0-2.031-1.905-3.079-4.111-4.293C9.347 11.397 6.75 9.969 6.75 7.05A4.055 4.055 0 0110.8 3h.45V.75a.75.75 0 011.5 0V3h3.75a.75.75 0 010 1.5h-5.7a2.553 2.553 0 00-2.55 2.55c0 2.032 1.905 3.079 4.111 4.293 2.292 1.26 4.889 2.689 4.889 5.607A4.055 4.055 0 0113.2 21h-.45v2.25A.75.75 0 0112 24z"}})])
          )
        }
      }
    