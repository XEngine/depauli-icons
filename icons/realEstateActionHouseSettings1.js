
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
            children.concat([_c('path',{attrs:{"d":"M5.249 23.248a2.252 2.252 0 01-2.25-2.25v-10.5a.75.75 0 011.5 0v10.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-10.5a.75.75 0 011.5 0v10.5a2.252 2.252 0 01-2.25 2.25h-13.5z"}}),_c('path',{attrs:{"d":"M.75 9.748a.748.748 0 01-.444-1.356l10.363-7.6c.39-.286.85-.437 1.331-.437.48 0 .94.151 1.33.437l10.363 7.6a.752.752 0 01-.443 1.355.74.74 0 01-.444-.146l-10.362-7.6a.744.744 0 00-.887 0l-10.363 7.6a.746.746 0 01-.444.147zM21.749 5.247a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M11.999 19.498a.75.75 0 01-.75-.75v-1.135a3.394 3.394 0 01-.833-.303l-.651.65a.744.744 0 01-1.06 0 .752.752 0 010-1.061l.557-.557a3.394 3.394 0 01-.628-1.344H7.499a.75.75 0 010-1.5h1.135c.109-.49.322-.946.629-1.344l-.557-.557a.744.744 0 010-1.06.743.743 0 01.53-.22c.2 0 .389.078.53.22l.651.651c.265-.138.543-.239.833-.304V9.747a.75.75 0 011.5 0v1.135c.29.064.569.166.833.304l.65-.651a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-.557.557a3.4 3.4 0 01.628 1.344h1.135a.75.75 0 010 1.5h-1.135a3.4 3.4 0 01-.628 1.344l.557.557a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-.65-.65c-.265.138-.543.24-.833.304v1.135a.753.753 0 01-.751.751zm0-7.2c-1.075 0-1.95.875-1.95 1.95s.875 1.95 1.95 1.95 1.95-.875 1.95-1.95-.875-1.95-1.95-1.95z"}})])
          )
        }
      }
    