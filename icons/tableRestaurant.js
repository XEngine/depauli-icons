
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
            children.concat([_c('path',{attrs:{"d":"M7.5 19.875a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75H3.586l-1.358 5.432a.75.75 0 11-1.454-.364L2.235 13.1.762 5.009c-.036-.197.007-.396.121-.561a.743.743 0 01.617-.323.75.75 0 01.738.616l1.388 7.634H6a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-.75.75zM22.5 19.875a.748.748 0 01-.727-.568l-1.358-5.432H18a.75.75 0 00-.75.75v4.5a.75.75 0 01-1.5 0v-4.5a2.252 2.252 0 012.25-2.25h2.374l1.388-7.634a.75.75 0 111.475.269l-1.471 8.091 1.461 5.843a.747.747 0 01-.727.931zM12 19.875a.75.75 0 01-.75-.75v-9.75h-4.5a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-4.5v9.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    