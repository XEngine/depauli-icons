
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
            children.concat([_c('path',{attrs:{"d":"M9.75 24a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h12A2.252 2.252 0 0124 15.75v6A2.252 2.252 0 0121.75 24h-12zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-12z"}}),_c('path',{attrs:{"d":"M12 21a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0V18h.75a.75.75 0 010 1.5h-.75v.75A.75.75 0 0112 21zM19.875 18.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0 1.126 1.126 0 01.982 1.244c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011zM16.125 21.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.717.717 0 01-.001-.262c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011zM10.5 10.95a.751.751 0 01-.517-1.295A2.377 2.377 0 0111.625 9a2.37 2.37 0 011.641.656.745.745 0 01.233.525.752.752 0 01-1.267.563.878.878 0 00-1.216 0 .744.744 0 01-.516.206zM3.75 10.95a.751.751 0 01-.517-1.294C3.678 9.233 4.261 9 4.875 9s1.197.233 1.642.656a.745.745 0 01.233.525.746.746 0 01-.75.769.748.748 0 01-.517-.206.88.88 0 00-1.216-.001.744.744 0 01-.517.207z"}}),_c('path',{attrs:{"d":"M4.5 17.75a.75.75 0 01-.375-.101A8.271 8.271 0 010 10.5V8.25C0 3.701 3.701 0 8.25 0s8.25 3.701 8.25 8.25v2.25c0 .271-.013.54-.041.822a.758.758 0 01-.75.678.751.751 0 01-.742-.822A7.15 7.15 0 0015 10.5V8.242c-3.579-.063-6.257-.612-7.964-1.632a5.267 5.267 0 01-.933-.699C4.534 8.222 1.532 8.25 1.5 8.25v2.25a6.771 6.771 0 003.375 5.851c.173.1.298.262.349.455a.751.751 0 01-.724.944zM8.25 1.5c-3.132 0-5.885 2.224-6.579 5.243.645-.044 2.891-.356 3.617-2.547a.748.748 0 01.71-.514l.057.002a.749.749 0 01.677.587c.053.14 1 2.299 8.096 2.467C14.131 3.722 11.38 1.5 8.25 1.5z"}})])
          )
        }
      }
    