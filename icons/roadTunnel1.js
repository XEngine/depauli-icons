
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24.013a.75.75 0 01-.75-.75v-11.25c0-5.79-4.71-10.5-10.5-10.5s-10.5 4.71-10.5 10.5v11.25a.75.75 0 01-1.5 0v-11.25c0-6.617 5.383-12 12-12s12 5.383 12 12v11.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M18.75 24.013a.744.744 0 01-.696-.472l-.411-1.028H6.358l-.411 1.028a.745.745 0 01-.975.418.747.747 0 01-.417-.975L7.5 15.619v-3.606c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v3.606l2.946 7.366a.747.747 0 01-.418.975.75.75 0 01-.278.053zm-1.708-3l-.6-1.5H7.558l-.6 1.5h10.084zm-1.2-3l-.6-1.5H8.758l-.6 1.5h7.684zm-.842-3v-3c0-1.654-1.346-3-3-3s-3 1.346-3 3v3h6z"}})])
          )
        }
      }
    