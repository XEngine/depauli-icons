
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
            children.concat([_c('path',{attrs:{"d":"M2.25 18.75A2.252 2.252 0 010 16.5v-6a5.256 5.256 0 015.25-5.25h2.379a2.26 2.26 0 012.121-1.5h12A2.252 2.252 0 0124 6v7.5a.75.75 0 01-1.5 0V6a.75.75 0 00-.75-.75h-12A.75.75 0 009 6v6a.75.75 0 01-1.5 0V6.75H6v3.75a2.252 2.252 0 01-2.25 2.25H1.5v3.75c0 .414.336.75.75.75H3a.75.75 0 010 1.5h-.75zm1.5-7.5a.75.75 0 00.75-.75V6.828c-1.712.352-3 1.892-3 3.672v.75h2.25z"}}),_c('path',{attrs:{"d":"M7.5 20.25c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM19.5 20.25c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM12 18.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    