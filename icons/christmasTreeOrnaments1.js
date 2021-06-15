
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24c-2.938 0-5.484-2.185-5.93-5.084a.737.737 0 01-.02-.151A6.123 6.123 0 011.5 18c0-3.03 2.279-5.58 5.25-5.952V7.065l-3.229.646L5.03 9.22c.142.141.22.33.22.53s-.078.389-.22.53c-.141.142-.33.22-.53.22s-.389-.078-.53-.22L1.754 8.064l-.857.172a.752.752 0 01-.771-1.152.743.743 0 01.477-.319l3.425-.685 2.079-3.466a.755.755 0 011.029-.257.75.75 0 01.257 1.029L6.016 5.682l4.645-.929 1.419-2.839a.746.746 0 011.005-.335.75.75 0 01.336 1.006l-.897 1.795 2.754-.551 2.08-3.466a.755.755 0 011.028-.256.747.747 0 01.258 1.029l-1.378 2.296 1.269-.254a.729.729 0 01.139-.028l1.174-.235 1.288-1.845a.75.75 0 111.229.86l-.392.561 1.13-.226a.752.752 0 01.771 1.151.748.748 0 01-.477.32l-1.312.262.867.653a.75.75 0 01-.903 1.198l-1.934-1.457-.615.123v5.3c2.129.362 3.75 2.247 3.75 4.435 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-2.188 1.621-4.073 3.75-4.435v-5l-2.604.521L17.03 6.97c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.341-2.341-3.804.761 2.368 2.558a.75.75 0 01-1.101 1.019L8.25 6.957v5.092a6.013 6.013 0 015.245 6.177c.004.06.001.12-.01.181A6.01 6.01 0 017.5 24zm-4.314-4.73A4.53 4.53 0 007.5 22.5a4.53 4.53 0 004.24-3.002c-.928-.02-1.414-.627-1.738-1.031-.319-.398-.411-.469-.609-.469s-.289.07-.606.467c-.328.411-.825 1.033-1.783 1.033s-1.456-.622-1.784-1.033c-.313-.392-.41-.467-.605-.467-.191 0-.276.068-.57.454-.198.26-.454.598-.859.818zm6.207-2.772c.954 0 1.451.62 1.78 1.03.32.399.412.47.613.47.074 0 .147-.02.214-.055A4.506 4.506 0 007.5 13.5a4.508 4.508 0 00-4.443 3.782c.316-.376.778-.784 1.558-.784.953 0 1.448.62 1.776 1.03.319.4.411.47.613.47.201 0 .293-.07.611-.469.328-.41.823-1.031 1.778-1.031zM15.846 15c.335 1.308 1.517 2.25 2.904 2.25s2.569-.942 2.904-2.25h-5.808zm5.808-1.5c-.335-1.308-1.517-2.25-2.904-2.25s-2.569.942-2.904 2.25h5.808z"}})])
          )
        }
      }
    