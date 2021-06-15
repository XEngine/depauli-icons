
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
            children.concat([_c('path',{attrs:{"d":"M12 22.75a.729.729 0 01-.384-.108c-.016-.008-.022-.011-.036-.021a.85.85 0 01-.111-.091l-3-3a.748.748 0 01.001-1.06.744.744 0 011.06 0l1.72 1.72V8.488A5.258 5.258 0 006 3.25H.75a.75.75 0 010-1.5h5.238A6.778 6.778 0 0112 5.411a6.773 6.773 0 016-3.661h5.253a.75.75 0 010 1.5h-5.241c-2.898 0-5.253 2.348-5.262 5.235V20.19l1.719-1.719a.744.744 0 011.06 0 .749.749 0 010 1.06l-3.014 3.014a.72.72 0 01-.097.078c-.012.009-.035.021-.048.028a.656.656 0 01-.224.085.77.77 0 01-.146.014z"}})])
          )
        }
      }
    