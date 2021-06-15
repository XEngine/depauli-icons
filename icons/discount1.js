
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.5a.743.743 0 01-.53-.22.744.744 0 010-1.06l19.5-19.5a.744.744 0 011.06 0 .744.744 0 010 1.06l-19.5 19.5a.743.743 0 01-.53.22zM18.75 22.5c-2.068 0-3.75-1.682-3.75-3.75S16.682 15 18.75 15s3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25S17.509 21 18.75 21 21 19.991 21 18.75s-1.009-2.25-2.25-2.25zM5.25 9C3.182 9 1.5 7.318 1.5 5.25S3.182 1.5 5.25 1.5 9 3.182 9 5.25 7.318 9 5.25 9zm0-6C4.009 3 3 4.009 3 5.25S4.009 7.5 5.25 7.5 7.5 6.491 7.5 5.25 6.491 3 5.25 3z"}})])
          )
        }
      }
    