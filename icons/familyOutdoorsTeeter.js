
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
            children.concat([_c('path',{attrs:{"d":"M.75 20.158a.752.752 0 01-.451-1.351 19.459 19.459 0 019.45-3.767v-3.294l-3.647.99h.002a.514.514 0 01-.027.008l-.045.011-2.852.775a2.246 2.246 0 01-2.74-1.638 2.246 2.246 0 011.548-2.699l1.463-.397a2.253 2.253 0 011.708.219c.521.299.896.783 1.053 1.363l.197.722 3.341-.907V8.91A2.252 2.252 0 0112 6.66a2.252 2.252 0 012.25 2.25v.061l3.013-.817-.197-.724a2.231 2.231 0 01.219-1.708 2.238 2.238 0 011.362-1.053l2.171-.592a2.255 2.255 0 012.763 1.586 2.238 2.238 0 01-.221 1.709c-.3.522-.784.895-1.365 1.052l-7.746 2.102v4.516a19.449 19.449 0 019.45 3.767.75.75 0 01-.9 1.2c-3.075-2.305-6.91-3.574-10.8-3.574-3.89 0-7.725 1.269-10.801 3.574a.738.738 0 01-.448.149zM12 8.16a.75.75 0 00-.75.75v6.017a16.693 16.693 0 011.5 0V8.91a.75.75 0 00-.75-.75zm-7.957 2.056a.757.757 0 00-.199.027l-1.448.393a.742.742 0 00-.501.895.74.74 0 00.341.462.745.745 0 00.568.086l2.157-.586-.196-.723a.747.747 0 00-.722-.554zM21.41 5.497a.744.744 0 00-.198.027l-2.169.592a.753.753 0 00-.529.92l.197.725 2.893-.785a.75.75 0 00.179-1.378.749.749 0 00-.373-.101z"}})])
          )
        }
      }
    