
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
            children.concat([_c('path',{attrs:{"d":"M6 16.5a.745.745 0 01-.696-.472L3.75 12.144v3.606a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.447-.279l1.554 3.884V8.25a.749.749 0 111.499 0v7.5a.75.75 0 01-.75.75zM10.5 16.5a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 0110.5 7.5H12A.75.75 0 0112 9h-1.5a.75.75 0 00-.75.75V12H12a.75.75 0 010 1.5H9.75v.75c0 .414.336.75.75.75H12a.75.75 0 010 1.5h-1.5zM19.467 16.499a.751.751 0 01-.688-.543L18 13.23l-.779 2.726a.75.75 0 01-.683.543l-.035.001a.758.758 0 01-.699-.471l-.856-2.141a9.694 9.694 0 01-.698-3.62V8.25a.75.75 0 011.5 0v2.017c0 1.054.198 2.085.59 3.063l.042.104.897-3.14c.092-.32.388-.544.721-.544s.629.224.721.544l.897 3.14.042-.103c.391-.979.59-2.01.59-3.064V8.25a.75.75 0 011.5 0v2.017a9.703 9.703 0 01-.698 3.621l-.856 2.141a.745.745 0 01-.696.471l-.033-.001zM2.25 24A2.252 2.252 0 010 21.75v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.252 2.252 0 0121.75 24H2.25zM23.25 6a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3a.75.75 0 01-1.5 0v-3A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    