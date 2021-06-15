
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
            children.concat([_c('path',{attrs:{"d":"M11.215 24.009c-5.166 0-8.25-1.682-8.25-4.5 0-1.757 1.232-2.528 2.536-3.344a2.342 2.342 0 001.214-1.937.747.747 0 01.749-.719h3.027c.026-.427.074-.838.144-1.229l-2.031-1.114a.748.748 0 01.361-1.409c.126 0 .251.032.361.093l1.706.936a6.547 6.547 0 011.095-1.938 4.309 4.309 0 01-1.036-2.01 4.319 4.319 0 01.597-3.271L13.427.868c.355-.551 1.018-.855 1.867-.855.958 0 2.111.389 3.164 1.068 1.993 1.286 2.99 3.165 2.331 4.384a.664.664 0 01-.061.115l-1.74 2.699a4.334 4.334 0 01-3.657 1.987 4.316 4.316 0 01-2.015-.5c-.457.538-1.176 1.694-1.322 3.739h2.97a.75.75 0 01.75.719 2.32 2.32 0 001.181 1.918l.035.021c1.302.812 2.534 1.581 2.534 3.343.001 2.821-3.083 4.503-8.249 4.503zm-3.101-9a3.837 3.837 0 01-1.851 2.448c-1.39.87-1.798 1.248-1.798 2.052 0 2.214 3.636 3 6.75 3s6.75-.786 6.75-3c0-.813-.389-1.172-1.823-2.067a3.827 3.827 0 01-1.826-2.433H8.114zm5.62-6.737l.061.044c.46.297.992.454 1.539.454a2.84 2.84 0 002.396-1.301l.685-1.063c-.857-.098-1.823-.466-2.717-1.042-.889-.574-1.623-1.296-2.069-2.036l-.678 1.053a2.83 2.83 0 00-.392 2.143 2.802 2.802 0 001.039 1.647.704.704 0 01.106.078l.03.023zm1.555-6.764c-.36 0-.549.094-.601.175-.075.117-.04.425.211.849.328.555.901 1.113 1.611 1.572.812.524 1.693.836 2.357.836.361 0 .55-.094.602-.175.169-.263-.248-1.404-1.824-2.421-.812-.524-1.693-.836-2.356-.836z"}})])
          )
        }
      }
    