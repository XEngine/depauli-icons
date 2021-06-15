
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
            children.concat([_c('path',{attrs:{"d":"M13.658 24a3.738 3.738 0 01-2.078-.625L7.5 20.653v1.097C7.5 22.99 6.491 24 5.25 24S3 22.99 3 21.75V2.25c0-.224.099-.435.272-.578A7.33 7.33 0 018.25 0a7.334 7.334 0 014.978 1.673.753.753 0 01.271.625l-.631 10.092a2.256 2.256 0 001.168 2.115l4.229 2.307A5.25 5.25 0 0121 21.421 2.582 2.582 0 0118.421 24h-4.763zm-1.248-1.874c.369.245.798.374 1.241.374h4.769a1.08 1.08 0 001.079-1.079 3.75 3.75 0 00-1.954-3.292l-4.228-2.306a3.76 3.76 0 01-1.947-3.526l.606-9.698A5.748 5.748 0 009 1.513V12.75a.75.75 0 01-1.5 0V1.513a5.745 5.745 0 00-3 1.102v14.232l7.91 5.279zM4.5 21.75a.75.75 0 001.5 0v-2.097l-1.5-1.001v3.098z"}})])
          )
        }
      }
    