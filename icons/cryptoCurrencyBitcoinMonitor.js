
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a.75.75 0 010-1.5h3.75v-2.25h-9A2.252 2.252 0 010 18V3.75A2.252 2.252 0 012.25 1.5H6A.75.75 0 016 3H2.25a.75.75 0 00-.75.75V15h21V3.75a.75.75 0 00-.75-.75H18a.75.75 0 010-1.5h3.75A2.252 2.252 0 0124 3.75V18a2.252 2.252 0 01-2.25 2.25h-9v2.25h3.75a.75.75 0 010 1.5h-9zm-6-6c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5h-21V18z"}}),_c('path',{attrs:{"d":"M12 13.5a.75.75 0 01-.75-.75V12h-1.5a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h1.5V.75a.75.75 0 011.5 0v.75c1.654 0 3 1.346 3 3 0 .863-.38 1.685-1.019 2.25A3.017 3.017 0 0115.75 9c0 1.654-1.346 3-3 3v.75a.75.75 0 01-.75.75zm.75-3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H10.5v3h2.25zm0-4.5c.827 0 1.5-.673 1.5-1.5S13.577 3 12.75 3H10.5v3h2.25z"}})])
          )
        }
      }
    