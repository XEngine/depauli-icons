
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
            children.concat([_c('path',{attrs:{"d":"M.75 23a.75.75 0 010-1.5h6.307l.5-1.5H4.663A4.669 4.669 0 010 15.337a.75.75 0 011.5 0 3.167 3.167 0 003 3.159V14a2.252 2.252 0 012.25-2.25h.75v-6A2.252 2.252 0 019.75 3.5h.439l-.969-.97C9.078 2.389 9 2.2 9 2s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22L12 3.189l1.72-1.72a.744.744 0 011.06 0 .747.747 0 010 1.061l-.97.97h.439a2.252 2.252 0 012.25 2.25v3.879c.24-.085.492-.129.751-.129h.849l-.723-1.084A.748.748 0 0118 7.25c.251 0 .485.125.624.334l.876 1.314.876-1.314a.749.749 0 111.247.832L20.901 9.5h.849A2.252 2.252 0 0124 11.75v7.5a.75.75 0 01-.75.75h-5.307l-.5 1.5h5.807a.75.75 0 010 1.5H.75zm15.112-1.5l.5-1.5H9.139l-.5 1.5h7.223zm6.638-3v-3h-2.25v3h2.25zm-3.75 0v-3H16.5v3h2.25zm-3.75 0V17H9.75v1.5H15zm-6.75 0V17H6v1.5h2.25zm6.75-3v-2.25H9.75v2.25H15zm-6.75 0v-2.25h-1.5A.75.75 0 006 14v1.5h2.25zM22.5 14v-2.25a.75.75 0 00-.75-.75h-1.5v3h2.25zm-3.75 0v-3h-1.5a.75.75 0 00-.75.75V14h2.25zM15 11.75v-6a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v6h6z"}})])
          )
        }
      }
    