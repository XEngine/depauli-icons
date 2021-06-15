
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
            children.concat([_c('path',{attrs:{"d":"M8.25 23.25a.752.752 0 01-.53-1.281L8.689 21H6.75A3.754 3.754 0 013 17.25V13.5a.75.75 0 011.5 0v3.75a2.252 2.252 0 002.25 2.25h1.939l-.97-.97a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.25 2.25a.75.75 0 01.163.245l.009.024a.737.737 0 010 .522l-.012.032a.75.75 0 01-.16.238l-2.25 2.25a.739.739 0 01-.529.22zM21 11.25a.75.75 0 01-.75-.75V6.673a2.175 2.175 0 00-.655-1.542 2.181 2.181 0 00-1.54-.631h-1.981l.959.974a.744.744 0 01.216.532.744.744 0 01-.224.529.745.745 0 01-.525.215.745.745 0 01-.534-.223l-2.231-2.266a.752.752 0 01-.156-.768l.003-.009a.772.772 0 01.15-.242l.018-.02L15.965.974a.746.746 0 011.061-.008.74.74 0 01.223.528.744.744 0 01-.216.532L16.075 3h1.983c.974 0 1.894.377 2.59 1.063a3.675 3.675 0 011.102 2.604V10.5a.75.75 0 01-.75.75zM15.75 16.5c-1.241 0-2.25-1.009-2.25-2.25S14.509 12 15.75 12 18 13.009 18 14.25s-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM20.25 24a.75.75 0 01-.75-.75v-6A2.252 2.252 0 0121.75 15h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v2.25h1.5a.75.75 0 010 1.5H21v2.25a.75.75 0 01-.75.75zM2.25 4.5C1.009 4.5 0 3.491 0 2.25S1.009 0 2.25 0 4.5 1.009 4.5 2.25 3.491 4.5 2.25 4.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9 10.5a3.754 3.754 0 01-3.75-3.75v-1.5A3.754 3.754 0 019 1.5.75.75 0 019 3a2.252 2.252 0 00-2.25 2.25v1.5A2.252 2.252 0 009 9a.75.75 0 010 1.5z"}})])
          )
        }
      }
    