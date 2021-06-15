
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-.443 0-.859-.172-1.171-.485L.485 13.173A1.65 1.65 0 010 12.002c0-.443.172-.859.485-1.172L10.828.487c.313-.313.729-.485 1.172-.485s.859.172 1.172.485l10.343 10.342c.313.312.485.729.485 1.172s-.172.859-.485 1.172L13.172 23.516A1.649 1.649 0 0112 24zm-.001-22.498a.157.157 0 00-.111.046L1.546 11.891a.158.158 0 000 .222l10.343 10.343c.04.04.087.045.111.045s.071-.006.111-.046l10.343-10.343a.158.158 0 000-.222L12.11 1.547a.156.156 0 00-.111-.045z"}}),_c('path',{attrs:{"d":"M12 15.75c-2.19 0-4.076-1.622-4.437-3.75H5.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75c0 1.654 1.346 3 3 3s3-1.346 3-3a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-2.313c-.361 2.129-2.247 3.75-4.437 3.75z"}})])
          )
        }
      }
    