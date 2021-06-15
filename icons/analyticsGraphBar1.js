
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5H9v-12c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v12h1.5V15c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v7.5h.75a.75.75 0 010 1.5H.75zM21 22.5V15h-3v7.5h3zm-7.5 0v-12h-3v12h3zm-7.5 0V18H3v4.5h3z"}}),_c('path',{attrs:{"d":"M2.25 12.75C1.009 12.75 0 11.741 0 10.5a2.252 2.252 0 013.012-2.116l4.065-4.968A2.257 2.257 0 016.75 2.25 2.252 2.252 0 019 0c1.2 0 2.184.944 2.247 2.129l8.681 2.553a2.244 2.244 0 011.822-.932C22.991 3.75 24 4.759 24 6s-1.009 2.25-2.25 2.25c-1.2 0-2.184-.945-2.247-2.13l-8.681-2.553a2.243 2.243 0 01-2.584.799L4.173 9.334c.212.35.327.755.327 1.166a2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm19.5-4.5a.75.75 0 100 1.5.75.75 0 000-1.5zM9 1.5A.75.75 0 109 3a.75.75 0 000-1.5z"}})])
          )
        }
      }
    