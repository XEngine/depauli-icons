
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
            children.concat([_c('path',{attrs:{"d":"M3.75 16.5A3.754 3.754 0 010 12.75v-1.5A3.754 3.754 0 013.75 7.5h16.5A3.754 3.754 0 0124 11.25v1.5a3.754 3.754 0 01-3.75 3.75H3.75zm0-7.5a2.252 2.252 0 00-2.25 2.25v1.5A2.252 2.252 0 003.75 15h16.5a2.252 2.252 0 002.25-2.25v-1.5A2.252 2.252 0 0020.25 9H3.75z"}})])
          )
        }
      }
    