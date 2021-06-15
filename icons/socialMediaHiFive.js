
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
            children.concat([_c('path',{attrs:{"d":"M.75 7.9h1.14v8.2H1a.75.75 0 000 1.5h3.25a.75.75 0 000-1.5h-.86v-2.21l2-2.37a1.09 1.09 0 011.92.69v3.89h-.9a.75.75 0 100 1.5h3.24a.75.75 0 000-1.5h-.87v-3.88a2.59 2.59 0 00-4.57-1.66l-.82 1V7.15a.75.75 0 00-.75-.75H.75a.75.75 0 000 1.5zM10.65 10.38a.75.75 0 00.75.75h1.27v5h-.87a.75.75 0 000 1.5H15a.75.75 0 000-1.5h-.87v-5.75a.75.75 0 00-.75-.75h-2a.75.75 0 00-.73.75zM14.17 8.23V7.15a.75.75 0 10-1.5 0v1.08a.75.75 0 101.5 0zM23.25 7.9a.75.75 0 000-1.5h-5.46A.75.75 0 0017 7l-.64 4.5a.75.75 0 001.36.53 2.59 2.59 0 11-.38 2 .75.75 0 10-1.47.32 4.09 4.09 0 102.24-4.57l.27-1.92z"}})])
          )
        }
      }
    