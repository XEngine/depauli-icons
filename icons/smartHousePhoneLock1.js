
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
            children.concat([_c('path',{attrs:{"d":"M5.25 19.5A2.252 2.252 0 013 17.25V8.079L1.234 9.573a.751.751 0 01-1.232-.635c.017-.2.11-.381.263-.51l9.75-8.25A.752.752 0 0110.5 0h.038c.177 0 .349.063.484.177l8.864 7.5a.746.746 0 01.088 1.057.748.748 0 01-1.056.089L10.52 1.717 4.5 6.809V17.25c0 .414.336.75.75.75h7.519a.75.75 0 010 1.5H5.25z"}}),_c('path',{attrs:{"d":"M17.25 24A2.252 2.252 0 0115 21.75v-9a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 0124 12.75v9A2.252 2.252 0 0121.75 24h-4.5zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V21h-6v.75zm6-2.25v-6.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v6.75h6zM7.875 15.75c-.62 0-1.125-.505-1.125-1.125v-3.75c0-.489.313-.906.75-1.061V9c0-1.654 1.346-3 3-3s3 1.346 3 3v.814c.437.155.75.572.75 1.061v3.75c0 .62-.505 1.125-1.125 1.125h-5.25zm4.875-1.5v-3h-4.5v3h4.5zM12 9.75V9c0-.827-.673-1.5-1.5-1.5S9 8.173 9 9v.75h3z"}})])
          )
        }
      }
    