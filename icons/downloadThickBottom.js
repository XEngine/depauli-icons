
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
            children.concat([_c('path',{attrs:{"d":"M12 16.75a.743.743 0 01-.53-.22L4.721 9.78a.747.747 0 01-.163-.817.747.747 0 01.693-.463H8.25v-6c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v6h3a.75.75 0 01.53 1.281l-6.75 6.75a.746.746 0 01-.53.219zm0-1.811L16.939 10H15a.75.75 0 01-.75-.75V2.5h-4.5v6.75A.75.75 0 019 10H7.062L12 14.939z"}}),_c('path',{attrs:{"d":"M2.251 22.75a2.252 2.252 0 01-2.25-2.25v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3a2.252 2.252 0 01-2.25 2.25h-19.5z"}})])
          )
        }
      }
    