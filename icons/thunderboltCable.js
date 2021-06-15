
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.75.75 0 01-.75-.75V21h-.75a.75.75 0 01-.75-.75v-5.924a2.252 2.252 0 012.25-2.25h1.5V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v15c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5v-7.424h-1.5A2.252 2.252 0 010 9.826V3.75A.75.75 0 01.75 3h.75V.75A.75.75 0 012.25 0h4.5a.75.75 0 01.75.75V3h.75a.75.75 0 01.75.75v6.076a2.252 2.252 0 01-2.25 2.25h-1.5V19.5c0 1.654 1.346 3 3 3s3-1.346 3-3v-15c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v7.576h1.5a2.252 2.252 0 012.25 2.25v5.924a.75.75 0 01-.75.75h-.75v2.25a.75.75 0 01-.75.75h-4.5zM21 22.5V21h-3v1.5h3zm1.5-3v-5.174a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V19.5h6zm-21-9.674c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V4.5h-6v5.326zM6 3V1.5H3V3h3z"}})])
          )
        }
      }
    