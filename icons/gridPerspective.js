
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75v-1.03L.466 17.808a.75.75 0 01.568-1.388l1.216.498V15.08l-1.634-.297a.75.75 0 01.268-1.476l1.366.248v-3.111l-1.366.248a.75.75 0 11-.269-1.476L2.25 8.92V7.083l-1.217.497a.747.747 0 01-.975-.984.745.745 0 01.408-.404L11.25 1.781V.75a.75.75 0 011.5 0v1.031l10.784 4.411a.75.75 0 11-.569 1.388l-1.215-.497V8.92l1.634.297a.744.744 0 01.482.311.75.75 0 01-.751 1.165l-1.365-.248v3.111l1.366-.248a.75.75 0 11.268 1.476l-1.634.296v1.837l1.216-.498a.75.75 0 11.568 1.389L12.75 22.22v1.03A.75.75 0 0112 24zm.75-3.401l3-1.227v-3.2l-3 .546v3.881zm-1.5 0v-3.882l-3-.546v3.2l3 1.228zm6-1.841l3-1.227v-2.178l-3 .546v2.859zm-10.5 0v-2.86l-3-.546v2.178l3 1.228zm6-3.566l3-.546V9.353l-3-.546v6.385zm-1.5 0V8.808l-3 .546v5.293l3 .545zm6-.818l3-.546v-3.657l-3-.546v4.749zm-10.5 0V9.626l-3 .546v3.657l3 .545zm13.5-5.727V6.469l-3-1.227v2.86l3 .545zm-16.5 0l3-.546v-2.86l-3 1.227v2.179zm12-.818v-3.2l-3-1.227v3.882l3 .545zm-7.5 0l3-.546V3.401l-3 1.227v3.201z"}})])
          )
        }
      }
    