
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
            children.concat([_c('path',{attrs:{"d":"M18 23.25A5.256 5.256 0 0112.75 18a.75.75 0 01.75-.75h.199l3.281-10.5H7.02l3.281 10.5h.199a.75.75 0 01.75.75c0 2.895-2.355 5.25-5.25 5.25S.75 20.895.75 18a.75.75 0 01.75-.75h.199L4.98 6.75H1.5a.75.75 0 010-1.5h9.75V1.5a.75.75 0 011.5 0v3.75h9.75a.75.75 0 010 1.5h-3.48l3.281 10.5h.199a.75.75 0 01.75.75A5.256 5.256 0 0118 23.25zm-3.674-4.5c.352 1.712 1.892 3 3.674 3s3.323-1.288 3.674-3h-7.348zm-12 0c.352 1.712 1.892 3 3.674 3s3.322-1.288 3.674-3H2.326zm18.404-1.5L18 8.514l-2.73 8.736h5.46zm-12 0L6 8.514 3.27 17.25h5.46z"}})])
          )
        }
      }
    