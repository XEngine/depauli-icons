
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
            children.concat([_c('path',{attrs:{"d":"M20.25 19a.754.754 0 01-.733-.593l-.838-3.907H5.321l-.837 3.907a.755.755 0 01-.891.577.752.752 0 01-.577-.891l.77-3.593H.75a.75.75 0 010-1.5h3.358l1.004-4.685A2.243 2.243 0 013.75 6.25 2.252 2.252 0 016 4h12a2.252 2.252 0 012.25 2.25c0 .911-.545 1.716-1.362 2.065L19.892 13h3.358a.75.75 0 010 1.5h-3.037l.77 3.593a.752.752 0 01-.733.907zm-1.892-6l-.964-4.5H6.606L5.642 13h12.716zM6 5.5A.75.75 0 006 7h12a.75.75 0 000-1.5H6z"}})])
          )
        }
      }
    