
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
            children.concat([_c('path',{attrs:{"d":"M12.002 24.001a.75.75 0 01-.75-.75V10.062l-3.22 3.22a.744.744 0 01-1.06 0 .752.752 0 010-1.061l4.5-4.5a.74.74 0 01.245-.163l.025-.009a.737.737 0 01.521.001l.02.007c.097.04.179.095.25.166l4.499 4.499a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-3.22-3.22v13.189a.75.75 0 01-.75.749z"}}),_c('path',{attrs:{"d":"M15.75 20.25a.75.75 0 010-1.5H18a2.252 2.252 0 002.25-2.25V3.751A2.252 2.252 0 0018 1.501H6a2.252 2.252 0 00-2.25 2.25V16.5A2.252 2.252 0 006 18.75h2.252a.75.75 0 010 1.5H6a3.754 3.754 0 01-3.75-3.75V3.751A3.754 3.754 0 016 .001h12a3.754 3.754 0 013.75 3.75V16.5A3.754 3.754 0 0118 20.25h-2.25z"}})])
          )
        }
      }
    