
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-3.749-3.75a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47v-8.689a.75.75 0 011.5 0v8.689l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75a.763.763 0 01-.246.164l-.026.01a.747.747 0 01-.258.046zM2.25 8.998A2.252 2.252 0 010 6.748v-4.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 2.248v4.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    