
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 010-1.5h2.25v-7.237a7.678 7.678 0 01-4.072-1.66 7.786 7.786 0 01-2.847-6.859c0-.049.006-.099.018-.15l.006-.052c.005-.046.01-.092.017-.138l.787-5.131A1.492 1.492 0 016.641 0h10.716a1.49 1.49 0 011.482 1.272l.789 5.131c.007.046.012.093.017.139l.006.051a.796.796 0 01.018.15 7.783 7.783 0 01-2.847 6.859 7.678 7.678 0 01-4.072 1.66V22.5H15a.75.75 0 010 1.5H9zM5.786 7.5a6.225 6.225 0 002.33 4.932A6.248 6.248 0 0012 13.805a6.25 6.25 0 003.885-1.373 6.225 6.225 0 002.33-4.931H5.786zM18.049 6l-.692-4.5H6.64L5.951 6h12.098z"}})])
          )
        }
      }
    