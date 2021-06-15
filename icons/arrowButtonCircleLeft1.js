
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M14.998 19.399c-.349 0-.689-.124-.958-.347l-7.08-5.901a1.504 1.504 0 01-.001-2.303l7.08-5.901a1.509 1.509 0 011.097-.342A1.495 1.495 0 0116.5 6.099v2.18a2.24 2.24 0 01-.845 1.757L13.2 12l2.455 1.965c.536.429.844 1.069.844 1.756V17.9a1.493 1.493 0 01-.441 1.061 1.487 1.487 0 01-1.058.438h-.002zm-7.077-7.4l7.079 5.9v-2.178a.747.747 0 00-.281-.585l-3.187-2.551a.75.75 0 01-.001-1.171l3.187-2.55A.745.745 0 0015 8.279v-2.18l-7.079 5.9z"}})])
          )
        }
      }
    