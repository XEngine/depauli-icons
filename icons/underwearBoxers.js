
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
            children.concat([_c('path',{attrs:{"d":"M15.75 21a2.252 2.252 0 01-2.25-2.25v-1.813a3.73 3.73 0 01-1.5.313 3.734 3.734 0 01-1.5-.313v1.813A2.252 2.252 0 018.25 21h-6A2.252 2.252 0 010 18.75V4.5C0 3.673.673 3 1.5 3h21c.827 0 1.5.673 1.5 1.5v14.25A2.252 2.252 0 0121.75 21h-6zM15 18.75c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V7.5h-6.75v6a3.75 3.75 0 01-.75 2.245v3.005zm-13.5 0c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-3.005a3.755 3.755 0 01-.75-2.245v-6H1.5v11.25zm8.25-5.25A2.252 2.252 0 0012 15.75a2.252 2.252 0 002.25-2.25v-6h-4.5v6zM22.5 6V4.5h-21V6h21z"}})])
          )
        }
      }
    