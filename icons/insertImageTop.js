
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
            children.concat([_c('path',{attrs:{"d":"M3.75 8.998a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72H.75a.75.75 0 010-1.5h4.189l-1.72-1.72a.746.746 0 01.001-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l3 3a.74.74 0 01.163.245.76.76 0 01.057.285.735.735 0 01-.048.261l-.007.021a.754.754 0 01-.166.25L4.28 8.778a.743.743 0 01-.53.22zM9.75 14.248a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H9.75zM9.75 18.748a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H9.75zM9.75 23.248a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H9.75zM11.25 9.748A2.252 2.252 0 019 7.498v-4.5a2.252 2.252 0 012.25-2.25h10.5A2.252 2.252 0 0124 2.998v4.5a2.252 2.252 0 01-2.25 2.25h-10.5zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-10.5z"}})])
          )
        }
      }
    