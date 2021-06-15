
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
            children.concat([_c('path',{attrs:{"d":"M6 24a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 15.75v-12A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v12a3.754 3.754 0 01-3.75 3.75h-4.365l.5 3H18a.75.75 0 010 1.5H6zm8.865-1.5l-.5-3h-4.73l-.5 3h5.73zm-13.233-6A2.262 2.262 0 003.75 18h16.5c.96 0 1.805-.621 2.118-1.5H1.632zM22.5 15V3.75a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75V15h21z"}}),_c('path',{attrs:{"d":"M12 12.76a6.487 6.487 0 01-4.377-1.706.75.75 0 111.01-1.108 4.989 4.989 0 003.366 1.313 4.991 4.991 0 003.367-1.313.75.75 0 111.01 1.109A6.487 6.487 0 0112 12.76zM9 7.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 019 7.5zM15 7.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    