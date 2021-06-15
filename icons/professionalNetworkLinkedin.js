
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
            children.concat([_c('path',{attrs:{"d":"M.81 7.95a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h4.86a.75.75 0 00.75-.75V8.7a.75.75 0 00-.75-.75zm4.11 13.93H1.56V9.45h3.36zM17.89 7.94a7.35 7.35 0 00-3.53.93V8.7a.75.75 0 00-.75-.75h-5.1a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h5.11a.75.75 0 00.75-.75v-7.25a1.39 1.39 0 012.79 0v7.25a.75.75 0 00.75.75h5.36a.75.75 0 00.75-.75V15.5c-.02-4.67-2.35-7.56-6.13-7.56zm4.62 13.94h-3.86v-6.5a2.89 2.89 0 00-5.79 0v6.5h-3.6V9.45h3.61v.84a.75.75 0 001.26.55 6.07 6.07 0 013.77-1.4c2.93 0 4.62 2.21 4.62 6.06zM3.24 7.13A3.25 3.25 0 100 3.88a3.25 3.25 0 003.24 3.25zm0-5a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75z"}})])
          )
        }
      }
    