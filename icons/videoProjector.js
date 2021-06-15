
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-4.5a3.754 3.754 0 013.75-3.75h7.258a5.239 5.239 0 014.742-3 5.24 5.24 0 014.746 3.008A3.755 3.755 0 0124 17.25v4.5A2.252 2.252 0 0121.75 24H2.25zm1.5-9a2.252 2.252 0 00-2.25 2.25v4.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-4.5a2.27 2.27 0 00-1.541-2.133c.027.213.041.425.041.633 0 2.895-2.355 5.25-5.25 5.25s-5.25-2.355-5.25-5.25c0-.246.019-.497.057-.75H3.75zm12-3C13.682 12 12 13.682 12 15.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75S17.818 12 15.75 12z"}}),_c('path',{attrs:{"d":"M3.75 20.25A.75.75 0 013 19.5V18a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM6.75 20.25A.75.75 0 016 19.5V18a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM15.75 18c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25S18 14.509 18 15.75 16.991 18 15.75 18zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9.856 9.005c-.429 0-.832-.167-1.135-.47A1.595 1.595 0 018.25 7.4V1.606A1.61 1.61 0 019.857 0c.247 0 .495.059.718.171l5.788 2.899a1.609 1.609 0 010 2.872l-5.789 2.894a1.62 1.62 0 01-.718.169c.001 0 0 0 0 0zM9.857 1.5a.102.102 0 00-.034.006.102.102 0 00-.062.053.11.11 0 00-.011.048V7.4c0 .029.01.054.031.074a.102.102 0 00.075.031.108.108 0 00.047-.011L15.692 4.6a.106.106 0 00.047-.142.111.111 0 00-.048-.048L9.903 1.511a.11.11 0 00-.046-.011zM23 2a1 1 0 01-.002-2 1.002 1.002 0 01.967 1.262A1.003 1.003 0 0123 2zM22.034 6.06a.997.997 0 01-.973-1.239 1.013 1.013 0 011.24-.724c.258.072.472.24.603.473a.99.99 0 01.091.76 1 1 0 01-.961.73zM20.67 10.693a1.002 1.002 0 01-.966-1.258 1.001 1.001 0 011.224-.708 1 1 0 01-.258 1.966zM1.001 2C.55 2 .153 1.696.035 1.262A.992.992 0 01.133.503.993.993 0 011.002 0a1 1 0 01-.001 2zM1.968 6.06c-.447 0-.843-.3-.964-.73-.072-.257-.039-.527.092-.76s.345-.401.603-.472c.019-.005.041-.011.06-.014a.875.875 0 01.208-.024 1.009 1.009 0 01.971.757.996.996 0 01-.97 1.243zM3.33 10.693c-.452 0-.85-.305-.967-.742a1.001 1.001 0 011.933-.516 1.003 1.003 0 01-.966 1.258z"}})])
          )
        }
      }
    