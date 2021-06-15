
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
            children.concat([_c('path',{attrs:{"d":"M14.25 24a.75.75 0 01-.75-.75V19.5h-3v3.75a.75.75 0 01-1.5 0V19.5H6.75a.75.75 0 01-.75-.75V15h-.75a.75.75 0 010-1.5H6V2.25A2.252 2.252 0 018.25 0h7.5A2.252 2.252 0 0118 2.25V13.5h.75a.75.75 0 010 1.5H18v3.75a.75.75 0 01-.75.75H15v3.75a.75.75 0 01-.75.75zm2.25-6v-3h-9v3h9zm0-4.5V2.25a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75V13.5h9z"}})])
          )
        }
      }
    