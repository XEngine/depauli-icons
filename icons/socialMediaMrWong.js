
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
            children.concat([_c('path',{attrs:{"d":"M22.25 5.5a.75.75 0 00-.75-.75h-4.75v-4a.75.75 0 00-1.5 0v4h-6.5v-4a.75.75 0 00-1.5 0v4H2.5a.75.75 0 000 1.5h4.75v.25a4.75 4.75 0 004 4.67v4.58H9a3.75 3.75 0 00-3.75 3.75v3.75a.75.75 0 001.5 0V19.5A2.25 2.25 0 019 17.25h2.25v6a.75.75 0 001.5 0v-6H15a2.25 2.25 0 012.25 2.25v3.75a.75.75 0 001.5 0V19.5A3.75 3.75 0 0015 15.75h-2.25v-4.58a4.75 4.75 0 004-4.67v-.25h4.75a.75.75 0 00.75-.75zm-7 1a3.25 3.25 0 01-6.5 0v-.25h6.5z"}}),_c('path',{attrs:{"d":"M16.47 10.47a.75.75 0 000 1.06l4 4a.75.75 0 101.06-1.06l-4-4a.75.75 0 00-1.06 0zM7.53 10.47a.75.75 0 00-1.06 0l-4 4a.75.75 0 101.06 1.06l4-4a.75.75 0 000-1.06z"}})])
          )
        }
      }
    