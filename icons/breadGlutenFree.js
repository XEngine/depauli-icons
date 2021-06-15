
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
            children.concat([_c('path',{attrs:{"d":"M18 19.12a.743.743 0 01-.53-.22l-1.591-1.591a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.591 1.591a.744.744 0 010 1.06.75.75 0 01-.53.221zM13.077 19.071c-1.121 0-3.482-.463-3.62-1.893-.15-1.548 2.419-2.481 3.484-2.597a2.154 2.154 0 011.853.582c.39.383.616.893.637 1.438a2.14 2.14 0 01-2.058 2.459 3.83 3.83 0 01-.296.011zM10.98 17.03c.24.209 1.175.545 2.032.545.086 0 .169-.004.248-.011a.875.875 0 01.07-.003.633.633 0 00.614-.749.795.795 0 01-.013-.13.63.63 0 00-.19-.448.63.63 0 00-.444-.182l-.01-.375.003.375a.607.607 0 00-.112.011.617.617 0 01-.064.009c-.852.082-1.912.666-2.134.958zM9.327 15.32c-1.122 0-3.484-.463-3.623-1.894-.047-.483.156-1.204 1.386-1.889.662-.369 1.464-.639 2.098-.707a2.123 2.123 0 011.857.584c.388.383.613.893.633 1.437a2.14 2.14 0 01-2.058 2.458 3.71 3.71 0 01-.293.011zm-2.09-2.034c.255.21 1.181.537 2.031.537.083 0 .164-.003.241-.01a.809.809 0 01.068-.003.633.633 0 00.614-.75.844.844 0 01-.013-.133.629.629 0 00-.632-.627l-.007-.375.002.375a.607.607 0 00-.112.011 1.502 1.502 0 01-.066.01c-.427.041-1.062.258-1.545.528-.331.184-.505.345-.581.437z"}}),_c('path',{attrs:{"d":"M16.548 15.826c-.109 0-.217-.009-.322-.026a2.145 2.145 0 01-2.018-2.49c.11-1.006.997-3.491 2.472-3.491.042 0 .084.002.126.006.379.036.718.232 1.006.581.634.769.965 2.34.878 3.333a2.12 2.12 0 01-.632 1.469 2.12 2.12 0 01-1.501.617h-.009zm.101-4.47c-.295.237-.87 1.284-.952 2.131a.818.818 0 01-.009.064.633.633 0 00.62.751.74.74 0 01.133.013.627.627 0 00.563-.172.624.624 0 00.187-.446l.003-.065c.062-.64-.179-1.834-.54-2.271l-.005-.005zM12.793 12.074a2.141 2.141 0 01-.312-.025 2.143 2.143 0 01-2.024-2.49c.068-.634.338-1.437.707-2.099.514-.923 1.108-1.392 1.765-1.392.041 0 .083.002.124.006.484.047 1.152.384 1.592 1.721.237.722.35 1.562.294 2.196a2.143 2.143 0 01-2.132 2.082h-.014zm.112-4.46c-.093.079-.25.253-.43.576-.269.483-.486 1.119-.528 1.545a.492.492 0 01-.01.067.632.632 0 00.619.747c.045 0 .09.004.134.013a.635.635 0 00.749-.617l.003-.063c.042-.428-.05-1.092-.223-1.618-.116-.353-.238-.554-.314-.65zM7.922 10.599a2.139 2.139 0 01-1.612-.738c-.7-.715-1.446-2.141-1.444-3.138 0-.45.137-.814.407-1.083.269-.268.633-.403 1.083-.403 1.086 0 2.513.835 3.135 1.443a2.138 2.138 0 01.024 3.206 2.13 2.13 0 01-1.593.713zM6.366 6.728c0 .566.574 1.643 1.027 2.096a.757.757 0 01.046.05.625.625 0 00.483.225.634.634 0 00.486-.226.852.852 0 01.095-.095.631.631 0 00-.001-.969 1.127 1.127 0 01-.05-.045C7.91 7.219 6.84 6.735 6.366 6.728z"}}),_c('path',{attrs:{"d":"M12 23.986c-3.182 0-6.18-1.237-8.445-3.483a.384.384 0 01-.076-.077A11.904 11.904 0 010 11.986c0-6.617 5.383-12 12-12a11.92 11.92 0 018.43 3.468.397.397 0 01.098.099A11.916 11.916 0 0124 11.986c0 6.617-5.383 12-12 12zm-6.871-4.069A10.452 10.452 0 0012 22.487c5.79 0 10.5-4.71 10.5-10.5 0-2.534-.909-4.958-2.569-6.87l-2.151 2.15a.744.744 0 01-1.06 0 .744.744 0 010-1.06l2.151-2.15a10.45 10.45 0 00-6.87-2.569c-5.79 0-10.5 4.71-10.5 10.5 0 2.533.909 4.958 2.569 6.87l2.151-2.15a.744.744 0 011.06 0c.142.142.22.33.22.531s-.078.389-.22.53l-2.152 2.148z"}})])
          )
        }
      }
    