
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
            children.concat([_c('path',{attrs:{"d":"M17.25 13.501c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 3.029 24 6.751s-3.028 6.75-6.75 6.75zm0-12A5.256 5.256 0 0012 6.751c0 2.895 2.355 5.25 5.25 5.25s5.25-2.355 5.25-5.25a5.256 5.256 0 00-5.25-5.25z"}}),_c('path',{attrs:{"d":"M16.629 9.751a.743.743 0 01-.53-.22l-1.5-1.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.97.97 3.22-3.22a.744.744 0 01.53-.22c.2 0 .389.078.53.22.142.141.22.33.22.53s-.078.389-.22.53l-3.75 3.75a.743.743 0 01-.53.22zM.75 19.501a.751.751 0 01-.631-1.156C.13 18.327 1.5 16.031 1.5 10.501A8.236 8.236 0 019 2.285V.751a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75A6.758 6.758 0 003 10.501c0 3.824-.607 6.213-1.084 7.5h15.517a8.083 8.083 0 01-.664-1.995.747.747 0 01.737-.893.75.75 0 01.736.607c.18.928.567 1.825 1.118 2.594a.747.747 0 01-.609 1.187H.75zM9.747 24.001a2.835 2.835 0 01-2.718-2.039.751.751 0 01.72-.961c.33 0 .626.221.719.538a1.34 1.34 0 001.66.906c.438-.129.777-.468.906-.906a.755.755 0 01.93-.509.751.751 0 01.51.931 2.826 2.826 0 01-1.923 1.923 2.834 2.834 0 01-.804.117z"}})])
          )
        }
      }
    