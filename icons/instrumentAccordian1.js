
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
            children.concat([_c('path',{attrs:{"d":"M3.767 22.869A3.778 3.778 0 010 19.132V6.384a3.7 3.7 0 011.065-2.641 3.708 3.708 0 012.626-1.12l5.306-.019a.754.754 0 01.753.75V22.1a.75.75 0 01-.747.75l-5.219.019h-.017zM3.718 4.123A2.228 2.228 0 001.5 6.376v12.75a2.272 2.272 0 002.268 2.243l4.482-.016v-2.236H4.5a.75.75 0 010-1.5h3.75v-2.25H4.5a.75.75 0 010-1.5h3.75v-2.25H4.5a.75.75 0 010-1.5h3.75v-2.25H4.5a.75.75 0 010-1.5h3.75v-2.26l-4.532.016zM12 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.5A.75.75 0 0112 24zM15.75 22.5a.75.75 0 01-.75-.75V2.25a.75.75 0 011.5 0v19.5a.75.75 0 01-.75.75zM19.5 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zM23.25 22.5a.75.75 0 01-.75-.75V2.25a.75.75 0 011.5 0v19.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    