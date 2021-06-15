
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24A2.252 2.252 0 016 21.75V16.5a6.008 6.008 0 016-5.996c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5A4.506 4.506 0 007.5 6a.752.752 0 01-1.281.53A.743.743 0 016 6a6.008 6.008 0 016-5.996 6.007 6.007 0 016 5.994V21.75A2.252 2.252 0 0115.75 24h-7.5zM16.5 9.968a6.022 6.022 0 01-4.5 2.036 4.506 4.506 0 00-4.5 4.497v5.25c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V9.968z"}}),_c('path',{attrs:{"d":"M9.75 21.004a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    