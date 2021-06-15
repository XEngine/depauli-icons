
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
            children.concat([_c('path',{attrs:{"d":"M10.257 21.851a8.3 8.3 0 01-6.984-3.84l-2.027 1.73a.748.748 0 01-1.058-.083.743.743 0 01-.177-.546.744.744 0 01.261-.511l2.296-1.959a8.204 8.204 0 01-.593-3.072c0-7.309 5.71-7.938 10.748-8.492 3.287-.362 6.685-.736 8.995-2.653.236-.177.495-.265.763-.265.18 0 .354.039.517.117.366.152.647.512.719.931 1.135 6.649-1.167 11.055-3.298 13.581-2.636 3.122-6.53 5.062-10.162 5.062zm-5.831-4.824a6.777 6.777 0 005.831 3.324c3.203 0 6.657-1.736 9.016-4.532 1.882-2.23 3.908-6.098 3.031-11.947-2.593 1.944-6.059 2.326-9.416 2.696-5.259.579-9.412 1.036-9.412 7.001 0 .694.105 1.375.312 2.031l.386-.329a25.67 25.67 0 018.897-4.439.752.752 0 01.85 1.094.747.747 0 01-.453.352 24.122 24.122 0 00-8.35 4.157l-.692.592z"}})])
          )
        }
      }
    