
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3H6V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zM22.5 9V5.25a.75.75 0 00-.75-.75H18V6a.75.75 0 01-1.5 0V4.5h-9V6A.75.75 0 016 6V4.5H2.25a.75.75 0 00-.75.75V9h21z"}}),_c('path',{attrs:{"d":"M12.75 21a4.475 4.475 0 01-3.517-1.693.747.747 0 01.118-1.054.753.753 0 011.054.118A2.987 2.987 0 0012.75 19.5c1.654 0 3-1.346 3-3s-1.346-3-3-3a3.15 3.15 0 00-2.512 1.5h1.106a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v.509a4.683 4.683 0 012.965-1.258h.001c2.509 0 4.534 2.018 4.535 4.499A4.507 4.507 0 0112.75 21z"}})])
          )
        }
      }
    