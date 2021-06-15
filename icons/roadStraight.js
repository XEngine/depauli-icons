
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24.013a.751.751 0 01-.725-.944l6-22.5a.752.752 0 01.919-.531.751.751 0 01.531.918l-6 22.5a.751.751 0 01-.725.557zM22.5 24.013a.75.75 0 01-.724-.557l-6-22.5a.74.74 0 01.076-.569.746.746 0 01.65-.375.75.75 0 01.724.557l6 22.5a.745.745 0 01-.726.944zM12 24.013a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM12 13.513a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM12 4.513a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    