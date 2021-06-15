
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24.003a.747.747 0 01-.735-.898l.579-2.876a2.254 2.254 0 00-.895-2.27 8.268 8.268 0 01-3.189-4.644 2.233 2.233 0 01.59-2.154c.176-.176.375-.318.595-.426L4.56 4.394A2.251 2.251 0 015.25.003h13.5a2.25 2.25 0 01.689 4.391l-.634 6.343a2.25 2.25 0 011.184 2.578 8.271 8.271 0 01-3.186 4.646 2.251 2.251 0 00-.894 2.27l.575 2.876a.75.75 0 01-.735.897H8.25zm6.585-1.5l-.396-1.979a3.754 3.754 0 011.491-3.783 6.774 6.774 0 002.607-3.801.748.748 0 00-.72-.937H6.189a.75.75 0 00-.726.937 6.763 6.763 0 002.61 3.8 3.757 3.757 0 011.492 3.784l-.398 1.979h5.668zm2.487-12l.6-6H6.079l.6 6h10.643zm-12.072-9a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25z"}})])
          )
        }
      }
    