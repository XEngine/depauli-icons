
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
            children.concat([_c('path',{attrs:{"d":"M5.25 20.283A2.252 2.252 0 013 18.033v-7.5a.75.75 0 011.5 0v7.5c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3zM.75 9.783A.75.75 0 01.266 8.46l8.781-7.43A2.255 2.255 0 0110.5.496c.53 0 1.046.19 1.454.534l7.279 6.159a.746.746 0 01.088 1.057.751.751 0 01-1.057.088l-7.279-6.159a.754.754 0 00-.969 0l-8.781 7.43a.752.752 0 01-.485.178zM18.75 5.283a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75zM17.25 23.283c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 12.811 24 16.533s-3.028 6.75-6.75 6.75zm0-12a5.256 5.256 0 00-5.25 5.25c0 2.895 2.355 5.25 5.25 5.25s5.25-2.355 5.25-5.25a5.256 5.256 0 00-5.25-5.25z"}}),_c('path',{attrs:{"d":"M14.25 17.283a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    