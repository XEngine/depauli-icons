
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
            children.concat([_c('path',{attrs:{"d":"M12.755 23.9c-.264 0-.522-.072-.75-.205a1.478 1.478 0 01-.75.205h-4.5c-.827 0-1.5-.673-1.5-1.5v-4.5c0-.827.673-1.5 1.5-1.5h1.5v-4.5c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v4.5h1.5c.827 0 1.5.673 1.5 1.5v4.5c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5v-4.5h-4.5v4.5zm-6 0h4.5v-4.5h-4.5v4.5zm7.5-6v-4.5h-4.5v4.5h4.5z"}}),_c('path',{attrs:{"d":"M23.255 23.9a.75.75 0 01-.75-.75V7.55a.749.749 0 00-.397-.662l-9.75-5.2a.748.748 0 00-.706 0l-9.75 5.2a.748.748 0 00-.397.662v15.6a.75.75 0 01-1.5 0V7.55c0-.833.457-1.594 1.193-1.986l9.75-5.2a2.268 2.268 0 011.059-.265c.367 0 .733.092 1.058.265l9.75 5.2a2.246 2.246 0 011.191 1.986v15.6a.753.753 0 01-.751.75z"}})])
          )
        }
      }
    