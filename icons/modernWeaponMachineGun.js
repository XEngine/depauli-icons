
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
            children.concat([_c('path',{attrs:{"d":"M6.751 24a.743.743 0 01-.53-.22l-6-6a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l.97.97 7.188-7.191-.969-.968a.746.746 0 01.001-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l.968.968 2.689-2.69-.218-.218c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.208.208a.747.747 0 00.115-.274l.465-2.324a2.24 2.24 0 011.765-1.765l6.52-1.3a.75.75 0 01.884.882l-1.304 6.519a2.242 2.242 0 01-1.765 1.765l-2.324.465a.76.76 0 00-.272.113l.21.21c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-.22-.22-2.62 2.62c.461.27.991.416 1.529.416.242 0 .484-.03.717-.088a.744.744 0 01.909.546.746.746 0 01-.546.909 4.523 4.523 0 01-3.693-.699l-2.115 2.115 2.136 3.82a1.507 1.507 0 01-.25 1.798l-1.008 1.005a1.488 1.488 0 01-1.059.438c-.4 0-.777-.156-1.059-.438L7.502 20.56l-1.191 1.19.97.97a.744.744 0 010 1.06.744.744 0 01-.53.22zm4.5-1.81l1.009-1.006-1.93-3.452L8.561 19.5l2.69 2.69zm-6-1.501L16.19 9.75l-1.941-1.941-3.194 3.195-.024.026-.026.024-7.694 7.696 1.94 1.939zM17.254 8.693a2.246 2.246 0 011.045-.517l2.324-.465a.75.75 0 00.589-.589l1.083-5.417-5.417 1.08a.745.745 0 00-.588.588l-.465 2.324c-.078.391-.257.75-.519 1.047l1.948 1.949z"}})])
          )
        }
      }
    