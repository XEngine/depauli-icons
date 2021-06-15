
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
            children.concat([_c('path',{attrs:{"d":"M9.748 17.998a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M.748 20.998a.75.75 0 010-1.5H10.5c1.654 0 3-1.346 3-3s-1.346-3-3-3H.748a.75.75 0 010-1.5H10.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5H.748zM14.248 7.498a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-5.25v5.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M19.643 23.998a.749.749 0 01-.672-1.082 19.457 19.457 0 00-.584-18.417h-.388v5.25a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-3.147a21.004 21.004 0 01.214 19.083.749.749 0 01-.673.416z"}})])
          )
        }
      }
    