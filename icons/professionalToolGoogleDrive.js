
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M24 15.86a.73.73 0 00-.07-.27L16.16 1.73a.75.75 0 00-.65-.38H8.45a.72.72 0 00-.26.07h-.08a.73.73 0 00-.25.25L.1 15.16a.75.75 0 000 .74l3.53 6.37a.73.73 0 00.19.19l.08.05a.73.73 0 00.33.09h15.63a.75.75 0 00.65-.38l3.38-5.93v-.07A.75.75 0 0024 16a.76.76 0 000-.14zm-8.91-13L22 15.21h-5.32L9.77 2.85zM15 15.21H9l3-5.32zM8.48 3.61l2.65 4.74-6.84 12-2.68-4.81zm10.94 17.54H5.57l2.53-4.44H22z"}})])
          )
        }
      }
    