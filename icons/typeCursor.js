
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
            children.concat([_c('path',{attrs:{"d":"M21.75 23.998a5.238 5.238 0 01-4.5-2.546 5.238 5.238 0 01-4.5 2.546.75.75 0 010-1.5 3.754 3.754 0 003.75-3.75v-.75H2.25A2.252 2.252 0 010 15.748v-7.5a2.252 2.252 0 012.25-2.25H16.5v-.75a3.754 3.754 0 00-3.75-3.75.75.75 0 010-1.5c1.865 0 3.559.978 4.5 2.546a5.238 5.238 0 014.5-2.546.75.75 0 010 1.5A3.754 3.754 0 0018 5.248v.75h3.75A2.252 2.252 0 0124 8.248v7.5a2.252 2.252 0 01-2.25 2.25H18v.75a3.754 3.754 0 003.75 3.75.75.75 0 010 1.5zm0-7.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H18v9h3.75zm-19.5-9a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75H16.5v-9H2.25z"}})])
          )
        }
      }
    