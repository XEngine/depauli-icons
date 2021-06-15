
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
            children.concat([_c('path',{attrs:{"d":"M8.611 22.499a2.43 2.43 0 01-1.077-.264l-5.062-2.587a2.473 2.473 0 01-1.341-2.213V11.81a2.464 2.464 0 01.391-1.341l.032-.047c.234-.347.55-.631.915-.82l5.066-2.589a2.41 2.41 0 012.192.001l5.063 2.587c.371.192.689.479.924.83l.011.015c.271.416.409.886.407 1.368v5.625a2.466 2.466 0 01-1.338 2.208l-5.067 2.589c-.329.169-.701.26-1.075.263h-.02a.074.074 0 01-.021 0zm-5.98-5.06a.976.976 0 00.528.876l4.722 2.413v-6.075l-5.25-2.682v5.468zm6.75 3.289l4.726-2.415a.971.971 0 00.524-.871V11.97l-5.25 2.683v6.075zm-.75-7.376l5.101-2.607L9.044 8.35a.899.899 0 00-.825-.001L3.53 10.745l5.101 2.607z"}}),_c('path',{attrs:{"d":"M13.132 24a.753.753 0 01-.722-.956.747.747 0 01.357-.45l5.207-2.893a2.25 2.25 0 001.157-1.966V5.019l-4.5-1.688V6.75a.75.75 0 01-1.5 0v-4.5l.003-.051a.676.676 0 01.03-.162.524.524 0 01.043-.112c.009-.019.016-.034.025-.048a.648.648 0 01.094-.13.816.816 0 01.134-.116L15.716.126a.749.749 0 11.831 1.248l-1.032.688 4.269 1.601 1.93-1.287a.75.75 0 01.832 1.248L20.63 4.901v12.834a3.753 3.753 0 01-1.929 3.278l-5.207 2.893a.748.748 0 01-.362.094z"}})])
          )
        }
      }
    