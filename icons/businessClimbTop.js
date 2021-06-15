
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
            children.concat([_c('path',{attrs:{"d":"M.751 23.979a.752.752 0 01-.655-1.115l3.75-6.75a.747.747 0 01.663-.386c.23 0 .452.112.593.3l1.521 2.027 5.494-8.727.039-.056c.162-.211.365-.387.595-.519V.729a.75.75 0 01.75-.75h7.193c.493.002.942.292 1.147.737.208.436.148.949-.156 1.334l-1.028 1.304 1.033 1.307c.303.385.362.899.153 1.342-.202.44-.651.727-1.141.729h-6.45V8.55a2.004 2.004 0 011.133.777l8.502 13.503a.749.749 0 01-.635 1.15H.751zm21.141-1.5l-3.268-5.189-1.69 1.42c-.312.264-.712.41-1.127.41-.47 0-.91-.181-1.239-.51l-.643-.644a.248.248 0 00-.176-.072.249.249 0 00-.177.073l-.641.642a1.74 1.74 0 01-1.239.51c-.415 0-.816-.146-1.129-.412l-1.687-1.418-3.268 5.189h16.284zm-18.055 0l1.929-3.064-1.171-1.561-2.569 4.625h1.811zm7.694-4.919a.25.25 0 00.34-.012l.641-.642c.331-.33.77-.512 1.238-.512s.907.182 1.237.511l.643.644a.248.248 0 00.177.071.25.25 0 00.161-.058l1.85-1.554-3.679-5.843a.499.499 0 00-.471-.168.494.494 0 00-.306.168l-3.679 5.843 1.848 1.552zm8.698-12.328l-.857-1.085a1.281 1.281 0 01-.002-1.584l.855-1.084h-5.974v3.753h5.978z"}})])
          )
        }
      }
    