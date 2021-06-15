
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V16.5h-21v6.75a.75.75 0 01-1.5 0V.75a.75.75 0 011.5 0v.75h21V.75a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zm-.75-9V3h-21v12h21z"}}),_c('path',{attrs:{"d":"M15 13.5a2.252 2.252 0 01-2.25-2.25v-4.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v4.5A2.252 2.252 0 0115 13.5zM15 6a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5A.75.75 0 0015 6zM9 13.5a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 019 4.5h1.5a.75.75 0 010 1.5H9a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-.75a.75.75 0 010-1.5h.75a.75.75 0 01.75.75v1.5A2.252 2.252 0 019 13.5z"}})])
          )
        }
      }
    