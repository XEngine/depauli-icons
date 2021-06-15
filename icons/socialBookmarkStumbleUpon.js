
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M.75 22.78h7.82a3.69 3.69 0 000-7.37 2.19 2.19 0 110-4.37h5.87a1.21 1.21 0 011.21 1.21v6.36a4.18 4.18 0 008.35 0V2a.75.75 0 10-1.5 0v16.61a2.68 2.68 0 01-5.35 0v-6.37a2.71 2.71 0 00-2.71-2.71H8.57a3.69 3.69 0 100 7.37 2.19 2.19 0 010 4.37H.75a.75.75 0 000 1.5z"}})])
          )
        }
      }
    