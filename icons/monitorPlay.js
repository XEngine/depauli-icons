
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24.003a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 15.753v-12A3.754 3.754 0 013.75.003h16.5A3.754 3.754 0 0124 3.753v12a3.754 3.754 0 01-3.75 3.75h-5.115l.5 3h1.615a.75.75 0 010 1.5H6.75zm7.365-1.5l-.5-3h-3.229l-.5 3h4.229zm-10.365-21a2.252 2.252 0 00-2.25 2.25v12a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-12a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M9.002 14.429a1.509 1.509 0 01-1.288-.728 1.505 1.505 0 01-.214-.772V6.578a1.502 1.502 0 012.272-1.286l5.292 3.175c.343.205.586.532.683.921a1.493 1.493 0 01-.684 1.652l-5.292 3.175c-.231.14-.498.214-.769.214zM9 12.929l5.292-3.175L9 6.578v6.351z"}})])
          )
        }
      }
    