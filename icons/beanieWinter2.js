
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
            children.concat([_c('path',{attrs:{"d":"M3.75 23.25A3.754 3.754 0 010 19.5a3.743 3.743 0 013-3.673V12.75a8.965 8.965 0 017.342-8.847L8.47 2.03c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53C8.611.828 8.8.75 9 .75s.389.078.53.22L12 3.439l2.47-2.47a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53l-1.872 1.872A8.967 8.967 0 0121 12.75v3.077c1.732.35 3 1.874 3 3.673a3.754 3.754 0 01-3.75 3.75H3.75zm16.5-1.5c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25H16.5v4.5h3.75zm-5.25 0v-4.5H9v4.5h6zm-11.25-4.5c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25H7.5v-4.5H3.75zm15.75-1.5v-3c0-4.135-3.365-7.5-7.5-7.5s-7.5 3.365-7.5 7.5v3h15z"}})])
          )
        }
      }
    