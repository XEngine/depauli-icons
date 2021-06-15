
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
            children.concat([_c('path',{attrs:{"d":"M.731 20.392a.75.75 0 010-1.5h1.54a.75.75 0 010 1.5H.731zM4.731 20.392a.75.75 0 010-1.5h1.54a.75.75 0 010 1.5h-1.54zM8.878 20.392a.75.75 0 010-1.5h1.54a.75.75 0 010 1.5h-1.54zM12.75 20.151a.749.749 0 01-.184-1.477 7.078 7.078 0 005.118-5.088l2.191-8.466-1.943 1.2a.748.748 0 01-1.032-.244.748.748 0 01.244-1.033l3.531-2.181.024-.014c.012-.006.026-.014.041-.02a.787.787 0 01.076-.034c.013-.005.044-.013.058-.017a.62.62 0 01.231-.026.56.56 0 01.062.007.566.566 0 01.074.012l.026.007a.729.729 0 01.239.114.75.75 0 01.201.216l2.181 3.532a.747.747 0 01-.244 1.033.75.75 0 01-1.032-.244l-1.258-2.036-2.219 8.571a8.579 8.579 0 01-6.203 6.166.782.782 0 01-.182.022z"}})])
          )
        }
      }
    