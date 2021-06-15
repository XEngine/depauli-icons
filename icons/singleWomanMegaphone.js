
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
            children.concat([_c('path',{attrs:{"d":"M19.5 11.79a.742.742 0 01-.238-.039A4.035 4.035 0 0116.5 7.918v-.042L15 7.501v.539a.75.75 0 01-1.5 0V1.29a.75.75 0 011.5 0v.539L22.136.045A1.501 1.501 0 0124 1.5v6.329c0 .401-.157.778-.441 1.062a1.49 1.49 0 01-1.421.394l-4.116-1.029a2.538 2.538 0 001.715 2.073.75.75 0 01-.237 1.461zm2.999-3.961L22.5 1.5 15 3.376v2.579l7.499 1.874zM3.75 24a.747.747 0 01-.746-.675L2.321 16.5H.75a.75.75 0 01-.75-.75V13.5a5.978 5.978 0 012.702-5.013.748.748 0 011.039.215L6 12.136l2.26-3.434a.746.746 0 011.039-.215A5.98 5.98 0 0112 13.5v2.25a.75.75 0 01-.75.75H9.679l-.682 6.825A.748.748 0 018.25 24h-4.5zm3.821-1.5l.682-6.825A.748.748 0 019 15h1.5v-1.5a4.456 4.456 0 00-1.434-3.296l-2.44 3.708c-.134.205-.368.327-.626.327s-.492-.122-.627-.327l-2.44-3.708A4.459 4.459 0 001.5 13.5V15H3c.387 0 .708.29.746.675l.683 6.825h3.142zM11.25 8.25c-.674 0-1.847-.264-2.521-1.933C8.027 7.068 7.05 7.5 6 7.5s-2.027-.432-2.729-1.183C2.597 7.986 1.424 8.25.75 8.25a.75.75 0 010-1.5c1.444 0 1.5-2.971 1.5-3.001C2.25 1.682 3.932 0 6 0s3.75 1.682 3.75 3.75c0 .029.055 3 1.5 3a.75.75 0 010 1.5zM6 1.5c-1.241 0-2.25 1.009-2.25 2.25S4.759 6 6 6s2.25-1.009 2.25-2.25S7.241 1.5 6 1.5z"}})])
          )
        }
      }
    