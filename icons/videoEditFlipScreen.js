
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24A2.252 2.252 0 016 21.75V19.5a3.754 3.754 0 01-3.75-3.75v-2.689l-.97.97a.744.744 0 01-1.06 0 .747.747 0 010-1.061l2.25-2.25a.74.74 0 01.245-.163l.025-.009a.734.734 0 01.521 0l.02.007c.097.04.179.095.25.166L5.78 12.97c.142.141.22.33.22.53s-.078.389-.22.53a.744.744 0 01-1.06 0l-.97-.97v2.689A2.252 2.252 0 006 18v-2.25a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v6A2.252 2.252 0 0121.75 24H8.25zm13.5-1.5a.75.75 0 00.75-.75v-1.5h-3v2.25h2.25zm-3.75 0v-6h-6v6h6zm-10.5-.75c0 .414.336.75.75.75h2.25v-2.25h-3v1.5zm15-3V16.5h-3v2.25h3zm-12 0V16.5h-3v2.25h3zM21 13.5a.744.744 0 01-.258-.047l-.016-.006a.748.748 0 01-.256-.167l-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.97.97V8.25A2.252 2.252 0 0018 6v2.25a.75.75 0 01-.75.75H.75A.75.75 0 010 8.25v-6A2.252 2.252 0 012.25 0h13.5A2.252 2.252 0 0118 2.25V4.5a3.754 3.754 0 013.75 3.75v2.689l.97-.97a.744.744 0 011.06 0 .747.747 0 010 1.061l-2.25 2.25a.74.74 0 01-.245.163l-.026.01A.73.73 0 0121 13.5zm-4.5-6V5.25h-3V7.5h3zm-4.5 0v-6H6v6h6zm-7.5 0V5.25h-3V7.5h3zm12-3.75v-1.5a.75.75 0 00-.75-.75H13.5v2.25h3zm-12 0V1.5H2.25a.75.75 0 00-.75.75v1.5h3z"}})])
          )
        }
      }
    