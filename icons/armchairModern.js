
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
            children.concat([_c('path',{attrs:{"d":"M6.013 24.001a2.992 2.992 0 01-2.96-2.507l-3-18A3.004 3.004 0 013.013 0c1.069 0 2.063.582 2.595 1.5h12.81A3.008 3.008 0 0121.611.064l.036.008a3.117 3.117 0 012.289 3.607l-2.965 17.813a2.991 2.991 0 01-2.959 2.507H6.013zm-3-22.5a1.487 1.487 0 00-1.221.629 1.495 1.495 0 00-.26 1.118l3 18a1.498 1.498 0 001.48 1.254h12c.736 0 1.358-.527 1.479-1.254L22.46 3.416a1.626 1.626 0 00-1.178-1.887 1.497 1.497 0 00-1.738 1.169l-.012.062-1.477 8.863a2.243 2.243 0 01-2.219 1.881H8.189a2.242 2.242 0 01-2.219-1.881L4.492 2.754a1.495 1.495 0 00-1.479-1.253zm4.437 9.876c.06.363.371.627.74.627h7.647c.368 0 .68-.264.74-.627l1.395-8.376H6.054l1.396 8.376z"}})])
          )
        }
      }
    