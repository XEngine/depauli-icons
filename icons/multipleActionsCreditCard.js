
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
            children.concat([_c('path',{attrs:{"d":"M.75 15a.751.751 0 01-.744-.844A6.765 6.765 0 016.709 8.25h.046c1.679 0 3.279.604 4.522 1.701a.749.749 0 01-.496 1.313.749.749 0 01-.496-.188 5.341 5.341 0 00-3.533-1.325h-.044a5.262 5.262 0 00-5.213 4.594A.753.753 0 01.75 15zM6.75 8.25c-2.275 0-4.125-1.85-4.125-4.125S4.475 0 6.75 0s4.125 1.85 4.125 4.125S9.024 8.25 6.75 8.25zm0-6.75c-1.447 0-2.625 1.178-2.625 2.625S5.303 6.75 6.75 6.75s2.625-1.178 2.625-2.625S8.197 1.5 6.75 1.5zM16.5 6.75c-1.861 0-3.375-1.514-3.375-3.375S14.639 0 16.5 0s3.375 1.514 3.375 3.375S18.361 6.75 16.5 6.75zm0-5.25c-1.034 0-1.875.841-1.875 1.875S15.466 5.25 16.5 5.25s1.875-.841 1.875-1.875S17.534 1.5 16.5 1.5z"}}),_c('path',{attrs:{"d":"M20.4 9.75a.751.751 0 01-.649-.375 3.718 3.718 0 00-2.278-1.746 3.744 3.744 0 00-3.792 1.155.75.75 0 01-1.129-.988c.38-.435.826-.801 1.326-1.09a5.238 5.238 0 013.982-.526 5.212 5.212 0 013.189 2.445.751.751 0 01-.649 1.125zM12.75 24a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 15.75v6A2.252 2.252 0 0121.75 24h-9zM12 21.75c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V18H12v3.75zm10.5-5.25v-.75a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v.75h10.5z"}}),_c('path',{attrs:{"d":"M17.25 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    