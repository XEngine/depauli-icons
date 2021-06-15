
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
            children.concat([_c('path',{attrs:{"d":"M19.585 17.959a.75.75 0 01-.6-1.199 8.642 8.642 0 00.675-9.372l-2.031 2.228a.75.75 0 01-1.266-.272 12.827 12.827 0 01-.073-7.728 11.308 11.308 0 00-8.212 5.772.762.762 0 01-.662.392.745.745 0 01-.522-.213L5.303 6.018a8.679 8.679 0 00-.477 10.429.751.751 0 01-.62 1.172.749.749 0 01-.62-.328C.86 13.287 1.342 7.871 4.731 4.412a.744.744 0 01.536-.225c.197 0 .382.075.523.213l1.47 1.43C9.474 2.426 13.301.206 17.359 0l.043-.001c.24 0 .467.119.608.319a.745.745 0 01.079.72 11.326 11.326 0 00-.643 6.55l1.772-1.944a.736.736 0 01.55-.245l.058.002a.742.742 0 01.562.32 10.19 10.19 0 01-.203 11.938.752.752 0 01-.6.3z"}}),_c('path',{attrs:{"d":"M6.842 23.999c-1.447 0-2.625-1.177-2.625-2.625s1.178-2.625 2.625-2.625c.392 0 .776.088 1.125.255V14.58c0-.97.619-1.828 1.539-2.135l4.536-1.261c.206-.069.439-.107.676-.107a2.25 2.25 0 012.249 2.252v5.795c0 1.448-1.177 2.625-2.625 2.625s-2.625-1.177-2.625-2.625 1.177-2.625 2.625-2.625c.392 0 .776.088 1.125.255V13.33a.749.749 0 00-.988-.711L9.944 13.88c-.273.092-.477.382-.477.7v6.794a2.628 2.628 0 01-2.625 2.625zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.505-1.125-1.125-1.125zm7.5-2.25c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.504-1.125-1.125-1.125z"}})])
          )
        }
      }
    