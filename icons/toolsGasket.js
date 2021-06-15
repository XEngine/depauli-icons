
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
            children.concat([_c('path',{attrs:{"d":"M9.75 24a.75.75 0 01-.75-.75v-10.5A3.754 3.754 0 0112.75 9h4.042l-1.428-.857A.754.754 0 0115 7.5V6H9.75A3.754 3.754 0 006 9.75v13.5a.75.75 0 01-1.5 0V9.75A5.256 5.256 0 019.75 4.5H15V3c0-.262.14-.509.364-.643l1.428-.857H9.75C5.201 1.5 1.5 5.201 1.5 9.75v13.5a.75.75 0 01-1.5 0V9.75C0 4.374 4.374 0 9.75 0h9.75a.735.735 0 01.343.085.373.373 0 01.04.02l3.753 2.252A.754.754 0 0124 3v4.5c0 .262-.14.509-.364.643l-3.75 2.25c-.014.009-.032.017-.049.025a.655.655 0 01-.11.045l-.045.013a.74.74 0 01-.182.024h-6.75a2.252 2.252 0 00-2.25 2.25v10.5a.75.75 0 01-.75.75zM19.5 8.875l3-1.8v-3.65l-3-1.8-3 1.8v3.651l3 1.799z"}})])
          )
        }
      }
    