
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
            children.concat([_c('path',{attrs:{"d":"M21.788 21.554a.75.75 0 010-1.5h.717v-5.608c-.002-5.791-4.712-10.503-10.5-10.503-2.803.001-5.438 1.095-7.423 3.081s-3.078 4.622-3.077 7.422v5.604h.75a.75.75 0 010 1.5h-1.01a1.242 1.242 0 01-1.24-1.236v-5.868a11.918 11.918 0 013.516-8.482 11.917 11.917 0 018.48-3.521c6.618 0 12.002 5.382 12.003 11.997v5.875a1.24 1.24 0 01-1.239 1.239h-.977z"}}),_c('path',{attrs:{"d":"M6.755 21.55c-.827 0-1.5-.673-1.5-1.5v-4.5c0-.827.673-1.5 1.5-1.5h1.5v-4.5c0-.827.673-1.5 1.5-1.5h4.504c.83.004 1.5.681 1.496 1.508v4.492h1.5c.827 0 1.5.673 1.5 1.5v4.5c0 .402-.157.779-.44 1.062a1.491 1.491 0 01-1.059.438H6.755zm10.5-1.5v-4.5h-4.5v4.5h4.5zm-10.5 0h4.5v-4.5h-4.5v4.5zm7.5-6V9.554a.296.296 0 01-.052-.004H9.755v4.5h4.5z"}})])
          )
        }
      }
    