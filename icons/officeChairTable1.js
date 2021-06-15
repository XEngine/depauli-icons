
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
            children.concat([_c('path',{attrs:{"d":"M15.75 8.25A.75.75 0 0115 7.5v-.75c0-1.654-1.346-3-3-3s-3 1.346-3 3v.75a.75.75 0 01-1.5 0v-.75c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v.75a.75.75 0 01-.75.75zM20.25 21.75a.75.75 0 01-.75-.75v-9.75h-15V21A.75.75 0 013 21v-9.75H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H21V21a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M15.75 21.751a.75.75 0 01-.75-.75V17.25H9v3.751a.75.75 0 01-1.5 0v-3.88A2.258 2.258 0 016 15a2.252 2.252 0 012.25-2.25h7.5A2.252 2.252 0 0118 15c0 .96-.615 1.808-1.5 2.121v3.88a.75.75 0 01-.75.75zm-7.5-7.501a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"}})])
          )
        }
      }
    