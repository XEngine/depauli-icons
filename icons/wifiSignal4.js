
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
            children.concat([_c('path',{attrs:{"d":"M7.492 23.999a.75.75 0 01-.703-1.014l4.452-11.872V8.249a.75.75 0 011.5 0v2.864l4.452 11.873a.749.749 0 11-1.404.526l-.942-2.513H9.136l-.943 2.513a.751.751 0 01-.701.487zm6.792-4.501l-2.293-6.114-2.293 6.114h4.586zM17.717 16.497a.748.748 0 01-.414-1.374 8.215 8.215 0 002.315-2.314c2.515-3.791 1.476-8.921-2.315-11.435A.748.748 0 0117.717 0c.148 0 .291.043.414.125 4.48 2.972 5.707 9.034 2.735 13.514a9.696 9.696 0 01-2.736 2.735.752.752 0 01-.413.123z"}}),_c('path',{attrs:{"d":"M16.491 12.673a.746.746 0 01-.75-.742.747.747 0 01.214-.533c1.701-1.736 1.701-4.561 0-6.297a.746.746 0 01-.214-.533.745.745 0 01.75-.742c.203 0 .393.08.536.225 2.269 2.315 2.269 6.082 0 8.397a.747.747 0 01-.536.225zM6.266 16.497a.743.743 0 01-.414-.125 9.722 9.722 0 01-2.736-2.735 9.683 9.683 0 01-1.431-7.324A9.686 9.686 0 015.852.122a.748.748 0 011.149.774.748.748 0 01-.32.477 8.191 8.191 0 00-3.522 5.239 8.192 8.192 0 001.207 6.196 8.202 8.202 0 002.315 2.314.748.748 0 01.211 1.039.75.75 0 01-.626.336z"}}),_c('path',{attrs:{"d":"M7.491 12.673a.746.746 0 01-.536-.225c-2.266-2.315-2.266-6.081 0-8.396a.75.75 0 111.072 1.05c-1.7 1.736-1.7 4.561 0 6.298.14.143.216.332.214.533a.745.745 0 01-.75.74z"}})])
          )
        }
      }
    