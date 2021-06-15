
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
            children.concat([_c('path',{attrs:{"d":"M15.75 13.5a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121V3.75C15 1.682 16.682 0 18.75 0s3.75 1.682 3.75 3.75v.879A2.258 2.258 0 0124 6.75v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zM21 4.5v-.75c0-1.241-1.009-2.25-2.25-2.25S16.5 2.509 16.5 3.75v.75H21z"}}),_c('circle',{attrs:{"cx":"18.75","cy":"9.029","r":"1.125"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15h6c1.8 0 3.324 1.268 3.675 3h3.075A3.754 3.754 0 0118 21.75a.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm15.621-3a2.264 2.264 0 00-2.121-1.5h-7.5a.75.75 0 010-1.5h2.868A2.262 2.262 0 007.5 16.5h-6V21h14.871z"}})])
          )
        }
      }
    