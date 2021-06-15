
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
            children.concat([_c('path',{attrs:{"d":"M6.75 19.5a.75.75 0 010-1.5h.75v-4.5h-.75a.75.75 0 010-1.5h.75c.827 0 1.5.673 1.5 1.5V18h.75a.75.75 0 010 1.5h-3zM14.58 19.5a.742.742 0 01-.682-.44.742.742 0 01-.019-.574l1.87-4.986h-1.917a.75.75 0 010-1.5h1.918c.404.002.781.16 1.063.445a1.493 1.493 0 01.34 1.582l-1.87 4.987a.756.756 0 01-.703.486z"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3H6V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zM22.5 9V5.25a.75.75 0 00-.75-.75H18V6a.75.75 0 01-1.5 0V4.5h-9V6A.75.75 0 016 6V4.5H2.25a.75.75 0 00-.75.75V9h21z"}})])
          )
        }
      }
    