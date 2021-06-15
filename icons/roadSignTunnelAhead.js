
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
            children.concat([_c('path',{attrs:{"d":"M12.001 23.999c-.443 0-.859-.172-1.172-.485L.487 13.172a1.659 1.659 0 010-2.343L10.829.486a1.649 1.649 0 011.172-.484c.443 0 .859.172 1.172.484l10.343 10.343c.313.313.485.729.485 1.172 0 .443-.172.859-.485 1.172L13.173 23.515a1.649 1.649 0 01-1.172.484zm0-22.499a.157.157 0 00-.111.046L1.547 11.889a.158.158 0 000 .222L11.89 22.454a.157.157 0 00.221 0L22.454 12.11c.03-.03.046-.068.046-.111s-.016-.081-.046-.111L12.112 1.546a.157.157 0 00-.111-.046z"}}),_c('path',{attrs:{"d":"M15.751 13.501a.75.75 0 01-.75-.75c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h2.313c.362-2.129 2.248-3.75 4.437-3.75 2.19 0 4.076 1.621 4.437 3.75h2.313a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    