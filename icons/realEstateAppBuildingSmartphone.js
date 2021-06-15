
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
            children.concat([_c('path',{attrs:{"d":"M7.5 15.75a.75.75 0 010-1.5h.75v-9c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v9h.75a.75.75 0 010 1.5h-9zm6.75-1.5V12H12a.75.75 0 010-1.5h2.25V9H12a.75.75 0 010-1.5h2.25V5.25h-4.5v9h4.5z"}}),_c('path',{attrs:{"d":"M7.5 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 017.5 0h9a3.754 3.754 0 013.75 3.75v16.5A3.754 3.754 0 0116.5 24h-9zm-2.25-3.75A2.252 2.252 0 007.5 22.5h9a2.252 2.252 0 002.25-2.25v-.75H5.25v.75zM18.75 18V3.75A2.252 2.252 0 0016.5 1.5h-9a2.252 2.252 0 00-2.25 2.25V18h13.5z"}})])
          )
        }
      }
    