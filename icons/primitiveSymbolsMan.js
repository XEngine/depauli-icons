
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
            children.concat([_c('path',{attrs:{"d":"M6 24a.752.752 0 01-.53-1.281l5.78-5.78V13.5h-3A3.754 3.754 0 014.5 9.75v-3a.75.75 0 011.5 0v3A2.252 2.252 0 008.25 12h3v-1.575C9.09 10.006 7.5 7.847 7.5 5.25 7.5 2.355 9.519 0 12 0s4.5 2.355 4.5 5.25c0 2.597-1.59 4.756-3.75 5.175V12h3A2.252 2.252 0 0018 9.75v-3a.75.75 0 011.5 0v3a3.754 3.754 0 01-3.75 3.75h-3v3.439l5.78 5.78A.752.752 0 0118 24a.743.743 0 01-.53-.22L12 18.311l-5.47 5.47A.746.746 0 016 24zm6-22.5c-1.654 0-3 1.682-3 3.75S10.346 9 12 9s3-1.682 3-3.75-1.346-3.75-3-3.75z"}})])
          )
        }
      }
    