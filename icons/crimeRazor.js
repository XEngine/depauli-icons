
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM3.75 21.004a.75.75 0 01-.75-.75c0-2.068 2.019-3.75 4.5-3.75.481.001.949.062 1.396.181.379-.411.82-.756 1.314-1.029a5.242 5.242 0 012.533-.658 5.255 5.255 0 014.133 2.004 3.716 3.716 0 011.873-.501 3.73 3.73 0 012.652 1.097A3.727 3.727 0 0122.5 20.25a.75.75 0 01-1.5 0c0-1.24-1.01-2.249-2.25-2.249-.578 0-1.127.219-1.546.616a.75.75 0 01-1.172-.183 3.732 3.732 0 00-2.245-1.789 3.775 3.775 0 00-1.042-.148 3.753 3.753 0 00-2.997 1.505.756.756 0 01-.869.251 3.774 3.774 0 00-1.354-.25c-1.677 0-3.024 1.009-3.024 2.25a.753.753 0 01-.751.751zM6.75 12a.75.75 0 01-.75-.75V9.464l-1.915.957a.761.761 0 01-.729-.032A.748.748 0 013 9.75v-7.5a.745.745 0 01.75-.75.75.75 0 01.335.079L6 2.536V.75A.75.75 0 016.75 0h12a.75.75 0 01.75.75v1.786l1.915-.957a.75.75 0 011.085.671v7.5a.746.746 0 01-1.084.671L19.5 9.464v1.786a.75.75 0 01-.75.75h-12zM18 10.5V8.25a.746.746 0 011.084-.671L21 8.536V3.464l-1.915.957a.753.753 0 01-.729-.033A.745.745 0 0118 3.75V1.5H7.5v2.25a.745.745 0 01-.75.75.753.753 0 01-.335-.079L4.5 3.464v5.073l1.915-.957a.754.754 0 01.73.032.746.746 0 01.355.638v2.25H18z"}}),_c('path',{attrs:{"d":"M14.25 8.25a.75.75 0 01-.75-.75v-.75H12v.75a.75.75 0 01-1.5 0v-.75h-.75a.75.75 0 010-1.5h.75V4.5a.75.75 0 011.5 0v.75h1.5V4.5a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5H15v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    