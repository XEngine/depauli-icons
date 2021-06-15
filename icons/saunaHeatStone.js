
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
            children.concat([_c('path',{attrs:{"d":"M11.749 24.002c-6.729 0-12-2.908-12-6.62a4.465 4.465 0 011.228-2.964.753.753 0 011.061-.024.748.748 0 01.025 1.059 2.943 2.943 0 00-.814 1.95c0 2.758 4.809 5.098 10.5 5.098 5.692 0 10.5-2.345 10.5-5.12a2.928 2.928 0 00-.814-1.93.752.752 0 01.542-1.268.75.75 0 01.542.232 4.439 4.439 0 011.229 2.945c0 1.854-1.266 3.549-3.565 4.786-2.224 1.197-5.219 1.856-8.434 1.856z"}}),_c('path',{attrs:{"d":"M5.299 15.197a.748.748 0 01-.488-1.319 4.034 4.034 0 001.388-2.623c-.011-.825-.378-1.703-.767-2.632-.434-1.039-.883-2.112-.883-3.248a.68.68 0 01.004-.078A5.528 5.528 0 016.461 1.65a.748.748 0 011.057.081.752.752 0 01-.081 1.058A4.033 4.033 0 006.05 5.412c.01.825.377 1.702.766 2.631.434 1.038.883 2.112.883 3.249a.68.68 0 01-.004.078 5.524 5.524 0 01-1.908 3.646.748.748 0 01-.488.181zM16.55 15.198a.748.748 0 01-.488-1.319 4.034 4.034 0 001.388-2.624c-.011-.825-.378-1.703-.767-2.632-.434-1.038-.883-2.111-.883-3.248 0-.025.001-.049.004-.074a5.528 5.528 0 011.908-3.651.748.748 0 011.057.08.752.752 0 01-.081 1.058A4.036 4.036 0 0017.3 5.412c.011.825.378 1.703.767 2.632.434 1.038.883 2.111.883 3.248a.612.612 0 01-.004.074 5.526 5.526 0 01-1.908 3.651.752.752 0 01-.488.181zM10.726 16.665a.748.748 0 01-.488-1.319 5.18 5.18 0 001.784-3.382c-.011-1.06-.474-2.168-.964-3.34-.532-1.271-1.081-2.585-1.081-3.959a.68.68 0 01.004-.078A6.666 6.666 0 0112.285.184a.748.748 0 011.057.081.75.75 0 01-.081 1.058 5.176 5.176 0 00-1.784 3.38c.011 1.062.474 2.17.965 3.342.532 1.271 1.081 2.584 1.081 3.957a.6.6 0 01-.004.074 6.67 6.67 0 01-2.304 4.409.757.757 0 01-.489.18z"}})])
          )
        }
      }
    