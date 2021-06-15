
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h1.615l.5-3H5.25A2.252 2.252 0 013 17.25v-1.5a.75.75 0 01.75-.75H22.5V6.75a.75.75 0 00-.75-.75h-10.5a.75.75 0 010-1.5h10.5A2.252 2.252 0 0124 6.75v10.5a2.252 2.252 0 01-2.25 2.25h-5.115l.5 3h1.615a.75.75 0 010 1.5H8.25zm7.365-1.5l-.5-3h-3.229l-.5 3h4.229zM4.5 17.25c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-.75h-18v.75z"}}),_c('path',{attrs:{"d":"M2.25 13.5A2.252 2.252 0 010 11.25v-9A2.252 2.252 0 012.25 0h4.5A2.252 2.252 0 019 2.25v9a2.252 2.252 0 01-2.25 2.25h-4.5zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.75h-6v.75zM7.5 9V2.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V9h6z"}})])
          )
        }
      }
    