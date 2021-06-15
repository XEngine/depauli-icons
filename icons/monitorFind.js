
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
            children.concat([_c('path',{attrs:{"d":"M6 21a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H6zM3.75 16.5c-2.012 0-3.688-1.632-3.745-3.642A.446.446 0 010 12.795V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v7.5a.75.75 0 01-1.5 0v-7.5a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75v8.285L8.246 12c.415 0 .752.335.754.746a.744.744 0 01-.217.531.743.743 0 01-.53.222l-6.609.034A2.27 2.27 0 003.75 15h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M23.25 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.746.746 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}})])
          )
        }
      }
    