
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-10.5C0 10.01 1.009 9 2.25 9H9a.75.75 0 010 1.5H2.25a.75.75 0 00-.75.75v.315l9.472 5.412a2.08 2.08 0 002.056 0l9.472-5.412v-.315a.75.75 0 00-.75-.75H15A.75.75 0 0115 9h6.75C22.991 9 24 10.01 24 11.25v10.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-8.458l-8.728 4.987a3.58 3.58 0 01-3.544 0L1.5 13.293v8.457z"}}),_c('path',{attrs:{"d":"M12 13.5a.75.75 0 01-.75-.75V2.311L8.719 4.336a.747.747 0 01-1.055-.118.751.751 0 01.117-1.054l3.75-3a.743.743 0 01.209-.117l.039-.013a.748.748 0 01.443.001c.009.003.036.011.044.015a.69.69 0 01.202.115l3.75 3A.75.75 0 0115.75 4.5a.753.753 0 01-.468-.164L12.75 2.311V12.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    