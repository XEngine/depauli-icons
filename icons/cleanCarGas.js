
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
            children.concat([_c('path',{attrs:{"d":"M12.823 24.016a.749.749 0 01-.693-1.034c.369-.902.794-1.715 1.264-2.421-.778-1.124-1.094-2.251-.916-3.274.187-1.073.901-1.988 2.065-2.646a9.941 9.941 0 014.579-1.122 9.9 9.9 0 014.389 1.029.749.749 0 01.257 1.132c-.407.523-.694 1.477-.998 2.486-.681 2.261-1.613 5.356-4.925 5.659-.1.009-.197.013-.292.013-1.548 0-2.638-1.12-3.227-1.935a12.81 12.81 0 00-.808 1.647.75.75 0 01-.695.466zm2.433-3.434c.254.441 1.112 1.756 2.302 1.756.049 0 .099-.002.15-.007 2.305-.21 2.946-2.341 3.625-4.596.237-.785.462-1.535.766-2.17a8.396 8.396 0 00-6.841.395c-.752.425-1.194.96-1.303 1.584-.09.517.056 1.12.424 1.765 1.485-1.588 2.819-1.797 2.976-1.817a.75.75 0 01.189 1.487c.001 0-.551.095-1.291.65a6.27 6.27 0 00-.997.953zM9.073 7.517a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-6zm5.25-1.5v-1.5h-4.5v1.5h4.5z"}}),_c('path',{attrs:{"d":"M7.573 21.017a2.252 2.252 0 01-2.25-2.25v-3.06c-1.912-.316-3-1.913-3-4.44V4.488a.746.746 0 00-.253-.562L.427 2.904a.742.742 0 01-.334-.467.74.74 0 01.093-.566.745.745 0 011.033-.241l1.687 1.049a.931.931 0 01.072.051c.537.43.845 1.07.844 1.758v6.779c0 2.098.768 2.717 1.5 2.91V2.267a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v9a.75.75 0 01-1.5 0v-.75h-10.5v8.25c0 .414.336.75.75.75h3a.75.75 0 010 1.5H7.573zm9.75-12v-6.75a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v6.75h10.5z"}})])
          )
        }
      }
    