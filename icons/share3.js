
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-12A2.252 2.252 0 012.25 7.5H3A.75.75 0 013 9h-.75a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6A2.252 2.252 0 0114.25 24h-12z"}}),_c('path',{attrs:{"d":"M9.75 15a.753.753 0 01-.335-.079C9.275 14.851 6 13.176 6 9.75v-3A3.754 3.754 0 019.75 3H15V.75a.754.754 0 01.75-.75c.17 0 .336.058.469.164l7.5 6a.75.75 0 010 1.172l-7.5 6a.76.76 0 01-.469.164.755.755 0 01-.75-.75V10.5h-3.75a.75.75 0 00-.75.75v3a.745.745 0 01-.75.75zm0-10.5A2.252 2.252 0 007.5 6.75v3c0 1.379.784 2.401 1.5 3.048V11.25A2.252 2.252 0 0111.25 9h4.5a.75.75 0 01.75.75v1.439l5.549-4.439L16.5 2.31v1.44a.75.75 0 01-.75.75h-6z"}})])
          )
        }
      }
    