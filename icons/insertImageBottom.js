
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
            children.concat([_c('path',{attrs:{"d":"M9.75 2.248a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H9.75zM9.75 6.748a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H9.75zM9.75 11.248a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H9.75zM11.25 23.248A2.252 2.252 0 019 20.998v-4.5a2.252 2.252 0 012.25-2.25h10.5a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25h-10.5zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-10.5zM3.75 22.498a.752.752 0 01-.53-1.281l1.72-1.72H.75a.75.75 0 010-1.5h4.189l-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3 3a.75.75 0 01.163.245l.009.024a.727.727 0 01.001.524l-.012.032a.75.75 0 01-.16.238l-3 3a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    