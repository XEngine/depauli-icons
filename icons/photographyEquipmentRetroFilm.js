
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
            children.concat([_c('path',{attrs:{"d":"M.75 21a.75.75 0 010-1.5h.75v-15H.75a.75.75 0 010-1.5h12a.75.75 0 010 1.5H12V6h10.5c.827 0 1.5.673 1.5 1.5v6a.75.75 0 01-.75.75h-.75a2.252 2.252 0 00-2.25 2.25v.75a.75.75 0 01-.75.75H12v1.5h.75a.75.75 0 010 1.5h-12zm9.75-1.5v-15H3v15h7.5zm8.25-3a3.754 3.754 0 013.75-3.75V7.5H12v9h6.75z"}})])
          )
        }
      }
    