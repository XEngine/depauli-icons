
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
            children.concat([_c('path',{attrs:{"d":"M8.017 23.999a11.093 11.093 0 01-7.598-2.998.814.814 0 01-.057-.059A1.506 1.506 0 010 19.966c0-.4.155-.777.438-1.061.283-.284.66-.44 1.06-.44h.862a8.369 8.369 0 007.142-4.043l3.555-5.924a5.22 5.22 0 013.216-2.389c.667-1.054 1.673-1.821 2.783-2.116.33-.088.665-.132.995-.132.26 0 .516.027.766.082L22.581.416a.746.746 0 011.006-.335.75.75 0 01.336 1.006l-1.744 3.487c.633.49 1.082 1.202 1.28 2.037.279 1.175.043 2.488-.645 3.603l-.053.098a5.249 5.249 0 01-.681 3.63 23.423 23.423 0 01-8.818 8.741 11.15 11.15 0 01-5.245 1.316zm-6.509-4.034a9.595 9.595 0 006.509 2.534 9.657 9.657 0 004.541-1.14 21.932 21.932 0 008.228-8.178 3.773 3.773 0 00-3.435-5.732 3.741 3.741 0 00-2.592 1.256 3.754 3.754 0 00-.416.565l-3.555 5.924a9.876 9.876 0 01-8.427 4.771h-.853zM18.344 6.004a5.233 5.233 0 012.723 1.269c.355.315.663.671.918 1.063a3.02 3.02 0 00.013-1.379c-.136-.571-.456-1.037-.903-1.312a1.975 1.975 0 00-1.037-.285c-.202 0-.41.028-.617.083a3.052 3.052 0 00-1.097.561z"}})])
          )
        }
      }
    