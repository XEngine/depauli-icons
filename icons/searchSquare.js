
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M17.25 18a.743.743 0 01-.53-.22l-2.543-2.544a5.12 5.12 0 01-3.052 1.014C8.299 16.25 6 13.951 6 11.125S8.299 6 11.125 6s5.125 2.299 5.125 5.125a5.122 5.122 0 01-1.013 3.051l2.543 2.544c.142.142.22.33.22.53a.746.746 0 01-.75.75zM11.125 7.5C9.126 7.5 7.5 9.126 7.5 11.125s1.626 3.625 3.625 3.625 3.625-1.626 3.625-3.625S13.124 7.5 11.125 7.5z"}})])
          )
        }
      }
    