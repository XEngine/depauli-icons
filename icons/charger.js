
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
            children.concat([_c('path',{attrs:{"d":"M21 24a.75.75 0 01-.75-.75v-4.5c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25A3.754 3.754 0 0112 22.5a3.754 3.754 0 01-3.75-3.75v-2.292a6.754 6.754 0 01-6-6.708v-3A2.252 2.252 0 014.5 4.5h.75V.75a.75.75 0 011.5 0V4.5h4.5V.75a.75.75 0 011.5 0V4.5h.75a2.252 2.252 0 012.25 2.25v3a6.756 6.756 0 01-6 6.708v2.292A2.252 2.252 0 0012 21a2.252 2.252 0 002.25-2.25c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v4.5A.75.75 0 0121 24zM4.5 6a.75.75 0 00-.75.75v3C3.75 12.645 6.105 15 9 15s5.25-2.355 5.25-5.25v-3A.75.75 0 0013.5 6h-9z"}}),_c('path',{attrs:{"d":"M7.5 9a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    