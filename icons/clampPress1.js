
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75V19.5h-9v.75a.75.75 0 01-1.5 0v-.75H5.25a.75.75 0 010-1.5H9v-1.5H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h12a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H10.5V18h9V5.25A2.252 2.252 0 0017.25 3H10.5v1.5h5.25a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-12A.75.75 0 013 8.25v-3a.75.75 0 01.75-.75H9V3H5.25a.75.75 0 010-1.5H9V.75a.75.75 0 011.5 0v.75h6.75A3.754 3.754 0 0121 5.25v18a.75.75 0 01-.75.75zM15 15v-1.5H4.5V15H15zm0-7.5V6H4.5v1.5H15z"}})])
          )
        }
      }
    