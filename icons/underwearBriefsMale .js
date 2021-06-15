
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
            children.concat([_c('path',{attrs:{"d":"M11.74 20.25a5.253 5.253 0 01-4.013-1.873.723.723 0 01-.1-.121 5.18 5.18 0 01-.63-1.005 5.275 5.275 0 00-4.744-3.001H.75A.75.75 0 010 13.5v-9a.75.75 0 01.75-.75h22.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-1.5a5.274 5.274 0 00-4.745 3 5.232 5.232 0 01-.634 1.012.697.697 0 01-.092.11 5.245 5.245 0 01-4.017 1.878h-.522zM9 17.555a3.766 3.766 0 002.74 1.195h.521A3.754 3.754 0 0015 17.557V8.25H9v9.305zM2.25 12.75c2.065 0 3.982.938 5.25 2.51V8.25h-6v4.5h.75zm14.25 2.51a6.732 6.732 0 015.248-2.51h.752v-4.5h-6v7.01zm6-8.51v-1.5h-21v1.5h21z"}})])
          )
        }
      }
    