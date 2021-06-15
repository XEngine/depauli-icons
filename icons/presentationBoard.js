
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
            children.concat([_c('path',{attrs:{"d":"M18 24a.743.743 0 01-.53-.22l-4.72-4.72v4.189a.75.75 0 01-1.5 0V19.06l-4.72 4.72c-.141.142-.33.22-.53.22s-.389-.078-.53-.22a.744.744 0 010-1.06L10.19 18H3a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h18a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 0121 18h-7.189l4.72 4.72a.744.744 0 010 1.06A.75.75 0 0118 24zM2.25 15.75c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V6H2.25v9.75zM21.75 4.5V2.25A.75.75 0 0021 1.5H3a.75.75 0 00-.75.75V4.5h19.5z"}})])
          )
        }
      }
    