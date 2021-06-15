
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
            children.concat([_c('path',{attrs:{"d":"M6.001 24a.75.75 0 010-1.5h2.103L4.532 2.633A2.242 2.242 0 014.916.946 2.233 2.233 0 016.751 0h10.5a2.253 2.253 0 012.219 2.627L15.897 22.5H18a.75.75 0 010 1.5H6.001zm8.372-1.5L17.339 6H6.662l2.966 16.5h4.745zm3.236-18l.383-2.133a.752.752 0 00-.741-.868h-10.5a.744.744 0 00-.613.316.747.747 0 00-.128.56L6.392 4.5h11.217z"}}),_c('path',{attrs:{"d":"M12.001 13.5a2.252 2.252 0 01-2.25-2.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25a2.253 2.253 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    