
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
            children.concat([_c('path',{attrs:{"d":"M4.499 12.001c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM9.003 20.999a2.235 2.235 0 01-1.836-.945L5.46 17.666l-.38.666a.752.752 0 01-1.023.28.751.751 0 01-.279-1.024l.961-1.682a.745.745 0 01.613-.377l.037-.001c.243 0 .471.117.612.314l2.389 3.342c.011.015.021.029.033.042a.751.751 0 001.058.099l3.447-2.871a.753.753 0 011.01.046l1.657 1.657a.744.744 0 010 1.06.749.749 0 01-1.06 0l-1.173-1.173-2.921 2.432a2.247 2.247 0 01-1.438.523z"}}),_c('path',{attrs:{"d":"M.908 20.172a.746.746 0 01-.67-.413 2.237 2.237 0 01.059-2.125l3-5.249a2.24 2.24 0 011.964-1.137c.728 0 1.412.355 1.828.949l2.337 3.271 2.636-2.198a2.238 2.238 0 013.033.138l3.75 3.75a.744.744 0 010 1.06.749.749 0 01-1.06 0l-3.75-3.75a.748.748 0 00-1.012-.046L9.764 17.14a.752.752 0 01-1.09-.14l-2.811-3.935a.748.748 0 00-.607-.315h-.04a.749.749 0 00-.617.378l-3.001 5.251a.743.743 0 00-.02.706.75.75 0 01-.67 1.087z"}}),_c('path',{attrs:{"d":"M10.499 12.751a.75.75 0 01-.75-.75v-7.5h-6.75a.75.75 0 01-.75-.75c0-2.138 3.547-3.75 8.25-3.75s8.25 1.612 8.25 3.75a.75.75 0 01-.75.75h-6.75v7.5a.75.75 0 01-.75.75zm6.28-9.75c-1.045-.843-3.661-1.5-6.28-1.5s-5.235.657-6.28 1.5h12.56zM8.259 24.004c-.277 0-.558-.021-.834-.064a5.328 5.328 0 01-2.93-1.452 5.43 5.43 0 01-3.746 1.514.752.752 0 01-.532-1.28.743.743 0 01.53-.22 3.93 3.93 0 003.147-1.595.752.752 0 011.209.002 3.916 3.916 0 003.151 1.593 3.9 3.9 0 003.139-1.593.748.748 0 01.605-.298c.242 0 .468.111.605.298a3.919 3.919 0 003.15 1.593 3.895 3.895 0 003.139-1.593.754.754 0 01.604-.307c.238 0 .464.114.605.305a3.93 3.93 0 003.147 1.595.75.75 0 01-.001 1.5 5.427 5.427 0 01-3.748-1.515A5.354 5.354 0 0115.755 24a5.414 5.414 0 01-3.757-1.513 5.356 5.356 0 01-.559.471 5.343 5.343 0 01-3.18 1.046z"}})])
          )
        }
      }
    