
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
            children.concat([_c('path',{attrs:{"d":"M21.75 23.5a.75.75 0 01-.75-.75V17.5h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v5.25a.75.75 0 01-.75.75zM5.25 23.5a.743.743 0 01-.53-.22L3 21.561v1.189a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75h1.125A2.628 2.628 0 016 18.625a2.643 2.643 0 01-1.463 2.352L5.78 22.22c.142.141.22.33.22.53s-.078.389-.22.53a.743.743 0 01-.53.22zm-1.875-3.75c.62 0 1.125-.505 1.125-1.125S3.995 17.5 3.375 17.5H3v2.25h.375zM17.25 23.5a.747.747 0 01-.671-.414L15 19.927v2.823a.75.75 0 01-1.5 0v-6a.749.749 0 011.421-.336l1.579 3.158V16.75a.75.75 0 011.5 0v6a.749.749 0 01-.75.75zM9.75 23.5a2.252 2.252 0 01-2.25-2.25v-3A2.252 2.252 0 019.75 16h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75V19h2.25a.75.75 0 010 1.5H9v.75c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM3.75 14.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM17.25 14.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M.75 10a.75.75 0 01-.485-1.322l9.75-8.25a.75.75 0 01.97 0l9.75 8.25a.746.746 0 01.088 1.057.752.752 0 01-1.057.087L10.5 1.982l-9.266 7.84A.747.747 0 01.75 10zM18.75 5.5a.75.75 0 01-.75-.75V2.5h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    