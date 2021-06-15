
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25c-1.61 0-3.404-.627-4.923-1.72a9.572 9.572 0 01-.559-.433C4.733 19.603 3.75 17.704 3.75 15.75v-2.386A9.806 9.806 0 01.799 9.267a.746.746 0 01-.023-.072A21.817 21.817 0 010 3.762a.75.75 0 011.136-.655c.073.044 1.705 1.023 3.588 2.215C5.981 2.568 8.778.748 11.822.748l.197.003c.048-.002.116-.003.183-.003 3.034 0 5.821 1.82 7.074 4.574 1.883-1.191 3.515-2.171 3.588-2.215A.748.748 0 0124 3.762a21.863 21.863 0 01-.777 5.437.84.84 0 01-.021.066 9.82 9.82 0 01-2.952 4.1v2.386c0 1.953-.983 3.853-2.769 5.348a9.357 9.357 0 01-.572.441c-1.505 1.083-3.299 1.71-4.909 1.71zm-3.75-2.736c1.195.788 2.552 1.236 3.75 1.236s2.555-.449 3.75-1.236v-4.883c-1.163.473-2.31.99-3.416 1.541a.48.48 0 01-.079.031.73.73 0 01-.591-.032 49.073 49.073 0 00-3.415-1.54v4.883zm9-1.275c.973-1.065 1.5-2.281 1.5-3.489v-1.37c-.398.219-.812.41-1.233.571-.092.033-.18.067-.267.1v4.188zm-12-3.489c0 1.208.527 2.424 1.5 3.489v-4.188c-.085-.033-.17-.065-.256-.096a9.862 9.862 0 01-1.244-.575v1.37zM22.43 5.127c-2.095 1.285-6.584 4.088-7.65 5.154-.739.739-1.393 2.968-1.789 4.912a51.564 51.564 0 013.115-1.313.742.742 0 01.263-.099l.154-.059c.157-.06.313-.119.47-.177a8.31 8.31 0 004.792-4.778c.326-1.189.541-2.411.645-3.64zM7.893 13.88c1.064.408 2.108.849 3.115 1.313-.395-1.945-1.05-4.174-1.788-4.912-1.066-1.065-5.555-3.869-7.65-5.154.104 1.229.32 2.451.644 3.64a8.316 8.316 0 004.803 4.782c.149.054.303.113.458.172l.157.06c.092.016.181.05.261.099zM6.004 6.141C8.258 7.6 9.696 8.636 10.28 9.22c.75.75 1.317 2.224 1.72 3.663.403-1.439.969-2.913 1.72-3.663.584-.584 2.022-1.619 4.275-3.079a6.301 6.301 0 00-5.807-3.894l-.168.002-.188-.002a6.328 6.328 0 00-5.828 3.894z"}}),_c('path',{attrs:{"d":"M15.75 12.75c-.2 0-.389-.078-.53-.22a.747.747 0 010-1.06l1.5-1.5a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.5 1.5a.743.743 0 01-.53.22zM8.25 12.75a.743.743 0 01-.53-.22l-1.5-1.5c-.142-.141-.22-.329-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.5 1.5a.747.747 0 01-.53 1.28zM13.5 20.25a.753.753 0 01-.6-.3 1.12 1.12 0 00-.899-.45 1.12 1.12 0 00-.902.449.754.754 0 01-.6.3.746.746 0 01-.599-1.199A2.609 2.609 0 0112.004 18c.57 0 1.113.181 1.571.525.199.15.375.326.524.525a.747.747 0 01-.15 1.05.737.737 0 01-.449.15z"}})])
          )
        }
      }
    