
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998a.743.743 0 01-.53-.22.744.744 0 010-1.06l3.22-3.22H5.25A5.256 5.256 0 010 14.248v-9a5.256 5.256 0 015.25-5.25h13.5A5.256 5.256 0 0124 5.248V7.5a.75.75 0 01-1.5 0V5.248a3.754 3.754 0 00-3.75-3.75H5.25a3.754 3.754 0 00-3.75 3.75v9a3.754 3.754 0 003.75 3.75h9.439l-3.22-3.22a.744.744 0 010-1.06.744.744 0 011.06 0l4.5 4.5a.74.74 0 01.163.245l.01.026a.733.733 0 01.001.517l-.006.016a.748.748 0 01-.167.256l-4.5 4.5a.743.743 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M16.5 23.998a.752.752 0 01-.53-1.281l3.97-3.97-3.97-3.97a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l4.5 4.5a.752.752 0 010 1.061l-4.5 4.5a.74.74 0 01-.53.221z"}})])
          )
        }
      }
    