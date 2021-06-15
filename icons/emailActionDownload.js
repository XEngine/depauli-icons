
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-10.5A2.252 2.252 0 012.25 9h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v.315l9.472 5.412a2.08 2.08 0 002.056 0l9.472-5.412v-.315a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3A2.252 2.252 0 0124 11.25v10.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-8.458l-8.728 4.987a3.58 3.58 0 01-3.544 0L1.5 13.292v8.458z"}}),_c('path',{attrs:{"d":"M12 13.5a.742.742 0 01-.223-.036l-.046-.016a.733.733 0 01-.164-.088c-.015-.01-.03-.02-.043-.031l-3.743-2.994a.75.75 0 01.937-1.171l2.532 2.025V.75a.75.75 0 011.5 0v10.439l2.531-2.025a.747.747 0 011.055.118.75.75 0 01-.117 1.054l-3.75 3a.703.703 0 01-.248.129.749.749 0 01-.221.035z"}})])
          )
        }
      }
    