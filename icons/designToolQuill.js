
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
            children.concat([_c('path',{attrs:{"d":"M1.126 23.625a.752.752 0 01-.53-1.281l2.403-2.403c-2.153-2.764-1.65-7.05 1.222-9.922C10.092 4.148 22.154.555 22.665.405a.743.743 0 01.742.189.747.747 0 01.189.741c-.15.511-3.749 12.578-9.615 18.444-1.62 1.62-3.774 2.55-5.907 2.55-1.513 0-2.892-.459-4.01-1.333l-2.408 2.408a.741.741 0 01-.53.221zm4.005-3.695c.825.591 1.835.901 2.945.901 1.736 0 3.502-.77 4.844-2.112 4.455-4.455 7.638-12.988 8.795-16.435-3.446 1.158-11.978 4.34-16.434 8.796-2.276 2.276-2.767 5.613-1.21 7.789L15.033 7.907a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L5.131 19.93z"}})])
          )
        }
      }
    