
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
            children.concat([_c('path',{attrs:{"d":"M6.854 24a.753.753 0 01-.6-.3l-.475-.633a2.298 2.298 0 01-.001-2.733 2.264 2.264 0 011.833-.917c.494 0 .965.157 1.363.454l.276.207v-7.703c0-1.447 1.178-2.625 2.625-2.625s2.625 1.178 2.625 2.625v5.14l3.064.681a3.758 3.758 0 012.921 4l-.1 1.121a.747.747 0 01-.813.68.748.748 0 01-.682-.814l.1-1.122a2.256 2.256 0 00-1.752-2.402l-3.651-.811a.745.745 0 01-.587-.732v-5.742c0-.62-.505-1.125-1.125-1.125s-1.125.505-1.125 1.125v9.2a.747.747 0 01-.75.75.75.75 0 01-.449-.149l-1.475-1.103a.77.77 0 00-.579-.147.779.779 0 00-.516.306.788.788 0 000 .937l.472.632a.752.752 0 01-.599 1.2zM11.501 6.75c-1.861 0-3.375-1.514-3.375-3.375S9.64 0 11.501 0s3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875S12.535 1.5 11.501 1.5z"}}),_c('path',{attrs:{"d":"M13.788 8.165a.75.75 0 01-.402-.117 3.504 3.504 0 00-1.885-.545c-.664 0-1.309.184-1.865.533a.763.763 0 01-.399.114.75.75 0 01-.399-1.385 5.007 5.007 0 012.662-.762c.959 0 1.889.27 2.69.779a.75.75 0 01-.402 1.383zM1.001 16.5a.75.75 0 01-.662-1.102 5.02 5.02 0 012.711-2.357 3.363 3.363 0 01-1.674-2.915c0-1.861 1.514-3.375 3.375-3.375s3.375 1.514 3.375 3.375a3.383 3.383 0 01-1.689 2.917 5 5 0 01.55.236.75.75 0 01-.336 1.421.767.767 0 01-.335-.079 3.486 3.486 0 00-4.654 1.483.748.748 0 01-.661.396zm3.75-8.25c-1.034 0-1.875.841-1.875 1.875S3.717 12 4.751 12s1.875-.841 1.875-1.875S5.785 8.25 4.751 8.25zM4.751 5.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM6.251 2.25a.753.753 0 01-.335-.079l-1.5-.75a.75.75 0 01.67-1.342l1.5.75a.75.75 0 01-.335 1.421zM16.751 5.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM16.751 2.25a.751.751 0 01-.336-1.421l1.5-.75a.747.747 0 011.007.335.751.751 0 01-.335 1.006l-1.5.75a.748.748 0 01-.336.08zM22.752 16.499a.749.749 0 01-.662-.397 3.488 3.488 0 00-3.076-1.859c-.548 0-1.079.127-1.578.377a.747.747 0 01-1.006-.336.75.75 0 01.335-1.006 5.2 5.2 0 01.55-.236 3.385 3.385 0 01-1.689-2.918c0-1.861 1.514-3.375 3.375-3.375s3.375 1.514 3.375 3.375a3.362 3.362 0 01-1.673 2.915 5.027 5.027 0 012.711 2.356.747.747 0 01-.309 1.015.737.737 0 01-.353.089zM19.001 8.25c-1.034 0-1.875.841-1.875 1.875S17.967 12 19.001 12s1.875-.841 1.875-1.875-.841-1.875-1.875-1.875z"}})])
          )
        }
      }
    