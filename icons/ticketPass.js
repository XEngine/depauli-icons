
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
            children.concat([_c('path',{attrs:{"d":"M3.75 18a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M17.25 24a.75.75 0 01-.75-.75v-3.048A6.026 6.026 0 0112 17.15a6.026 6.026 0 01-4.5 3.052v3.048a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-9a3.754 3.754 0 013.75-3.75 3.743 3.743 0 013.673 3h9.153c.35-1.732 1.874-3 3.673-3a3.754 3.754 0 013.75 3.75v9a.75.75 0 01-.75.75H17.25zm5.25-1.5v-8.25c0-1.241-1.009-2.25-2.25-2.25S18 13.009 18 14.25v8.25h4.5zM6 22.5v-8.25C6 13.009 4.991 12 3.75 12S1.5 13.009 1.5 14.25v8.25H6zm1.5-3.813A4.538 4.538 0 0011.187 15H7.5v3.687zM12.813 15a4.538 4.538 0 003.687 3.687V15h-3.687z"}}),_c('path',{attrs:{"d":"M20.25 18a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM8.25 9A2.252 2.252 0 016 6.75v-4.5A2.252 2.252 0 018.25 0h7.5A2.252 2.252 0 0118 2.25v4.5A2.252 2.252 0 0115.75 9h-7.5zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-7.5z"}}),_c('circle',{attrs:{"cx":"12","cy":"4.5","r":"1.125"}})])
          )
        }
      }
    