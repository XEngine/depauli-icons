
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
            children.concat([_c('path',{attrs:{"d":"M.75 13.5a.75.75 0 010-1.5H4.5V7.5C4.5 3.365 7.865 0 12 0s7.5 3.365 7.5 7.5V12h3.75a.75.75 0 010 1.5H.75zM18 12v-1.5H6V12h12zm0-3V7.5c0-3.308-2.692-6-6-6s-6 2.692-6 6V9h12zM9 24a.746.746 0 01-.638-.355.745.745 0 01-.033-.73l1.5-3a.746.746 0 01.671-.415h3c.286 0 .543.159.671.415l1.5 3a.746.746 0 01-.032.729A.757.757 0 0115 24H9zm4.787-1.5l-.75-1.5h-2.073l-.75 1.5h3.573z"}})])
          )
        }
      }
    