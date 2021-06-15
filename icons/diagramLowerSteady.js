
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
            children.concat([_c('path',{attrs:{"d":"M3.685 24A3.69 3.69 0 010 20.315V.75a.75.75 0 011.5 0v19.565c0 1.205.98 2.185 2.185 2.185H6a2.255 2.255 0 002.25-2.199v-6.834c.035-2.04 1.715-3.704 3.745-3.717h9.425l-1.704-1.723a.744.744 0 01-.217-.531c.001-.2.08-.388.223-.529a.743.743 0 01.527-.217c.202 0 .392.079.534.223l2.856 2.888A.751.751 0 0124 10.5v.035a.744.744 0 01-.223.531l-3 2.967a.743.743 0 01-.527.217.74.74 0 01-.533-.223c-.141-.142-.218-.331-.217-.531s.08-.388.223-.529l1.736-1.717H12a2.281 2.281 0 00-2.25 2.23v6.835C9.712 22.35 8.034 24 6.009 24H3.685z"}})])
          )
        }
      }
    