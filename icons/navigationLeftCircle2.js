
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M18 17.25a.75.75 0 01-.75-.75A2.252 2.252 0 0015 14.25h-3.75v1.498a.751.751 0 01-1.238.569l-5.25-4.5a.75.75 0 010-1.139l5.25-4.5a.75.75 0 011.238.569V8.25h2.25a5.256 5.256 0 015.25 5.25v3a.75.75 0 01-.75.75zm-8.25-3.133V13.5a.75.75 0 01.75-.75H15c.823 0 1.608.267 2.25.75a3.754 3.754 0 00-3.75-3.75h-3A.75.75 0 019.75 9v-.621l-3.348 2.869 3.348 2.869z"}})])
          )
        }
      }
    