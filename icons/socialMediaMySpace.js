
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
            children.concat([_c('path',{attrs:{"d":"M18 8.5a4.25 4.25 0 10-4.25-4.25A4.26 4.26 0 0018 8.5zm0-7a2.75 2.75 0 11-2.75 2.75A2.75 2.75 0 0118 1.5zM13.25 4.25A3.25 3.25 0 1010 7.5a3.25 3.25 0 003.25-3.25zm-5 0A1.75 1.75 0 1110 6a1.75 1.75 0 01-1.75-1.75z"}}),_c('path',{attrs:{"d":"M6.25 4.25A2.25 2.25 0 104 6.5a2.25 2.25 0 002.25-2.25zm-3 0A.75.75 0 114 5a.75.75 0 01-.75-.75zM.75 10.25v4.25a.75.75 0 00.75.75h4.25v4a.75.75 0 00.75.75h6.25v3.25a.75.75 0 00.75.75h9a.75.75 0 00.75-.75v-8.61A5.33 5.33 0 0018 9a5.05 5.05 0 00-4 1.9 4.22 4.22 0 00-7-1.71 3.24 3.24 0 00-6.25 1.06zM18 10.5a3.83 3.83 0 013.75 4.14v7.86h-7.5v-7.86A3.83 3.83 0 0118 10.5zm-8-1a2.75 2.75 0 012.75 2.75v6.25h-5.5v-6.25A2.75 2.75 0 0110 9.5zm-7.75.75a1.75 1.75 0 013.5 0v3.5h-3.5z"}})])
          )
        }
      }
    