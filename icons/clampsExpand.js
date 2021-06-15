
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h4.289l5.523-3.375-5.703-3.485c-.221-.135-.359-.38-.359-.64s.138-.505.359-.64l5.703-3.485L5.039 7.5H3.75A2.252 2.252 0 011.5 5.25v-3A2.252 2.252 0 013.75 0h16.5a2.252 2.252 0 012.25 2.25v3a2.252 2.252 0 01-2.25 2.25h-1.289l-5.522 3.375 5.703 3.485c.22.135.358.38.358.64s-.138.505-.359.64l-5.702 3.485 5.523 3.375h4.289a.75.75 0 11-.001 1.5H.75zm15.334-1.5L12 20.004 7.916 22.5h8.168zM12 18.246L17.312 15 12 11.754 6.688 15 12 18.246zm0-8.25L16.084 7.5H7.916L12 9.996zM3.75 1.5a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H3.75z"}})])
          )
        }
      }
    