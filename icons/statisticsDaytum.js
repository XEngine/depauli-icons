
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
            children.concat([_c('path',{attrs:{"d":"M22 23.5a.75.75 0 00.75-.75v-18a.75.75 0 00-1.5 0v18a.75.75 0 00.75.75zM17.25 13.75v9a.75.75 0 001.5 0v-9a.75.75 0 00-1.5 0zM13.25 9.75v13a.75.75 0 001.5 0v-13a.75.75 0 00-1.5 0zM9.25 16.75v6a.75.75 0 001.5 0v-6a.75.75 0 00-1.5 0zM1.25 18.75v4a.75.75 0 001.5 0v-4a.75.75 0 00-1.5 0zM5.25 13.25v9.5a.75.75 0 001.5 0v-9.5a.75.75 0 00-1.5 0zM20.75 1.25A.75.75 0 0020 .5H3.5a.75.75 0 000 1.5H20a.75.75 0 00.75-.75z"}})])
          )
        }
      }
    