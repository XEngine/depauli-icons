
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.25A2.252 2.252 0 010 21V3A2.252 2.252 0 012.25.75h19.5A2.252 2.252 0 0124 3v18a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H4.5v19.5h17.25zM2.25 2.25A.75.75 0 001.5 3v18c0 .414.336.75.75.75H3V2.25h-.75z"}}),_c('path',{attrs:{"d":"M13.5 19.5C9.365 19.5 6 16.135 6 12s3.365-7.5 7.5-7.5S21 7.865 21 12s-3.365 7.5-7.5 7.5zm0-13.5c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6z"}}),_c('path',{attrs:{"d":"M13.5 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S15 12.827 15 12s-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    