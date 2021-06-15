
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24.003a.75.75 0 010-1.5h3v-3h-7.5A3.754 3.754 0 010 15.753v-12A3.754 3.754 0 013.75.003h16.5A3.754 3.754 0 0124 3.753v12a3.754 3.754 0 01-3.75 3.75h-7.5v3h3a.75.75 0 010 1.5h-7.5zm-6.75-8.25a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25h-21zm21-1.5v-10.5a2.252 2.252 0 00-2.25-2.25H3.75a2.252 2.252 0 00-2.25 2.25v10.5h21z"}}),_c('path',{attrs:{"d":"M8.125 12.75A2.129 2.129 0 016 10.63V5.128a2.13 2.13 0 012.125-2.125h5.5a2.13 2.13 0 012.116 1.93l1.226-.5a.746.746 0 01.702.073.749.749 0 01.331.622v5.5a.747.747 0 01-.751.75.74.74 0 01-.283-.056l-1.226-.499a2.13 2.13 0 01-2.116 1.927H8.125zm0-8.247a.627.627 0 00-.625.626v5.499a.625.625 0 00.625.622h5.5c.344 0 .624-.28.625-.624v-.914a.747.747 0 01.75-.75c.097 0 .193.019.283.056l1.217.495V6.244l-1.217.496a.744.744 0 01-.702-.073.749.749 0 01-.331-.622v-.917a.627.627 0 00-.625-.625h-5.5z"}})])
          )
        }
      }
    