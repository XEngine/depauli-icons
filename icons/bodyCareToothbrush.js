
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
            children.concat([_c('path',{attrs:{"d":"M.751 23.593a.751.751 0 01-.534-1.277l10.088-10.233a2.429 2.429 0 011.726-.718h2.179a.93.93 0 00.662-.274l1.956-1.956-2.692-2.692a1.242 1.242 0 01-.366-.884c0-.334.13-.648.366-.884l4.06-4.06c.236-.236.55-.366.884-.366.334 0 .648.13.884.366l2.692 2.692.066-.066a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-7.849 7.85a2.422 2.422 0 01-1.721.713h-2.18a.926.926 0 00-.661.274L1.285 23.369a.746.746 0 01-.534.224zM17.888 8.075l3.706-3.707-2.515-2.515-1.206 1.207 1.263 1.264a.744.744 0 010 1.06c-.142.142-.33.219-.53.219s-.389-.078-.53-.22l-1.263-1.264-1.44 1.441 2.515 2.515z"}})])
          )
        }
      }
    