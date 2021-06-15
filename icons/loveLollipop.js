
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l4.5-4.5a2.236 2.236 0 01-.22-.97V6c0-3.308 2.692-6 6-6s6 2.692 6 6v1.5H18c3.308 0 6 2.692 6 6s-2.692 6-6 6H6.75c-.338 0-.668-.075-.969-.22l-4.501 4.5a.743.743 0 01-.53.22zM10.5 1.5A4.505 4.505 0 006 6v11.25c0 .414.336.75.75.75H18c2.481 0 4.5-2.019 4.5-4.5S20.481 9 18 9h-2.25a.75.75 0 01-.75-.75V6c0-2.481-2.019-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M9.75 16.5a2.252 2.252 0 01-2.25-2.25V9c0-1.654 1.346-3 3-3s3 1.346 3 3v1.5H15c1.654 0 3 1.346 3 3s-1.346 3-3 3H9.75zm.75-9C9.673 7.5 9 8.173 9 9v5.25c0 .414.336.75.75.75H15c.827 0 1.5-.673 1.5-1.5S15.827 12 15 12h-2.25a.75.75 0 01-.75-.75V9c0-.827-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    