
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
            children.concat([_c('path',{attrs:{"d":"M1.5 6C.673 6 0 5.327 0 4.5v-3C0 .673.673 0 1.5 0h21c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-21zm21-1.5v-3h-6v3h6zm-7.5 0v-3H9v3h6zm-13.5 0h6v-3h-6v3zM2.25 24A2.252 2.252 0 010 21.75v-6a2.252 2.252 0 012.25-2.25h2.652a4.495 4.495 0 01-1.152-3 .75.75 0 01.75-.75H12a.75.75 0 01.75.75 4.5 4.5 0 01-1.152 3h4.737l-.571-2.853a.749.749 0 01.736-.897H21a.75.75 0 01.736.897l-.571 2.853h.585A2.252 2.252 0 0124 15.75v6A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V18h-6v4.5h5.25zm-6.75 0V18H9v4.5h6zm-13.5-.75c0 .414.336.75.75.75H7.5V18h-6v3.75zm21-5.25v-.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v.75h21zm-2.865-3l.45-2.25h-2.67l.45 2.25h1.77zM5.344 11.25c.335 1.308 1.518 2.25 2.906 2.25s2.571-.942 2.906-2.25H5.344z"}})])
          )
        }
      }
    