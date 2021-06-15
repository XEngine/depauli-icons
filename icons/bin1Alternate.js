
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
            children.concat([_c('path',{attrs:{"d":"M8.772 23.25a2.243 2.243 0 01-2.22-1.881L3.865 5.25H1.501a.75.75 0 010-1.5h6V3A2.252 2.252 0 019.751.75h4.5A2.252 2.252 0 0116.501 3v.75h6a.75.75 0 010 1.5h-2.366L17.45 21.369a2.243 2.243 0 01-2.219 1.881H8.772zm-.74-2.127a.748.748 0 00.74.627h6.458c.368 0 .68-.264.74-.627L18.615 5.25H5.385l2.647 15.873zM15.001 3.75V3a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.75h6z"}})])
          )
        }
      }
    