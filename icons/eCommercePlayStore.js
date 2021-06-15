
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
            children.concat([_c('path',{attrs:{"d":"M22.38 9.45L4 .83a2.82 2.82 0 00-4 2.55v17.24a2.81 2.81 0 004 2.55l18.37-8.62a2.81 2.81 0 000-5.1zm-4.82-.61l-2.24 2.1-6.93-6.4zM2.11 21.73a1.31 1.31 0 01-.61-1.11V3.38a1.31 1.31 0 011.87-1.19l.52.25L14.22 12l-10.1 9.46-.75.35a1.31 1.31 0 01-1.26-.08zM15.33 13l2.3 2.12L8.5 19.4zm6.42.19l-2.65 1.24L16.43 12 19 9.53l2.72 1.28a1.32 1.32 0 010 2.38z"}})])
          )
        }
      }
    