
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
            children.concat([_c('path',{attrs:{"d":"M6.75 21.763a3.016 3.016 0 01-2.902-2.25H3.75a2.252 2.252 0 01-2.25-2.25V5.323l-.808-.062a.75.75 0 01.057-1.498l.058.002L14.25 4.799v-.286c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v.632l1.558.12a.748.748 0 01-.057 1.498l-.057-.002-1.09-.084 1.851 5.079a.767.767 0 01.041.339l-.074.666.096.001c.872 0 1.759.199 2.554.577a.751.751 0 01-.643 1.356 4.35 4.35 0 00-1.852-.434l-.07.001c-.082 0-.165.003-.253.009l-.169 1.523a3.045 3.045 0 01.575-.027c.801.044 1.536.396 2.071.992s.806 1.365.762 2.165a2.983 2.983 0 01-.992 2.07 2.992 2.992 0 01-2.165.763 2.979 2.979 0 01-2.069-.992 2.984 2.984 0 01-.672-1.252H9.651a3.016 3.016 0 01-2.901 2.25zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm12.777 1.786c.051.265.171.509.355.714a1.49 1.49 0 001.12.498c.373 0 .718-.133.998-.383.298-.268.474-.635.496-1.034.022-.4-.114-.784-.381-1.082a1.493 1.493 0 00-1.035-.496c-.028-.002-.054-.002-.08-.002-.199 0-.401.044-.591.127l-.013.12a2.234 2.234 0 01-.869 1.538zm-1.367-1.036a.748.748 0 00.744-.667l.055-.5a.44.44 0 01.007-.057l.519-4.684-2.024-5.554-2.445-.188H15a.812.812 0 01-.129-.011L10.5 6.015v7.298l2.685 4.699H15v-1.5a.75.75 0 00-.75-.75h-.75a.751.751 0 01-.735-.603l-.75-3.75a.747.747 0 01.588-.883.751.751 0 01.882.588l.629 3.147h.135a2.252 2.252 0 012.25 2.25v1.5h1.661zm-6.703 0l-2.143-3.75H3v3c0 .414.336.75.75.75h.098c.338-1.303 1.532-2.25 2.902-2.25s2.564.947 2.902 2.25h1.805zM9 12.763V5.9l-6-.462v7.325h6zm8.25-7.733v-.517a.75.75 0 00-1.5 0v.402l1.5.115z"}})])
          )
        }
      }
    