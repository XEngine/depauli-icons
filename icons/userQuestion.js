
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
            children.concat([_c('path',{attrs:{"d":"M15.501 24a.75.75 0 01-.75-.75v-3.739a.747.747 0 01.75-.75c.041 0 .082.003.123.01l1.008.168a2.238 2.238 0 001.677-.388 2.236 2.236 0 00.943-1.832v-2.458a.75.75 0 01.568-.728l.935-.234a.747.747 0 00.545-.91.766.766 0 00-.103-.234l-1.819-2.729a.745.745 0 01-.126-.416v-.75c0-1.701-.756-3.327-2.13-4.578-1.544-1.406-3.65-2.18-5.93-2.18-.311 0-.627.015-.939.044-4.529.411-7.878 4.429-7.467 8.956a8.254 8.254 0 004.09 6.395.751.751 0 01.375.649v5.7a.75.75 0 01-1.5 0v-5.278a9.783 9.783 0 01-4.458-7.33 9.674 9.674 0 012.221-7.117 9.679 9.679 0 016.6-3.468A11.74 11.74 0 0111.19.002c2.655 0 5.12.913 6.94 2.572 1.689 1.539 2.62 3.558 2.62 5.687v.523l1.693 2.54c.144.215.248.452.31.703a2.235 2.235 0 01-.253 1.703 2.23 2.23 0 01-1.384 1.025l-.367.092v1.873a3.75 3.75 0 01-3.743 3.751c-.208 0-.417-.017-.624-.052l-.134-.022v2.854a.746.746 0 01-.747.749z"}}),_c('path',{attrs:{"d":"M11.573 13.5a.75.75 0 01-.75-.75v-.256a2.251 2.251 0 011.5-2.122 2.254 2.254 0 001.5-2.121c0-1.24-1.009-2.25-2.25-2.25a2.253 2.253 0 00-2.25 2.25.75.75 0 01-1.5-.001 3.754 3.754 0 013.75-3.749 3.755 3.755 0 013.75 3.751 3.756 3.756 0 01-2.5 3.535.752.752 0 00-.5.707v.257a.75.75 0 01-.75.749z"}}),_c('circle',{attrs:{"cx":"11.573","cy":"16.125","r":"1.125"}})])
          )
        }
      }
    