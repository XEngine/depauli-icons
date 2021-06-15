
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
            children.concat([_c('path',{attrs:{"d":"M11.207 15.873a.75.75 0 01-.648-1.127l1.881-3.242-3.242-1.882a1.5 1.5 0 01.064-2.63l3.27-1.509-.7-.408a.754.754 0 01-.373-.658.752.752 0 01.39-.648l6.572-3.6a1.523 1.523 0 01.694-.17 1.495 1.495 0 011.494 1.406l.001.034.132 7.497a.751.751 0 01-.748.764.751.751 0 01-.376-.101l-.698-.405.312 3.588a1.513 1.513 0 01-.199.812 1.505 1.505 0 01-2.05.545l-3.245-1.883-1.882 3.242a.75.75 0 01-.649.375zm6.524-3.033L17.3 7.886a.749.749 0 011.122-.714l.796.462-.108-6.156V1.5l-5.378 2.947.799.465a.75.75 0 01-.063 1.329L9.953 8.325l3.855 2.238.034.018a.225.225 0 01.036.024l3.853 2.235zM10.7 24a.75.75 0 01-.75-.75V18a.75.75 0 011.5 0v5.25a.75.75 0 01-.75.75zM3.95 17.25a.75.75 0 010-1.5H6.2a.75.75 0 010 1.5H3.95zM7.518 14.068a.743.743 0 01-.53-.22l-1.591-1.591c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.591 1.591a.752.752 0 010 1.061.744.744 0 01-.53.219zM15.2 17.25a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H15.2zM15.473 22.023a.743.743 0 01-.53-.22l-1.591-1.591a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.591 1.591a.744.744 0 010 1.06.748.748 0 01-.53.221zM5.927 22.023a.752.752 0 01-.53-1.281l1.591-1.591a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.591 1.591a.741.741 0 01-.53.22z"}})])
          )
        }
      }
    