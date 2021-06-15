
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.995a.75.75 0 01-.75-.75v-14.9a2.26 2.26 0 011.092-1.93L10.766.364a.748.748 0 01.914.091.75.75 0 01.141.907l-3.8 6.882h3.229a.75.75 0 01.75.75v2.871l3.06-4.371h-2.31c-.26 0-.505-.138-.64-.359s-.146-.502-.027-.733l2.25-4.391a.753.753 0 011.065-.294l7.522 4.7c.664.4 1.08 1.138 1.08 1.924v14.9a.75.75 0 01-1.5 0v-14.9a.754.754 0 00-.364-.644l-6.841-4.274-1.318 2.572H16.5c.281 0 .536.155.665.404.13.249.11.546-.051.776l-5.25 7.5a.752.752 0 01-.839.286.748.748 0 01-.525-.716v-4.5H6.75a.752.752 0 01-.656-1.113L9.11 3.169 1.876 7.694a.762.762 0 00-.376.65v14.9a.751.751 0 01-.75.751z"}}),_c('path',{attrs:{"d":"M16.354 20.995c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M12.457 23.995a.753.753 0 01-.65-1.125 5.261 5.261 0 014.538-2.626c.458 0 .917.061 1.365.181a5.212 5.212 0 013.188 2.446.749.749 0 11-1.299.751 3.767 3.767 0 00-3.254-1.874 3.745 3.745 0 00-3.24 1.873.748.748 0 01-.648.374zM7.646 20.995c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M3.75 23.995a.75.75 0 01-.649-1.126 5.242 5.242 0 014.538-2.623 5.27 5.27 0 014.554 2.623.749.749 0 11-1.299.751 3.764 3.764 0 00-3.254-1.873A3.748 3.748 0 004.4 23.62a.754.754 0 01-.65.375z"}})])
          )
        }
      }
    