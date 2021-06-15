
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24A2.252 2.252 0 016 21.75v-.827a3.743 3.743 0 01-3-3.673V6.75a3.743 3.743 0 013-3.673V2.25A2.252 2.252 0 018.25 0h7.5A2.252 2.252 0 0118 2.25v.827c1.732.351 3 1.874 3 3.673v10.5a3.743 3.743 0 01-3 3.673v.827A2.252 2.252 0 0115.75 24h-7.5zm-.75-2.25c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V21h-9v.75zM6.75 4.5A2.252 2.252 0 004.5 6.75v10.5a2.252 2.252 0 002.25 2.25h10.5a2.252 2.252 0 002.25-2.25V6.75a2.252 2.252 0 00-2.25-2.25H6.75zM16.5 3v-.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75V3h9z"}}),_c('path',{attrs:{"d":"M12.75 17.25a.753.753 0 01-.45-.15L9.5 15H8.25A2.252 2.252 0 016 12.75v-1.5A2.252 2.252 0 018.25 9H9.5l2.8-2.1a.753.753 0 01.786-.071.747.747 0 01.414.671v9a.746.746 0 01-.75.75zm-4.5-6.75a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h1.5c.161 0 .321.053.45.15L12 15V9l-1.8 1.35a.753.753 0 01-.45.15h-1.5zM16.548 15.75a.75.75 0 01-.672-1.082 6.046 6.046 0 000-5.335.75.75 0 011.345-.665 7.557 7.557 0 010 6.666.749.749 0 01-.673.416z"}})])
          )
        }
      }
    