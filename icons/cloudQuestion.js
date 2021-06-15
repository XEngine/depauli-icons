
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
            children.concat([_c('path',{attrs:{"d":"M17.251 23.999c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M17.251 18.749a.75.75 0 010-1.5c.62 0 1.125-.505 1.125-1.125s-.505-1.125-1.125-1.125-1.125.505-1.125 1.125a.75.75 0 01-1.5 0c0-1.448 1.177-2.625 2.625-2.625s2.625 1.177 2.625 2.625-1.178 2.625-2.625 2.625z"}}),_c('circle',{attrs:{"cx":"17.251","cy":"20.624","r":"1.125"}}),_c('path',{attrs:{"d":"M8.242 16.499A8.254 8.254 0 01.136 9.772C-.704 5.301 2.25.981 6.72.141a8.195 8.195 0 016.18 1.298 8.234 8.234 0 013.202 4.295 5.632 5.632 0 012.293-.487 5.61 5.61 0 012.853.786 5.58 5.58 0 012.58 3.439.743.743 0 01-.081.568.743.743 0 01-.645.367.75.75 0 01-.727-.563 4.09 4.09 0 00-1.891-2.521 4.106 4.106 0 00-4.442.158.742.742 0 01-.712.077.751.751 0 01-.453-.555 6.706 6.706 0 00-2.824-4.326 6.699 6.699 0 00-5.057-1.062C3.339 2.302.923 5.837 1.61 9.495a6.753 6.753 0 006.624 5.503h.034c.405.01.732.342.733.75a.751.751 0 01-.755.751h-.004z"}})])
          )
        }
      }
    