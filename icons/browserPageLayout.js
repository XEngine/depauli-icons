
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
            children.concat([_c('path',{attrs:{"d":"M3 22.5a2.252 2.252 0 01-2.25-2.25V3.75A2.252 2.252 0 013 1.5h18a2.252 2.252 0 012.25 2.25v16.5A2.252 2.252 0 0121 22.5H3zM21 21a.75.75 0 00.75-.75V15h-12v6H21zm-18.75-.75c0 .414.336.75.75.75h5.25V7.5h-6v12.75zm19.5-6.75v-6h-12v6h12zm0-7.5V3.75A.75.75 0 0021 3H3a.75.75 0 00-.75.75V6h19.5z"}})])
          )
        }
      }
    