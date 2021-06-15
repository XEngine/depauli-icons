
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.25a.75.75 0 010-1.5H3V19c0-.88.653-1.611 1.5-1.732V6.75h-.459a1.502 1.502 0 01-1.423-1.974l.829-2.486A2.245 2.245 0 015.581.75h12.838c.97 0 1.828.619 2.135 1.539l.829 2.487c.127.379.099.786-.08 1.144a1.488 1.488 0 01-.866.753 1.484 1.484 0 01-.476.078H19.5v10.518c.847.12 1.5.851 1.5 1.731v2.75h2.25a.75.75 0 010 1.5H.75zm18.75-1.5V19a.25.25 0 00-.25-.25H4.75a.25.25 0 00-.25.25v2.75h15zm-1.5-4.5V6.75h-5.25v3h1.5a.75.75 0 01.739.873l-.75 4.5a.746.746 0 01-.74.626h-3a.748.748 0 01-.74-.626l-.75-4.5a.748.748 0 01.741-.873h1.5v-3H6v10.5h12zm-5.135-3l.5-3h-2.729l.5 3h1.729zm-7.284-12a.748.748 0 00-.711.513L4.04 5.25h15.919l-.829-2.487a.749.749 0 00-.712-.513H5.581z"}})])
          )
        }
      }
    