
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
            children.concat([_c('path',{attrs:{"d":"M7.324 23.25a2.253 2.253 0 01-2.232-1.971L3.838 11.25H3a.75.75 0 010-1.5h.849L1.626 6.416c-.111-.167-.15-.367-.111-.563a.747.747 0 01.735-.603c.251 0 .485.125.624.334L5.652 9.75h2.241L5.304 3.279a.75.75 0 011.392-.557L9.508 9.75h1.742V1.5a.75.75 0 011.5 0v8.25h1.742l2.812-7.029a.747.747 0 01.975-.417.74.74 0 01.41.401.742.742 0 01.007.574L16.108 9.75h2.241l2.777-4.166a.749.749 0 011.36.269.743.743 0 01-.112.563L20.152 9.75H21a.75.75 0 010 1.5h-.838l-1.254 10.029a2.254 2.254 0 01-2.232 1.971H7.324zm-.744-2.157a.751.751 0 00.744.657h9.352a.751.751 0 00.744-.657l1.23-9.843H5.35l1.23 9.843z"}})])
          )
        }
      }
    