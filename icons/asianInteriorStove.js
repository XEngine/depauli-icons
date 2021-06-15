
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
            children.concat([_c('path',{attrs:{"d":"M21.75 22.5a.748.748 0 01-.727-.568L19.665 16.5H4.336l-1.358 5.432a.749.749 0 11-1.455-.364L2.789 16.5H1.5C.673 16.5 0 15.827 0 15v-1.5c0-.827.673-1.5 1.5-1.5h2.321l.6-6H3.75a.75.75 0 00-.75.75v1.5a.75.75 0 01-1.5 0v-1.5A2.252 2.252 0 013.75 4.5h.827a3.744 3.744 0 013.673-3 3.762 3.762 0 013.748 3.691l.376 3.76A1.51 1.51 0 0013.5 7.5V6c0-1.654 1.346-3 3-3a.75.75 0 010 1.5c-.827 0-1.5.673-1.5 1.5v1.5a2.99 2.99 0 01-2.476 2.951L12.679 12h4.223a2.974 2.974 0 01-.402-1.5V8.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25c0 .536-.14 1.049-.402 1.5h.402c.827 0 1.5.673 1.5 1.5V15c0 .827-.673 1.5-1.5 1.5h-1.29l1.267 5.068a.752.752 0 01-.727.932zM1.5 15h21v-1.5h-21V15zM18 10.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V9h-3v1.5zM11.171 12l-.6-6H5.929l-.6 6h5.842zm-.803-7.5C10.055 3.621 9.21 3 8.25 3s-1.805.621-2.118 1.5h4.236z"}})])
          )
        }
      }
    