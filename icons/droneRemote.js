
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
            children.concat([_c('path',{attrs:{"d":"M18.75 15a.75.75 0 010-1.5h1.336a.757.757 0 00.639-.361.755.755 0 00.095-.577 7.99 7.99 0 00-2.781-4.379c-.21.149-.398.314-.562.494a5.21 5.21 0 01-1.745 1.324c.489.546.769 1.258.769 2 0 1.654-1.346 3-3 3s-3-1.346-3-3c0-.742.28-1.455.771-2.001a5.216 5.216 0 01-1.763-1.341 3.485 3.485 0 00-.541-.474 8.43 8.43 0 00-2.172 2.659.748.748 0 01-1.011.322.751.751 0 01-.322-1.011 9.967 9.967 0 011.959-2.609 3.627 3.627 0 00-.579-.047l-.086.001H5.25C4.009 7.5 3 6.491 3 5.25S4.009 3 5.25 3h1.488l.112.002a3.626 3.626 0 002.674-1.178A5.248 5.248 0 0113.912.018c1.398.11 2.67.758 3.581 1.824a3.6 3.6 0 002.651 1.16l.098-.001h1.508a2.25 2.25 0 010 4.499h-1.488l-.1-.001c-.191 0-.383.016-.574.047a9.538 9.538 0 012.692 4.672c.138.592.038 1.2-.281 1.714a2.254 2.254 0 01-1.907 1.069H18.75zm-5.25-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S15 12.827 15 12s-.673-1.5-1.5-1.5zM9.37 6.661c.475.269.9.607 1.262 1.004a3.746 3.746 0 002.872 1.333c.902 0 1.742-.311 2.43-.898.149-.127.289-.267.417-.417a5.177 5.177 0 011.273-1.019.769.769 0 01.223-.113A5.157 5.157 0 0120.28 6h1.469a.75.75 0 00.001-1.5h-1.488a5.108 5.108 0 01-3.894-1.665 3.746 3.746 0 00-2.875-1.333c-.9 0-1.74.311-2.428.899a3.89 3.89 0 00-.416.416A5.15 5.15 0 016.85 4.501l-.132-.002H5.25A.75.75 0 005.25 6h1.488a5.103 5.103 0 012.429.557.736.736 0 01.203.104zM3.75 1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM20.25 1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM2.25 24A2.252 2.252 0 010 21.75v-6a2.252 2.252 0 012.25-2.25h3a2.252 2.252 0 012.25 2.25v6A2.252 2.252 0 015.25 24h-3zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-3z"}}),_c('circle',{attrs:{"cx":"3.75","cy":"20.25","r":"1.125"}})])
          )
        }
      }
    