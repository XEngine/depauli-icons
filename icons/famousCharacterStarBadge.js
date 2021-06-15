
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.708.708 0 01-.162-.019 6.93 6.93 0 01-2.208-.646 12.594 12.594 0 01-2.469-1.29.743.743 0 01-.164-.112 12.792 12.792 0 01-5.429-9.172c-.045-.44-.068-.876-.068-1.296V3.943A2.253 2.253 0 012.81 1.89a22.412 22.412 0 019.017-1.891h.309c3.132 0 6.174.634 9.041 1.885A2.259 2.259 0 0122.5 3.946v7.518c0 .421-.023.857-.069 1.297a12.792 12.792 0 01-5.428 9.171.761.761 0 01-.163.112 12.54 12.54 0 01-2.469 1.29 6.877 6.877 0 01-2.209.646A.659.659 0 0112 24zm.75-1.657c.344-.091.675-.215.989-.369a.616.616 0 01.062-.027 11.035 11.035 0 001.95-.983V13.5h-3v8.843zm-4.5-1.379c.62.393 1.275.723 1.949.983a.816.816 0 01.066.029c.311.153.641.276.985.367V13.5h-3v7.464zm9-1.138a11.433 11.433 0 003.559-6.326H17.25v6.326zM3.191 13.5a11.439 11.439 0 003.559 6.326V13.5H3.191zM20.987 12c.009-.18.013-.359.013-.535V3.943a.755.755 0 00-.434-.689 20.917 20.917 0 00-8.402-1.755h-.304a20.97 20.97 0 00-8.436 1.76.742.742 0 00-.424.679v7.526c0 .177.004.356.013.536h17.974z"}}),_c('path',{attrs:{"d":"M9.488 11.248a1.26 1.26 0 01-1.094-.632 1.268 1.268 0 01-.072-1.115L9.019 7.9 7.83 7.073a1.216 1.216 0 01-.479-.897 1.213 1.213 0 01.305-.888c.233-.263.57-.414.924-.414h1.485l.799-1.724a1.278 1.278 0 011.145-.718 1.254 1.254 0 011.128.695l.81 1.746h1.497c.648 0 1.195.53 1.22 1.181a1.222 1.222 0 01-.482 1.02l-1.186.827.693 1.589a1.263 1.263 0 01-1.159 1.756c-.222 0-.44-.058-.63-.168l-1.892-1.064-1.898 1.068a1.248 1.248 0 01-.622.166zm.892-4.226a.753.753 0 01.259.915l-.65 1.492 1.65-.928a.751.751 0 01.736 0l1.649.928-.651-1.492a.75.75 0 01.259-.915l.931-.649h-1.096a.752.752 0 01-.68-.434l-.781-1.686-.781 1.686a.752.752 0 01-.68.435H9.45l.93.648z"}})])
          )
        }
      }
    