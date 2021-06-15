
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
            children.concat([_c('path',{attrs:{"d":"M23.248 23a.75.75 0 01-.75-.75v-4.208a2.243 2.243 0 00-1.88-2.219l-1.993-.333a.748.748 0 01-.626-.74v-4.5a.75.75 0 00-1.5 0V17a.745.745 0 01-.751.75.755.755 0 01-.336-.08l-1.174-.589a.864.864 0 00-.397-.094.887.887 0 00-.553 1.581l3.794 3.097a.751.751 0 01-.475 1.331.746.746 0 01-.474-.17l-3.789-3.093a2.391 2.391 0 01-.82-2.438 2.373 2.373 0 011.088-1.469 2.383 2.383 0 012.296-.089l.089.045V10.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v3.865l1.366.229a3.738 3.738 0 013.134 3.699v4.208a.749.749 0 01-.749.749zM4.498 11.748a.743.743 0 01-.53-.22l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.737.737 0 01.001-.521l.007-.02a.74.74 0 01.166-.249l3.749-3.749a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47h5.689a.75.75 0 010 1.5H2.559l2.47 2.47c.142.141.22.33.22.53s-.078.389-.22.53a.747.747 0 01-.531.22z"}}),_c('path',{attrs:{"d":"M13.005 12.991a.743.743 0 01-.53-.22 6.706 6.706 0 01-1.977-4.773c0-1.803.702-3.498 1.978-4.773a6.705 6.705 0 014.772-1.977c1.803 0 3.499.703 4.773 1.978a6.758 6.758 0 010 9.545.744.744 0 01-1.06 0 .752.752 0 010-1.061 5.257 5.257 0 000-7.424 5.213 5.213 0 00-3.712-1.538 5.216 5.216 0 00-3.712 1.537c-.992.992-1.538 2.31-1.538 3.712s.546 2.721 1.537 3.712a.744.744 0 010 1.06.753.753 0 01-.531.222z"}})])
          )
        }
      }
    