
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
            children.concat([_c('path',{attrs:{"d":"M9.75 18a.75.75 0 01-.75-.75V6.75A.75.75 0 019.75 6h1.8c2.15 0 3.9 1.75 3.9 3.9s-1.75 3.9-3.9 3.9H10.5v3.45a.75.75 0 01-.75.75zm1.8-5.7c1.323 0 2.4-1.077 2.4-2.4s-1.077-2.4-2.4-2.4H10.5v4.8h1.05z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    