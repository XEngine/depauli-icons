
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.641-1.139l11.014-18.14-2.175-3.582A.75.75 0 0110.23.361L12 3.276 13.77.361a.744.744 0 011.029-.252.75.75 0 01.252 1.03l-2.175 3.582 11.014 18.14A.75.75 0 0123.25 24H.75zm21.167-1.5L12 6.166 2.083 22.5h5.458l3.804-6.846a.75.75 0 011.312 0l3.804 6.846h5.456zm-7.174 0L12 17.563 9.257 22.5h5.486z"}})])
          )
        }
      }
    