
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M12 17.248a5.256 5.256 0 01-5.25-5.25A5.256 5.256 0 0112 6.748a5.256 5.256 0 015.25 5.25 5.256 5.256 0 01-5.25 5.25zm0-9a3.754 3.754 0 00-3.75 3.75 3.754 3.754 0 003.75 3.75 3.754 3.754 0 003.75-3.75A3.754 3.754 0 0012 8.248z"}})])
          )
        }
      }
    