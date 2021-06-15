
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
            children.concat([_c('path',{attrs:{"d":"M10.505 16.503a.747.747 0 01-.75-.75v-3.75h-1.35a1.121 1.121 0 01-.796-1.92l5.36-5.36a.745.745 0 01.818-.163.746.746 0 01.462.693v3.75h1.35c.3 0 .582.117.794.329.213.213.33.495.33.796 0 .3-.116.583-.329.796l-5.36 5.36a.742.742 0 01-.529.219zm0-6a.75.75 0 01.75.75v2.689l3.44-3.44H13.5a.75.75 0 01-.75-.75V7.064l-3.439 3.44 1.194-.001z"}}),_c('path',{attrs:{"d":"M11.999 23.901c-.261 0-.518-.068-.743-.197a21.007 21.007 0 01-5.142-4.209c-2.564-2.922-3.864-6.2-3.864-9.743 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.5 1.5 0 01-.744.197zM12 1.503c-4.549 0-8.25 3.701-8.25 8.25 0 1.861.595 8.272 8.25 12.649 7.655-4.372 8.25-10.787 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    