
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
            children.concat([_c('path',{attrs:{"d":"M11.25 24a3.754 3.754 0 01-3.75-3.75v-.784A8.237 8.237 0 010 11.25v-4.5a.75.75 0 011.5 0v4.5C1.5 14.972 4.528 18 8.25 18S15 14.972 15 11.25v-4.5a.75.75 0 011.5 0v4.5A8.237 8.237 0 019 19.466v.784a2.252 2.252 0 002.25 2.25h1.5A2.252 2.252 0 0015 20.25a3.739 3.739 0 013.083-3.691A3.012 3.012 0 0121 14.25c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.02 3.02 0 01-2.876-2.159A2.255 2.255 0 0016.5 20.25 3.754 3.754 0 0112.75 24h-1.5zM21 15.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M5.25 15A2.252 2.252 0 013 12.75V2.25A2.252 2.252 0 015.25 0h6a2.252 2.252 0 012.25 2.25v10.5A2.252 2.252 0 0111.25 15h-6zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-6z"}}),_c('path',{attrs:{"d":"M8.25 12.375a.817.817 0 01-.131-.011 1.126 1.126 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.817.817 0 01-.131.011z"}})])
          )
        }
      }
    