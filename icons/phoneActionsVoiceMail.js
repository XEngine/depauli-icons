
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
            children.concat([_c('path',{attrs:{"d":"M16.58 23.864c-3.512 0-7.172-1.879-10.878-5.584C-.328 12.252-1.511 6.342 2.28 1.19A2.594 2.594 0 014.363.151c.71.003 1.364.278 1.854.773l3.826 3.827a2.61 2.61 0 010 3.686l-1.969 1.968a4.43 4.43 0 01-3.155 1.305 4.432 4.432 0 01-2.589-.825c.803 2.067 2.289 4.191 4.432 6.334 2.142 2.142 4.266 3.627 6.333 4.43a4.433 4.433 0 01-.823-2.587c0-1.193.464-2.314 1.305-3.155l1.969-1.969a2.587 2.587 0 011.843-.762c.697 0 1.351.271 1.843.762l3.828 3.829a2.612 2.612 0 01-.258 3.927c-1.958 1.441-4.05 2.169-6.222 2.17zm-.79-1.555c.273.026.546.04.814.04 1.842 0 3.625-.624 5.298-1.855a1.107 1.107 0 00.1-1.661L18.17 15c-.208-.208-.486-.323-.782-.323s-.573.115-.782.323l-1.969 1.969a2.965 2.965 0 000 4.189l1.153 1.151zM2.824 9.344a2.942 2.942 0 002.094.866c.792 0 1.536-.307 2.094-.866l1.969-1.969a1.108 1.108 0 000-1.564L5.154 1.982a1.107 1.107 0 00-.786-.331l-.005-.375v.375a1.102 1.102 0 00-.883.438c-1.404 1.908-2.014 3.962-1.811 6.1l1.155 1.155z"}})])
          )
        }
      }
    