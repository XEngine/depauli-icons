
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
            children.concat([_c('path',{attrs:{"d":"M11.974 15.001A6.007 6.007 0 015.977 8.86l.001-.036.002-.07c.016-.435.083-.872.196-1.298-1.804-.27-3.202-1.84-3.202-3.708a3.754 3.754 0 013.75-3.75.6.6 0 01.074.004 3.727 3.727 0 013.634 3.201 5.963 5.963 0 013.084 0c.266-1.776 1.805-3.169 3.64-3.201a.868.868 0 01.072-.004 3.754 3.754 0 013.75 3.75 3.766 3.766 0 01-3.208 3.708c.115.431.181.875.197 1.326v.048l.001.014a6.002 6.002 0 01-5.994 6.157zM7.589 10c.461 2.005 2.283 3.501 4.385 3.501s3.924-1.496 4.385-3.501a4.072 4.072 0 01-1.003.126h-.027a4.503 4.503 0 01-3.354-1.767 4.481 4.481 0 01-3.334 1.767h-.037A4.187 4.187 0 017.589 10zm4.385-3.999c.331 0 .618.212.716.527a3.007 3.007 0 002.699 2.099c.348 0 .706-.08 1.04-.233A4.477 4.477 0 0014.5 5.28l-.039-.025a4.432 4.432 0 00-.308-.187l-.083-.045a4.442 4.442 0 00-2.097-.522 4.44 4.44 0 00-2.1.523l-.079.043c-.1.056-.198.116-.294.179l-.059.038a4.592 4.592 0 00-1.409 1.551l-.019.035a4.477 4.477 0 00-.494 1.524c.336.152.702.232 1.072.232 1.219-.066 2.296-.91 2.667-2.098a.746.746 0 01.716-.527zm5.259-.003a2.25 2.25 0 002.246-2.25 2.259 2.259 0 00-2.197-2.249c-.02.002-.039.002-.058.002a2.252 2.252 0 00-2.25 2.25v.057a4.858 4.858 0 01.318.197l.091.062a6.08 6.08 0 011.791 1.93l.059.001zm-10.566-4.5a2.261 2.261 0 00-2.193 2.25 2.252 2.252 0 002.25 2.25l.057-.001.068-.113c.041-.067.087-.139.135-.21l.043-.063c.092-.133.178-.248.267-.359l.066-.082c.05-.06.101-.118.152-.176l.089-.096a6.02 6.02 0 01.371-.363c.055-.049.11-.098.167-.145l.116-.093a5.96 5.96 0 01.719-.489V3.75a2.252 2.252 0 00-2.25-2.249.544.544 0 01-.057-.003zM21.783 24.001a.756.756 0 01-.701-.482 9.67 9.67 0 00-4.621-5.174 4.506 4.506 0 01-4.487 4.156 4.506 4.506 0 01-4.487-4.16 9.824 9.824 0 00-4.622 5.178.753.753 0 01-.969.433.752.752 0 01-.433-.968 11.26 11.26 0 016.498-6.498 11.173 11.173 0 013.995-.739c1.347 0 2.674.24 3.945.715a.777.777 0 01.154.057 11.268 11.268 0 016.429 6.465.752.752 0 01-.701 1.017zm-12.809-6c0 1.654 1.346 3 3 3s3-1.346 3-3v-.275a9.722 9.722 0 00-3.01-.478c-1.016 0-2.02.159-2.99.474v.279z"}})])
          )
        }
      }
    