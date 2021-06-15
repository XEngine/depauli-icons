
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
            children.concat([_c('path',{attrs:{"d":"M8.331 24.003a2.112 2.112 0 01-1.976-1.639l-2.399-8.716a5.759 5.759 0 01.705-4.647l1.28-1.939a4.243 4.243 0 00.313-3.999l-.885-2.01A.748.748 0 016.055 0h11.888c.255 0 .49.127.628.341a.744.744 0 01.058.711l-.886 2.012a4.252 4.252 0 00.319 4.006l1.27 1.927a5.761 5.761 0 01.709 4.655l-2.405 8.739a2.099 2.099 0 01-1.96 1.611h-7.33l-.015.001zm-.521-2.001c.067.296.294.491.569.502h7.268a.596.596 0 00.532-.468l2.142-7.786H5.677l2.133 7.752zm10.887-9.252a4.274 4.274 0 00-.621-2.934l-1.271-1.928a5.754 5.754 0 01-.434-5.426l.422-.962H7.205l.423.96a5.75 5.75 0 01-.429 5.42l-1.28 1.94a4.262 4.262 0 00-.616 2.93h13.394z"}})])
          )
        }
      }
    