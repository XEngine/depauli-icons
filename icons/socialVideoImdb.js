
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
            children.concat([_c('path',{attrs:{"d":"M.77 6.75A.75.75 0 000 7.5v9a.75.75 0 001.5 0v-9a.75.75 0 00-.73-.75zM8.92 17.25a.75.75 0 00.75-.75v-9a.75.75 0 00-1.46-.23L6 14.13 3.63 7.26a.75.75 0 00-1.46.24v9a.75.75 0 001.5 0V12l1.6 4.71a.75.75 0 00.71.51H6a.75.75 0 00.71-.52l1.47-4.52v4.32a.75.75 0 00.74.75zM14.08 17.25a2.75 2.75 0 002.75-2.75v-5a2.75 2.75 0 00-2.75-2.75h-3a.75.75 0 00-.75.75v9a.75.75 0 00.75.75zm-2.25-9h2.25a1.25 1.25 0 011.25 1.25v5a1.25 1.25 0 01-1.25 1.25h-2.25zM24 12.5a2.75 2.75 0 00-2.75-2.75H19V7.5a.75.75 0 00-1.5 0v9a.75.75 0 00.75.75h3A2.75 2.75 0 0024 14.5zm-1.5 2a1.25 1.25 0 01-1.25 1.25H19v-4.5h2.25a1.25 1.25 0 011.25 1.25z"}})])
          )
        }
      }
    