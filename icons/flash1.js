
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
            children.concat([_c('path',{attrs:{"d":"M10.5 23.997a.754.754 0 01-.75-.75v-8.25H7.023a1.774 1.774 0 01-1.51-2.701L12.861.354a.755.755 0 01.843-.329.754.754 0 01.546.722v8.25h2.727a1.774 1.774 0 011.509 2.702L11.139 23.64a.756.756 0 01-.639.357zM6.791 13.082a.273.273 0 00.231.416H10.5a.75.75 0 01.75.75v6.35l5.959-9.684a.272.272 0 00-.09-.375.27.27 0 00-.143-.041H13.5a.75.75 0 01-.75-.75v-6.35l-5.959 9.684z"}})])
          )
        }
      }
    