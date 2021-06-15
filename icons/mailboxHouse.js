
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
            children.concat([_c('path',{attrs:{"d":"M12.571 24a.75.75 0 01-.75-.75V13.5h-1.5v9.75a.75.75 0 01-1.5 0V13.5h-5.25a2.252 2.252 0 01-2.25-2.25V8.96a1.574 1.574 0 01-.204-.068 1.488 1.488 0 01-.821-.802 1.489 1.489 0 01-.014-1.148l2.4-6A1.493 1.493 0 014.074 0H19.56c.62 0 1.166.369 1.396.941l2.812 7.03a.747.747 0 01-.418.975.748.748 0 01-.975-.418l-.054-.134v2.856a2.252 2.252 0 01-2.25 2.25h-6.75v9.75a.75.75 0 01-.75.75zm-9.75-12.75c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V4.644L19.563 1.5h-4.985l-2.619 6.557A1.512 1.512 0 0110.57 9H2.821v2.25zM4.073 1.5l-2.398 6h8.888l2.4-6h-8.89z"}}),_c('path',{attrs:{"d":"M15.571 6a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    