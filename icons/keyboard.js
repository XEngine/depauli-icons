
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25v-6a3.754 3.754 0 013.75-3.75H6v-.75a5.256 5.256 0 015.25-5.25H15A3.754 3.754 0 0018.75.75a.75.75 0 011.5 0A5.256 5.256 0 0115 6h-3.75A3.754 3.754 0 007.5 9.75v.75h12.75A3.754 3.754 0 0124 14.25v6A3.754 3.754 0 0120.25 24H3.75zm0-12a2.252 2.252 0 00-2.25 2.25v6a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-6A2.252 2.252 0 0020.25 12H3.75z"}}),_c('path',{attrs:{"d":"M6.75 15a.75.75 0 010-1.5h1.5c.414 0 .75.336.75.75S6.75 15 6.75 15zM15.75 15a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 15a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM4.5 18a.75.75 0 010-1.5H6A.75.75 0 016 18H4.5zM9 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H9zM13.5 18a.75.75 0 010-1.5H15a.75.75 0 010 1.5h-1.5zM18 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H18zM6.75 21a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75z"}})])
          )
        }
      }
    