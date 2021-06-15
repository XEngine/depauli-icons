
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.747.747 0 01-.739-.627L18.97 2.123a.75.75 0 00-.74-.623H16.5V15h.75c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25H6.75c-1.241 0-2.25-1.009-2.25-2.25S5.509 15 6.75 15h.75V1.5H5.771a.748.748 0 00-.74.625L1.49 23.373a.748.748 0 01-1.35.313.751.751 0 01-.13-.559l3.541-21.25A2.245 2.245 0 015.77 0h12.459c1.103 0 2.036.788 2.219 1.875l3.541 21.252a.746.746 0 01-.739.873zm-16.5-7.5a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zM15 15V1.5H9L15 15z"}})])
          )
        }
      }
    