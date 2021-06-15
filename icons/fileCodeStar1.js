
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
            children.concat([_c('path',{attrs:{"d":"M13.376 24.002a1.544 1.544 0 01-1.33-.764 1.54 1.54 0 01-.088-1.366l1.2-2.759-2.097-1.463a1.486 1.486 0 01.913-2.649l.05.001h2.457l1.359-3.586a.571.571 0 01.04-.088 1.544 1.544 0 011.369-.82 1.553 1.553 0 011.405.906l1.356 3.587L22.529 15a1.484 1.484 0 01.981 2.594.736.736 0 01-.07.055l-2.097 1.464 1.196 2.75a1.54 1.54 0 01-.816 2.019 1.538 1.538 0 01-1.365-.088l-3.107-1.749-3.115 1.754a1.522 1.522 0 01-.76.203zm1.144-5.768c.292.203.4.588.259.914l-1.441 3.313s0 .013.005.023c.009.016.026.017.031.017l3.509-1.971a.752.752 0 01.736 0l3.483 1.961.028.009c.03-.009.038-.03.031-.048l-1.438-3.304a.751.751 0 01.259-.914l2.483-1.733h-2.972a.755.755 0 01-.702-.485L17.28 12.02a.022.022 0 00-.008-.005l-.147-.363.096.316.013.005-.007.017.006.02a.046.046 0 00-.017.009l-1.515 3.998a.753.753 0 01-.701.484h-2.963l2.483 1.733z"}}),_c('path',{attrs:{"d":"M2.25 21.005A2.252 2.252 0 010 18.755v-16.5A2.252 2.252 0 012.25.005h10.629c.602 0 1.167.234 1.591.659l2.871 2.871c.426.424.659.99.659 1.591v3.129a.75.75 0 01-1.5 0v-3.13a.758.758 0 00-.219-.531l-2.871-2.87a.756.756 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M9 11.255a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.744.744 0 011.06 0l2.25 2.25c.142.141.22.329.22.53s-.078.389-.22.53l-2.25 2.25a.741.741 0 01-.53.22zM6 11.255a.743.743 0 01-.53-.22l-2.25-2.25a.744.744 0 010-1.06l2.25-2.25a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72 1.72 1.72c.142.141.22.33.22.53s-.078.389-.22.53a.741.741 0 01-.53.22z"}})])
          )
        }
      }
    