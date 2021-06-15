
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
            children.concat([_c('path',{attrs:{"d":"M5.952 24a2.235 2.235 0 01-1.856-.981 2.236 2.236 0 01-.354-1.686l.847-4.5a2.252 2.252 0 011.34-1.657L3.811 3.888a.585.585 0 01-.007-.072.736.736 0 01.015-.237.776.776 0 01.042-.126l.016-.038 1.085-2.171A2.24 2.24 0 016.975 0h7.146c.858 0 1.628.477 2.012 1.244l1.086 2.171c.006.013.013.028.018.043.017.04.03.079.04.119l.011.066a.752.752 0 01-.003.247L16.89 6h1.159a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 00-.75-.75h-1.44l-1.439 7.677c.689.29 1.2.91 1.341 1.658l.847 4.5a2.235 2.235 0 01-.62 2.007 2.242 2.242 0 01-1.592.658H5.952zm.848-7.5a.75.75 0 00-.737.612l-.847 4.5a.746.746 0 00.736.888h9.194a.746.746 0 00.75-.75.727.727 0 00-.013-.139l-.847-4.499a.752.752 0 00-.737-.612H6.8zm6.876-1.5l1.573-8.39.007-.031.389-2.08H5.452L7.421 15h.877V8.25a.75.75 0 011.5 0V15h1.5V8.25a.75.75 0 011.5 0l.878 6.75zm1.659-12l-.543-1.085a.746.746 0 00-.671-.415H6.975a.747.747 0 00-.671.414L5.762 3h9.573z"}}),_c('path',{attrs:{"d":"M10.548 21.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    