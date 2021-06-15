
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
            children.concat([_c('path',{attrs:{"d":"M11.75 24a5.256 5.256 0 01-5.25-5.25c0-2.222 1.342-4.414 2.698-6.063a.752.752 0 01.024-1.384l3.75-1.5a.747.747 0 01.968.991.745.745 0 01-.411.401l-.417.167C14.538 12.815 17 15.755 17 18.75A5.256 5.256 0 0111.75 24zm0-11.871C10.606 13.251 8 16.101 8 18.75a3.754 3.754 0 003.75 3.75 3.754 3.754 0 003.75-3.75c0-2.649-2.606-5.499-3.75-6.621zM9.5 9.75a.747.747 0 01-.697-.472.747.747 0 01.418-.974L11 7.592V.75a.75.75 0 011.5 0v6.242l.472-.189a.747.747 0 01.968.991.745.745 0 01-.411.401l-3.75 1.5a.723.723 0 01-.279.055z"}})])
          )
        }
      }
    