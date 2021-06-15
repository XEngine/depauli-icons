
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
            children.concat([_c('path',{attrs:{"d":"M4.5 11.75H.75a.75.75 0 00-.75.75v3a5.75 5.75 0 0011.5 0v-7a.5.5 0 011 0v1a.75.75 0 00.26.57l1.75 1.5a.75.75 0 00.94 0l2-1.5a.75.75 0 00.3-.6v-1a5.75 5.75 0 00-11.5 0v7a.5.5 0 01-1 0v-3a.75.75 0 00-.75-.72zm1.25 5.77a2 2 0 002-2v-7a4.25 4.25 0 018.5 0v.63L15 10l-1-.88v-.64a2 2 0 00-4 0v7a4.25 4.25 0 01-8.5 0v-2.23h2.25v2.27a2 2 0 002 2z"}}),_c('path',{attrs:{"d":"M23.25 11.75H19.5a.75.75 0 00-.75.75v3a.5.5 0 11-1 0v-2.75a.75.75 0 00-1.2-.6L15 13.29l-1.29-1.11a.75.75 0 00-1.24.57v2.75a5.75 5.75 0 0011.5 0v-3a.75.75 0 00-.72-.75zm-.75 3.75a4.25 4.25 0 01-8.5 0v-1.12l.51.44a.75.75 0 00.94 0l.8-.6v1.23a2 2 0 104 0v-2.2h2.25z"}})])
          )
        }
      }
    