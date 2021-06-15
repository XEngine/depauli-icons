
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24.001A3.754 3.754 0 010 20.251v-16.5A3.754 3.754 0 013.75.001h16.5A3.754 3.754 0 0124 3.751v11.507a3.672 3.672 0 01-.06.655 3.712 3.712 0 01-1.039 1.997l-4.992 4.992a3.722 3.722 0 01-2.084 1.052c-.205.031-.39.047-.568.047H3.75zm0-22.5a2.252 2.252 0 00-2.25 2.25v16.5a2.252 2.252 0 002.25 2.25H15v-3.75a3.754 3.754 0 013.75-3.75h3.75V3.751a2.252 2.252 0 00-2.25-2.25H3.75zm15 15a2.252 2.252 0 00-2.25 2.25v3.375c.125-.082.241-.177.349-.285l4.992-4.992c.107-.107.202-.224.285-.349H18.75z"}}),_c('path',{attrs:{"d":"M7 19.75a.75.75 0 01-.75-.75v-1.75H4a.75.75 0 010-1.5h2.25v-3H4a.75.75 0 010-1.5h2.25v-3H4a.75.75 0 010-1.5h2.25V5a.75.75 0 011.5 0v1.75H18a.75.75 0 010 1.5H7.75v3H18a.75.75 0 010 1.5H7.75v3H12a.75.75 0 010 1.5H7.75V19a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    