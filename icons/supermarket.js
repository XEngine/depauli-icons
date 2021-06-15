
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 01-.75-.75v-10.5H.75a.75.75 0 010-1.5H6V7.5h-.75a.75.75 0 010-1.5h6V.75A.75.75 0 0112 0h4.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3.75V6h6a.75.75 0 010 1.5H18v3.75h5.25a.75.75 0 010 1.5h-.75v10.5a.75.75 0 01-.75.75H2.25zM21 22.5v-9.75h-3.75a.75.75 0 01-.75-.75V7.5h-9V12a.75.75 0 01-.75.75H3v9.75h4.5V18a.75.75 0 010-1.5h9a.75.75 0 010 1.5v4.5H21zm-6 0V18h-2.25v4.5H15zm-3.75 0V18H9v4.5h2.25zM15.75 3V1.5h-3V3h3z"}}),_c('path',{attrs:{"d":"M12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    