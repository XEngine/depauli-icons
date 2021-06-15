
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
            children.concat([_c('path',{attrs:{"d":"M3.483 23.25A3.486 3.486 0 010 19.77V4.234c0-.93.362-1.805 1.019-2.463A3.462 3.462 0 013.482.75H9a.75.75 0 010 1.5H3.483c-.53 0-1.028.207-1.403.581-.374.375-.58.873-.58 1.403v11.517H12V13.5a.75.75 0 011.5 0v6.268a3.486 3.486 0 01-3.482 3.482H3.483zM1.5 19.769c0 1.092.89 1.981 1.982 1.981h6.535A1.984 1.984 0 0012 19.768v-2.517H1.5v2.518z"}}),_c('path',{attrs:{"d":"M6.749 20.626a.721.721 0 01-.137-.013 1.108 1.108 0 01-.983-1.059.223.223 0 01-.004-.052V19.5c0-.046.004-.089.012-.132a1.13 1.13 0 01.974-.979.742.742 0 01.139-.013c.62 0 1.125.505 1.125 1.125a.648.648 0 01-.01.114 1.12 1.12 0 01-1.115 1.011h-.001zM16.5 11.603a.739.739 0 01-.209-.03l-3.749-1.083A.752.752 0 0112 9.77V6.136l-1.5-.466v2.331a.75.75 0 01-1.5 0v-3.35a.71.71 0 01.042-.24.744.744 0 01.092-.185c.004-.008.01-.015.016-.023a.765.765 0 01.125-.13l.032-.025a.722.722 0 01.158-.089l.037-.016 6.749-2.381a.755.755 0 01.5 0l6.75 2.381a.749.749 0 01-.027 1.423L21 6.136V9.77a.754.754 0 01-.542.721l-3.75 1.083a.763.763 0 01-.208.029zm0-1.531l3-.866V6.603l-2.777.864a.726.726 0 01-.447 0L13.5 6.603v2.603l3 .866zm0-4.106l4.369-1.359L16.5 3.065l-4.369 1.541 4.369 1.36z"}})])
          )
        }
      }
    