
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
            children.concat([_c('path',{attrs:{"d":"M.751 21.1a.75.75 0 01-.75-.75c0-5.83 4.743-10.573 10.573-10.573h10.149l-.461-2.611A3.346 3.346 0 0016.963 4.4H9.592a.75.75 0 010-1.5h7.368a4.845 4.845 0 014.78 4.005l2.247 12.738a1.242 1.242 0 01-1.222 1.457H.751zm21.704-1.5l-1.468-8.323H10.575A9.043 9.043 0 001.532 19.6h20.923z"}}),_c('circle',{attrs:{"cx":"7.126","cy":"16.225","r":"1.125"}}),_c('circle',{attrs:{"cx":"12.376","cy":"16.225","r":"1.125"}}),_c('circle',{attrs:{"cx":"17.626","cy":"16.225","r":"1.125"}})])
          )
        }
      }
    