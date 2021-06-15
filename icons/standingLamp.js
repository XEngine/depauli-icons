
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 010-1.5h2.25V9h-.75a.744.744 0 01-.696-.472l-3-7.5A.749.749 0 017.5 0h9a.75.75 0 01.696 1.028l-3 7.5A.744.744 0 0113.5 9h-.75v13.5H15a.75.75 0 010 1.5H9zm3.992-16.5l2.4-6H8.608l2.4 6h1.984z"}})])
          )
        }
      }
    