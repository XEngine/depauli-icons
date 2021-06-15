
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75v-12C0 5.51 1.009 4.5 2.25 4.5h12a.75.75 0 010 1.5h-12a.75.75 0 00-.75.75V9h12a.75.75 0 010 1.5h-12v8.25c0 .414.336.75.75.75h12a.75.75 0 010 1.5h-12z"}}),_c('path',{attrs:{"d":"M4.5 15a.75.75 0 010-1.5H9A.75.75 0 019 15H4.5zM19.875 21.188a.75.75 0 01-.75-.75v-1.5H16.5a.75.75 0 010-1.5h4.275c.951 0 1.725-.775 1.725-1.726 0-1.413-1.384-2.174-2.987-3.055-1.764-.97-3.763-2.07-3.763-4.369a3.229 3.229 0 013.225-3.225h.15v-1.5a.75.75 0 011.5 0v1.5h2.625a.75.75 0 010 1.5h-4.275c-.951 0-1.725.774-1.725 1.725 0 1.412 1.384 2.174 2.986 3.055C22 12.313 24 13.413 24 15.713a3.23 3.23 0 01-3.225 3.225h-.15v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    