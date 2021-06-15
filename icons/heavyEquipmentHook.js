
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
            children.concat([_c('path',{attrs:{"d":"M.75 24.001a.75.75 0 010-1.5h3v-15h-3a.75.75 0 010-1.5h1.958L8.84.387a1.501 1.501 0 011.749-.188l9.865 5.802h2.796a.75.75 0 010 1.5H21v2.562c0 .298.177.568.45.688a2.998 2.998 0 01.921 4.869 2.98 2.98 0 01-2.12.88 2.983 2.983 0 01-2.122-.878 2.98 2.98 0 01-.879-2.121.75.75 0 011.5 0c0 .401.156.777.44 1.06.283.283.659.439 1.06.439a1.49 1.49 0 001.061-.44 1.5 1.5 0 00-.461-2.434 2.25 2.25 0 01-1.35-2.062V7.501H9.75v15h3a.75.75 0 010 1.5h-12zm7.5-1.5v-4.5l-3 4v.5h3zm-3-3.001l3-4v-1l-3-4v9zm3-7.5V7.5h-3V8l3 4zm9.246-5.999l-7.65-4.5-4.916 4.5h12.566z"}})])
          )
        }
      }
    