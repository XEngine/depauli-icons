
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
            children.concat([_c('path',{attrs:{"d":"M15.75 18c-.96 0-1.808-.615-2.121-1.5h-3.257c-.314.885-1.162 1.5-2.122 1.5s-1.808-.615-2.121-1.5H5.25c-.827 0-1.5-.673-1.5-1.5v-2.25c0-.827.673-1.5 1.5-1.5H7.5v-3c0-.827.673-1.5 1.5-1.5h9.75c.827 0 1.5.673 1.5 1.5v6A2.252 2.252 0 0118 16.5h-.129A2.258 2.258 0 0115.75 18zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-7.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zM18 15a.75.75 0 00.75-.75v-1.5H5.25V15h.879c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h3.257c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5H18zm.75-3.75v-3H16.5v3h2.25zm-3.75 0v-3h-2.25v3H15zm-3.75 0v-3H9v3h2.25z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    