
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
            children.concat([_c('path',{attrs:{"d":"M11.25 24a3.754 3.754 0 01-3.75-3.75V16.5H3.75A3.754 3.754 0 010 12.75v-1.5A3.754 3.754 0 013.75 7.5H7.5V3.75A3.754 3.754 0 0111.25 0h1.5a3.754 3.754 0 013.75 3.75V7.5h3.75A3.754 3.754 0 0124 11.25v1.5a3.754 3.754 0 01-3.75 3.75H16.5v3.75A3.754 3.754 0 0112.75 24h-1.5zM3.75 9a2.252 2.252 0 00-2.25 2.25v1.5A2.252 2.252 0 003.75 15h4.5a.75.75 0 01.75.75v4.5a2.252 2.252 0 002.25 2.25h1.5A2.252 2.252 0 0015 20.25v-4.5a.75.75 0 01.75-.75h4.5a2.252 2.252 0 002.25-2.25v-1.5A2.252 2.252 0 0020.25 9h-4.5a.75.75 0 01-.75-.75v-4.5a2.252 2.252 0 00-2.25-2.25h-1.5A2.252 2.252 0 009 3.75v4.5a.75.75 0 01-.75.75h-4.5z"}})])
          )
        }
      }
    