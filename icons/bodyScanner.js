
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 01-.75-.75v-3.879C.615 19.058 0 18.21 0 17.25s.615-1.808 1.5-2.121V.75a.75.75 0 011.5 0v14.379c.885.313 1.5 1.161 1.5 2.121s-.615 1.808-1.5 2.121v3.879a.75.75 0 01-.75.75zm0-7.5a.75.75 0 100 1.5.75.75 0 000-1.5zM21.75 24a.75.75 0 01-.75-.75v-3.879c-.885-.314-1.5-1.162-1.5-2.121s.615-1.808 1.5-2.121V.75a.75.75 0 011.5 0v14.379c.885.314 1.5 1.162 1.5 2.121s-.615 1.808-1.5 2.121v3.879a.75.75 0 01-.75.75zm0-7.5a.75.75 0 100 1.5.75.75 0 000-1.5zM12 10.5c-2.068 0-3.75-1.682-3.75-3.75S9.932 3 12 3s3.75 1.682 3.75 3.75S14.068 10.5 12 10.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 9 12 9s2.25-1.009 2.25-2.25S13.241 4.5 12 4.5zM15.75 15.75A.75.75 0 0115 15c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-1.5 0c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5a.75.75 0 01-.75.75zM6.75 24a.75.75 0 010-1.5h2.789l-.517-2.068a.747.747 0 01.728-.932c.345 0 .644.233.728.568l.608 2.432h1.829l.608-2.432a.75.75 0 111.455.364L14.46 22.5h2.79a.75.75 0 010 1.5H6.75zM6.75 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.75 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    