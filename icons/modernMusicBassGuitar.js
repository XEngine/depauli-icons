
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
            children.concat([_c('path',{attrs:{"d":"M11.624 23.999a1.83 1.83 0 01-.689-.134L6.729 22.09l-4.182 1.77a1.85 1.85 0 01-2.371-2.499l3.978-9.518a2.246 2.246 0 011.845-1.369V6.76l-.747.004a.749.749 0 01-.753-.75V4.458l-.745.005a.75.75 0 01-.01-1.5l.755-.005v-.745c0-.285.165-.549.421-.674l3-1.463a.749.749 0 011.079.671l.008 2.208.622-.002c.415 0 .751.335.753.747a.747.747 0 01-.748.753l-.622.002.006 1.542a.752.752 0 01-.747.753l-.772.003v3.725c.8.094 1.493.609 1.81 1.365l4 9.547a1.818 1.818 0 01-.122 1.751 1.842 1.842 0 01-1.563.858zm-4.895-3.472a.75.75 0 01.292.059l4.485 1.893a.354.354 0 00.414-.142.347.347 0 00.019-.336l-4.014-9.579a.75.75 0 00-.426-.412v3.702a.75.75 0 01-1.5 0v-3.714a.747.747 0 00-.461.424l-3.991 9.546a.375.375 0 00-.025.297.35.35 0 00.457.207l4.458-1.886a.75.75 0 01.292-.059zM5.999 5.26l.645-.003a.896.896 0 01.105-.007c.032 0 .064.002.095.007l.671-.003-.005-1.421a.728.728 0 01-.001-.245l-.006-1.64-1.504.734V5.26z"}}),_c('path',{attrs:{"d":"M14.436 23.986a.751.751 0 01.001-1.5l6.86.014c.32-.002.623-.13.851-.36s.353-.536.351-.86V11.25H11.232a.75.75 0 010-1.5h11.267v-.288c0-.324-.127-.628-.356-.857a1.205 1.205 0 00-.857-.355l-10.053.016a.75.75 0 01-.002-1.5l1.52-.002-.002-.761a.75.75 0 011.5-.004l.002.763 1.496-.002-.002-.757a.749.749 0 111.5-.004l.002.758 1.5-.002-.002-.752a.749.749 0 111.5-.004l.002.753 1.034-.002a2.7 2.7 0 011.921.793 2.7 2.7 0 01.797 1.919v11.812a2.691 2.691 0 01-.784 1.92c-.51.516-1.19.802-1.915.806h-.003l-6.861-.014z"}}),_c('path',{attrs:{"d":"M16.399 20.239a3.743 3.743 0 01-1.711-.412.752.752 0 01.341-1.418c.118 0 .235.028.341.082a2.231 2.231 0 001.029.248 2.27 2.27 0 002.199-1.761 2.237 2.237 0 00-.296-1.7 2.234 2.234 0 00-1.41-.994 2.238 2.238 0 00-1.701.295 2.234 2.234 0 00-.993 1.411.747.747 0 01-.732.586.746.746 0 01-.731-.915 3.73 3.73 0 011.655-2.35 3.74 3.74 0 012.831-.492c.979.22 1.813.807 2.35 1.655s.711 1.853.492 2.832a3.78 3.78 0 01-3.664 2.933z"}})])
          )
        }
      }
    