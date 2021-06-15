
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
            children.concat([_c('path',{attrs:{"d":"M14.24.37H.75a.75.75 0 00-.75.75v21.76a.75.75 0 00.75.75h22.5a.75.75 0 00.75-.75V10.13A9.77 9.77 0 0014.24.37zm8.26 21.76h-21V1.87h12.74a8.27 8.27 0 018.26 8.26z"}}),_c('path',{attrs:{"d":"M9.93 4.32H4.5a.75.75 0 00-.75.75v14.12a.75.75 0 00.75.75h5.43a.75.75 0 00.75-.75V5.07a.75.75 0 00-.75-.75zm-.75 14.12H5.25V5.82h3.93zM13.62 4.33a.75.75 0 00-.78.75v14.11a.75.75 0 00.75.75h5.91a.75.75 0 00.75-.75v-8.5a6.61 6.61 0 00-6.63-6.36zm5.13 14.1h-4.41V5.91a5 5 0 014.41 4.78z"}})])
          )
        }
      }
    