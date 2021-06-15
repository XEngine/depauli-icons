
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
            children.concat([_c('path',{attrs:{"d":"M.75 18.75a.743.743 0 01-.53-.22C.078 18.389 0 18.2 0 18s.078-.389.22-.53l7.189-7.189c.425-.425.99-.658 1.592-.658.602 0 1.167.234 1.591.658l3.128 3.128a.747.747 0 001.062 0l6.659-6.659H16.5a.75.75 0 010-1.5h6.75a.735.735 0 01.293.06.75.75 0 01.401.405l.01.026c.03.081.046.17.046.259v6.75a.75.75 0 01-1.5 0V7.811l-6.659 6.659c-.425.425-.99.658-1.592.658a2.23 2.23 0 01-1.59-.658L9.53 11.341a.744.744 0 00-.53-.219c-.2 0-.389.078-.53.219L1.28 18.53a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    