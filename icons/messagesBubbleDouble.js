
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
            children.concat([_c('path',{attrs:{"d":"M20.247 24a.743.743 0 01-.53-.22l-4.28-4.28h-.439c-3.308 0-6-2.692-6-6s2.692-6 6-6h3c3.308 0 6 2.692 6 6a5.976 5.976 0 01-3 5.179v4.571a.75.75 0 01-.751.75zm-5.25-15a4.505 4.505 0 00-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5h.75c.198 0 .391.08.53.22l3.22 3.22v-3.213c0-.289.169-.555.429-.678a4.51 4.51 0 002.571-4.049 4.505 4.505 0 00-4.5-4.499h-3z"}}),_c('path',{attrs:{"d":"M3.747 16.5a.747.747 0 01-.75-.75v-4.57a5.967 5.967 0 01-2.65-3.171A5.948 5.948 0 01.57 3.431 6.014 6.014 0 015.985 0h3.012a6.039 6.039 0 015.751 4.285.751.751 0 01-1.437.43A4.53 4.53 0 008.997 1.5h-3a4.511 4.511 0 00-4.071 2.572 4.46 4.46 0 00-.167 3.431 4.46 4.46 0 002.308 2.545c.261.123.43.39.43.678v3.214l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.744.744 0 01-.53.219z"}})])
          )
        }
      }
    