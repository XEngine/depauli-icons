
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M12 20.689c-.401 0-.778-.156-1.06-.439l-5.781-5.781a2.235 2.235 0 01-.659-1.59v-2.068c0-.4.155-.777.439-1.06.283-.284.66-.44 1.061-.44.401 0 .777.156 1.061.439L9 11.689V6c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v5.689l1.94-1.94A1.509 1.509 0 0118 9.31c.402 0 .778.156 1.062.44s.439.66.439 1.061v2.067c0 .6-.234 1.165-.658 1.59L13.06 20.25a1.49 1.49 0 01-1.06.439zm-6-7.81c0 .2.078.388.219.53L12 19.19l5.781-5.781a.748.748 0 00.219-.53v-2.068l-3.22 3.219a.745.745 0 01-.818.163.75.75 0 01-.462-.693V6h-3v7.5a.75.75 0 01-1.28.53L6 10.81v2.069z"}})])
          )
        }
      }
    