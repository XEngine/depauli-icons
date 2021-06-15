
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25A2.252 2.252 0 010 18V6a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 6v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-15A.75.75 0 001.5 6v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    