
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
            children.concat([_c('circle',{attrs:{"cx":"4.5","cy":"3.75","r":"1.125"}}),_c('path',{attrs:{"d":"M9.753 4.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM14.253 4.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('circle',{attrs:{"cx":"4.5","cy":"9.75","r":"1.125"}}),_c('path',{attrs:{"d":"M9.753 10.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM14.253 10.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('circle',{attrs:{"cx":"1.128","cy":"18.375","r":"1.125"}}),_c('path',{attrs:{"d":"M4.501 19.5a.75.75 0 010-1.5h3.002v-4.5H3.751a3.754 3.754 0 01-3.75-3.75c0-1.197.564-2.299 1.506-3.001A3.733 3.733 0 01.003 3.75 3.754 3.754 0 013.753 0h12a3.754 3.754 0 013.75 3.75 3.733 3.733 0 01-1.51 3.004 3.759 3.759 0 011.523 3.05 3.79 3.79 0 01-.492 1.845.752.752 0 01-1.022.282.747.747 0 01-.282-1.023 2.285 2.285 0 00-.362-2.731c-.428-.433-1-.674-1.61-.677H3.753c-1.243 0-2.252 1.009-2.252 2.25S2.51 12 3.751 12h6a.75.75 0 010 1.5h-.748v5.25a.75.75 0 01-.75.75H4.501zm-.748-18c-1.241 0-2.25 1.009-2.25 2.25S2.512 6 3.753 6h11.998c1.243 0 2.252-1.009 2.252-2.25s-1.009-2.25-2.25-2.25h-12z"}}),_c('path',{attrs:{"d":"M12.751 24a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v6a2.252 2.252 0 01-2.25 2.25h-9zm-.75-2.25c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.647l-4.058 2.534c-.356.222-.768.34-1.192.34s-.836-.117-1.192-.34l-4.058-2.534v4.647zm4.853-3.386a.748.748 0 00.795 0l4.761-2.973a.75.75 0 00-.659-.391h-9a.75.75 0 00-.659.391l4.762 2.973z"}})])
          )
        }
      }
    