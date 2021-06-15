
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
            children.concat([_c('path',{attrs:{"d":"M19.5 7.5a.75.75 0 010-1.5h1.939L18.75 3.311l-2.47 2.47a.746.746 0 01-1.06-.001l-4.5-4.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3.97 3.97 2.47-2.47a.744.744 0 011.06 0l3.22 3.22V3A.75.75 0 0124 3v3.75a.744.744 0 01-.047.258l-.006.016a.758.758 0 01-.697.476H19.5zM5.25 7.5C3.182 7.5 1.5 5.818 1.5 3.75S3.182 0 5.25 0 9 1.682 9 3.75 7.318 7.5 5.25 7.5zm0-6C4.009 1.5 3 2.509 3 3.75S4.009 6 5.25 6 7.5 4.991 7.5 3.75 6.491 1.5 5.25 1.5zM3 24a.747.747 0 01-.746-.675L1.571 16.5H.75a.75.75 0 01-.75-.75v-3C0 9.855 2.355 7.5 5.25 7.5s5.25 2.355 5.25 5.25v3a.75.75 0 01-.75.75h-.821l-.682 6.825A.748.748 0 017.5 24H3zm3.821-1.5l.682-6.825A.748.748 0 018.25 15H9v-2.25c0-1.781-1.288-3.32-3-3.672v5.172a.75.75 0 01-1.5 0V9.078c-1.712.352-3 1.892-3 3.672V15h.75c.387 0 .708.29.746.675l.683 6.825h3.142z"}})])
          )
        }
      }
    