
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24.003a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 15.753v-12A3.754 3.754 0 013.75.003h16.5A3.754 3.754 0 0124 3.753v12a3.754 3.754 0 01-3.75 3.75h-5.115l.5 3h1.615a.75.75 0 010 1.5H6.75zm7.365-1.5l-.5-3h-3.229l-.5 3h4.229zm-10.365-21a2.252 2.252 0 00-2.25 2.25v12a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-12a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M12 16.128a.758.758 0 01-.151-.015C8.237 15.379 6 12.24 6 9.753V6.378c0-1.034.841-1.875 1.875-1.875h8.25c1.034 0 1.875.841 1.875 1.875v3.375c0 2.483-2.237 5.621-5.85 6.36a.741.741 0 01-.15.015zM7.875 6.003a.375.375 0 00-.375.375v3.375c0 2.292 2.311 4.344 4.5 4.857 2.189-.517 4.5-2.57 4.5-4.857V6.378a.375.375 0 00-.375-.375h-8.25z"}})])
          )
        }
      }
    