
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
            children.concat([_c('path',{attrs:{"d":"M21 10.5a.75.75 0 01-.75-.75V4.5h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v5.25a.75.75 0 01-.75.75zM4.5 10.5a.743.743 0 01-.53-.22L2.25 8.56v1.19a.75.75 0 01-1.5 0v-6A.75.75 0 011.5 3h1.125A2.629 2.629 0 015.25 5.625a2.643 2.643 0 01-1.463 2.352L5.03 9.22c.142.141.22.33.22.53s-.078.389-.22.53a.744.744 0 01-.53.22zM2.625 6.75c.62 0 1.125-.505 1.125-1.125S3.245 4.5 2.625 4.5H2.25v2.25h.375zM16.5 10.5a.747.747 0 01-.671-.414L14.25 6.927V9.75a.75.75 0 01-1.5 0v-6a.749.749 0 011.421-.336l1.579 3.159V3.75a.75.75 0 011.5 0v6a.749.749 0 01-.75.75zM9.001 10.5a2.252 2.252 0 01-2.25-2.25V6.776L6.75 6.75l.001-.03V5.25A2.252 2.252 0 019.001 3h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75V6H10.5a.75.75 0 010 1.5H8.251v.75c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM.75 1.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM23.251 24a.75.75 0 01-.288-.057 28.342 28.342 0 00-10.962-2.177c-3.807 0-7.495.732-10.961 2.177a.749.749 0 11-.578-1.385 29.819 29.819 0 0110.788-2.28V13.5H.75A.75.75 0 11.751 12h22.5a.75.75 0 010 1.5h-10.5v6.777a29.84 29.84 0 0110.789 2.28.747.747 0 01.404.981.75.75 0 01-.693.462z"}})])
          )
        }
      }
    