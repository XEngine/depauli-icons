
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
            children.concat([_c('path',{attrs:{"d":"M5.25 21A2.252 2.252 0 013 18.75V5.25A2.252 2.252 0 015.25 3h13.5A2.252 2.252 0 0121 5.25v13.5A2.252 2.252 0 0118.75 21H5.25zm0-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H5.25z"}})])
          )
        }
      }
    