
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
            children.concat([_c('path',{attrs:{"d":"M12.302 24a.75.75 0 01-.75-.75v-6.151c-.468.1-.97.151-1.5.151-.252 0-.5-.007-.75-.021V22.5h.75a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75v-6.196c-3.475-.651-4.989-2.853-5.921-4.718a.751.751 0 01.67-1.085c.286 0 .543.159.671.415 1.226 2.452 2.856 4.085 6.829 4.085 1.43 0 2.497-.438 3.17-1.301.746-.955.925-2.291.933-3.312-1.324-.791-2.721-1.208-4.052-1.208-1.063 0-2.064.265-2.817.745-.32.205-.507.395-.605.533a4.31 4.31 0 001.385.84c.187.07.336.209.419.392.083.182.09.386.02.573a.753.753 0 01-.966.439 5.899 5.899 0 01-2.144-1.402.755.755 0 01-.182-.193A5.85 5.85 0 014.1 10.013.752.752 0 014.802 9c.311 0 .593.196.703.487.065.174.144.347.237.518.205-.213.454-.414.737-.595.989-.631 2.279-.979 3.63-.979 1.308 0 2.619.312 3.904.928a11.184 11.184 0 00-.19-.927c-.808-3.229-.654-5.873.423-7.252C14.859.397 15.718 0 16.802 0c1.996 0 3.902.953 5.1 2.55a.747.747 0 01-.131 1.035c-.107.085-2.641 2.088-5.356 2.088a5.021 5.021 0 01-1.577-.246c.058.811.207 1.697.443 2.641.275 1.099 1.024 4.873-.875 7.304a4.54 4.54 0 01-1.353 1.161V22.5h.75a.75.75 0 11-.001 1.5h-1.5zm2.585-20.171c.452.226.963.341 1.519.341 1.475 0 2.957-.785 3.778-1.305A4.879 4.879 0 0016.802 1.5c-.615 0-1.051.192-1.372.603-.296.38-.493.967-.576 1.711a.24.24 0 01.033.015z"}})])
          )
        }
      }
    