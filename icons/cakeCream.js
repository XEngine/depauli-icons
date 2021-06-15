
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
            children.concat([_c('path',{attrs:{"d":"M5.639 24.001A2.247 2.247 0 013.403 22L2.235 9.99a2.225 2.225 0 01.48-1.644 2.238 2.238 0 011.756-.845h15A2.253 2.253 0 0121.707 10l-1.165 11.99a2.251 2.251 0 01-2.238 2.011H5.639zm12.666-1.5a.749.749 0 00.745-.667l1.166-11.99A.752.752 0 0019.472 9h-2.25v13.5h1.083zm-2.583 0v-13.5h-3v13.5h3zm-4.5 0v-13.5h-3v13.5h3zm-6.75-13.5a.74.74 0 00-.585.282.745.745 0 00-.16.551l1.167 12.01a.746.746 0 00.744.657h1.083v-13.5H4.472zM4.578 6.001a.751.751 0 01-.727-.936A3.742 3.742 0 017.47 2.251c.198.002.393.019.585.051A4.453 4.453 0 0110.413.281 4.431 4.431 0 0111.968 0c1.628 0 3.136.895 3.921 2.302a3.695 3.695 0 014.206 2.771.742.742 0 01-.087.567.742.742 0 01-.641.36.749.749 0 01-.729-.571 2.196 2.196 0 00-2.904-1.542.757.757 0 01-.574-.021.745.745 0 01-.39-.42 2.964 2.964 0 00-1.553-1.674 2.952 2.952 0 00-2.281-.086 2.979 2.979 0 00-1.761 1.76.753.753 0 01-.964.443 2.21 2.21 0 00-.747-.138 2.239 2.239 0 00-2.16 1.686.75.75 0 01-.726.564z"}})])
          )
        }
      }
    