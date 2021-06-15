
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
            children.concat([_c('path',{attrs:{"d":"M.75 3a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H.75zM20.25 3a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM.75 24a.75.75 0 01-.75-.75v-7.5a2.252 2.252 0 012.25-2.25h12a2.252 2.252 0 012.25 2.25v7.5a.75.75 0 01-.75.75h-15zM15 22.5V18H9v4.5h6zm-7.5 0V18h-6v4.5h6zm7.5-6v-.75a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v.75H15z"}}),_c('path',{attrs:{"d":"M3.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM9.75 10.5A.75.75 0 019 9.75c0-2.652 2.279-4.882 5.25-5.208V3.75c0-.414.336-.75.75-.75a.75.75 0 000-1.5.75.75 0 010-1.5 2.252 2.252 0 012.25 2.25c0 .96-.615 1.808-1.5 2.121v.171C18.721 4.868 21 7.098 21 9.75a.75.75 0 01-.75.75H9.75zM19.409 9c-.423-1.712-2.27-3-4.409-3s-3.986 1.288-4.409 3h8.818z"}})])
          )
        }
      }
    