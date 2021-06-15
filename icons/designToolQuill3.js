
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
            children.concat([_c('path',{attrs:{"d":"M.757 23.987a.752.752 0 01-.53-1.281L16.7 6.235a.744.744 0 011.06 0 .744.744 0 010 1.06L6.253 18.803a30.242 30.242 0 011.987-.22c2.286-.203 4.651-.413 6.487-2.249 3.677-3.677 6.421-10.326 7.73-13.962a.651.651 0 00-.611-.872.64.64 0 00-.221.039C17.988 2.846 11.338 5.59 7.661 9.268a6.619 6.619 0 00-1.926 3.865c-.056.478-.046.967.031 1.449.031.198-.016.396-.134.558a.746.746 0 01-.608.31.747.747 0 01-.74-.633 6.82 6.82 0 01-.038-1.866 8.125 8.125 0 012.359-4.749c3.878-3.88 10.757-6.725 14.511-8.075a2.157 2.157 0 011.462.001c.54.195.972.589 1.215 1.109.244.52.271 1.104.075 1.644-1.35 3.753-4.195 10.629-8.08 14.513-2.22 2.221-4.979 2.466-7.414 2.682-1.902.169-3.698.328-4.823 1.454a.517.517 0 01-.112.086l-2.151 2.151a.745.745 0 01-.531.22zM7.521 24a.75.75 0 010-1.5h12.75a.75.75 0 11-.001 1.5H7.521z"}})])
          )
        }
      }
    