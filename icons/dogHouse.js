
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
            children.concat([_c('path',{attrs:{"d":"M12 15.55a2.252 2.252 0 01-2.25-2.25A2.252 2.252 0 0112 11.05a2.252 2.252 0 012.25 2.25c0 1.24-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM6.75 18.55c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25S9 15.059 9 16.3s-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM17.25 18.55c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9.001 23.8c-.402 0-.776-.154-1.058-.433a1.487 1.487 0 01-.445-1.057 1.505 1.505 0 01.304-.913l2.997-3.997a1.493 1.493 0 011.203-.6 1.487 1.487 0 011.197.6l3 4a1.496 1.496 0 01-.3 2.1 1.51 1.51 0 01-.9.3H9.001zM15 22.3l-2.999-3.999-2.999 3.996.015.002H15z"}}),_c('path',{attrs:{"d":"M19.5 23.8a.75.75 0 010-1.5h2.25a.75.75 0 00.75-.75v-12h-21v12c0 .414.336.75.75.75H4.5a.75.75 0 010 1.5H2.25A2.253 2.253 0 010 21.55V7.45c0-.833.456-1.593 1.191-1.986l9.75-5.2a2.253 2.253 0 012.118 0l9.75 5.2A2.246 2.246 0 0124 7.45v14.1a2.252 2.252 0 01-2.25 2.25H19.5zm3-15.75v-.6a.749.749 0 00-.397-.662L19.5 5.399V8.05h3zm-4.5 0V4.599l-3-1.6V8.05h3zm-4.5 0V2.199l-1.147-.612a.754.754 0 00-.706.001l-1.147.611V8.05h3zm-4.5 0V2.999l-3 1.6V8.05h3zm-4.5 0V5.399L1.897 6.787a.75.75 0 00-.397.662v.6h3z"}})])
          )
        }
      }
    