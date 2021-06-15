
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
            children.concat([_c('path',{attrs:{"d":"M5.14 5.25V8H.89a.75.75 0 00-.75.75v7a.75.75 0 00.75.75h5a.75.75 0 00.75-.75V5.25a.75.75 0 00-1.5 0zm0 9.75h-3.5V9.5h3.5zM8.29 8.5a.75.75 0 00-.75.75v7a.75.75 0 001.5 0v-7a.75.75 0 00-.75-.75zM9 5.25a.75.75 0 10-1.5 0V7A.75.75 0 009 7zM10.19 18a.75.75 0 100 1.5h5.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-5a.75.75 0 00-.75.75v7a.75.75 0 00.75.75h4.25V18zm1.25-3V9.5h3.5V15zM17.59 18a.75.75 0 000 1.5h5.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-5a.75.75 0 00-.75.75v7a.75.75 0 00.75.75h4.25V18zm1.25-3V9.5h3.5V15z"}})])
          )
        }
      }
    