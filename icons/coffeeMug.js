
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3.75 23.25A3.754 3.754 0 010 19.5V3A2.252 2.252 0 012.25.75h13.5A2.252 2.252 0 0118 3v.761c3.341.195 6 2.975 6 6.364a6.384 6.384 0 01-6 6.364V19.5a3.754 3.754 0 01-3.75 3.75H3.75zm-1.5-21A.75.75 0 001.5 3v16.5a2.252 2.252 0 002.25 2.25h10.5a2.252 2.252 0 002.25-2.25V3a.75.75 0 00-.75-.75H2.25zM18 14.986a4.882 4.882 0 004.5-4.861A4.882 4.882 0 0018 5.264v9.722z"}})])
          )
        }
      }
    