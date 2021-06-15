
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
            children.concat([_c('path',{attrs:{"d":"M8.25 20.25C13.58 20.25 16 16 16 12a6.9 6.9 0 000-1 .75.75 0 00-.75-.75H8.49a.75.75 0 00-.75.75v2.69a.75.75 0 00.75.75h2.4a3.15 3.15 0 01-2.71 1.27 3.73 3.73 0 112.45-6.54.75.75 0 001 0L13.85 7a.75.75 0 000-1.09 8.25 8.25 0 10-5.6 14.34zm0-15a6.73 6.73 0 014 1.28l-1.14 1.1a5.23 5.23 0 10-2.88 9.59 4.51 4.51 0 004.59-3.35A.75.75 0 0012 13H9.24v-1.23h5.27V12c0 3.25-2 6.75-6.27 6.75a6.75 6.75 0 010-13.5zM23.25 10.3h-2.12V8.17a.75.75 0 10-1.5 0v2.13H17.5a.75.75 0 000 1.5h2.13v2.13a.75.75 0 001.5 0V11.8h2.13a.75.75 0 000-1.5z"}})])
          )
        }
      }
    