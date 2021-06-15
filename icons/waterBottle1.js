
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
            children.concat([_c('path',{attrs:{"d":"M11.999 23.993c-1.447 0-2.888-.161-4.283-.478A2.225 2.225 0 016 21.321v-9.325c0-1.613.455-3.188 1.315-4.553L8.904 4.6A.75.75 0 009 4.233V1.496c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v2.738a.75.75 0 00.096.366l1.609 2.877A8.46 8.46 0 0118 11.996v9.333a2.217 2.217 0 01-1.705 2.184c-1.404.319-2.847.48-4.296.48zM10.485 4.496a2.27 2.27 0 01-.271.836L8.605 8.209A7.08 7.08 0 007.5 11.996v9.333a.73.73 0 00.559.726c1.278.291 2.605.438 3.94.438 1.336 0 2.666-.148 3.953-.441a.724.724 0 00.548-.716v-9.341a7.03 7.03 0 00-1.084-3.753l-1.629-2.911a2.246 2.246 0 01-.271-.836h-3.031zm3.015-1.5v-1.5h-3v1.5h3z"}})])
          )
        }
      }
    