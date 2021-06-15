
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
            children.concat([_c('path',{attrs:{"d":"M12.003 21.532a6.163 6.163 0 01-4.267-1.709.753.753 0 01.028-1.112l2.803-2.404-9.773-3.824a1.244 1.244 0 01-.73-1.541A12.083 12.083 0 013.16 5.919a.655.655 0 01.194-.184 12.09 12.09 0 018.649-3.259 12.062 12.062 0 018.658 3.266.704.704 0 01.181.171 12.108 12.108 0 013.103 5.037 1.24 1.24 0 01-.734 1.535l-9.772 3.823 2.802 2.403a.748.748 0 01.028 1.113 6.158 6.158 0 01-4.266 1.708zM9.428 19.26c.76.5 1.659.771 2.575.771s1.814-.271 2.575-.771l-2.575-2.208-2.575 2.208zm2.575-4.001l3.892-1.523a4.187 4.187 0 00-.9-.976.585.585 0 01-.184-.141 4.146 4.146 0 00-1.395-.635.733.733 0 01-.488-.091 4.31 4.31 0 00-.864-.019c-.02.002-.04.002-.061.002s-.041-.001-.062-.003a4.118 4.118 0 00-.864.021.719.719 0 01-.372.099.73.73 0 01-.114-.009 4.158 4.158 0 00-1.397.636.605.605 0 01-.181.139 4.161 4.161 0 00-.902.977l3.892 1.523zm-5.311-2.078a5.69 5.69 0 01.892-1.156L3.729 7.488a10.614 10.614 0 00-2.164 3.687l5.127 2.006zm9.729-1.157c.347.346.646.733.893 1.156l5.126-2.006a10.642 10.642 0 00-2.164-3.687l-3.855 4.537zm-7.643-.911c.317-.182.649-.331.994-.448L8.129 4.563a10.758 10.758 0 00-3.317 1.883l3.966 4.667zm5.455-.448c.345.117.677.267.994.448l3.967-4.669a10.763 10.763 0 00-3.318-1.883l-1.643 6.104zm-2.608-.303c.125 0 .251.004.378.013a5.267 5.267 0 01.755 0l1.67-6.205a10.531 10.531 0 00-2.399-.194h-.052a10.545 10.545 0 00-2.4.193l1.671 6.206c.127-.009.253-.013.377-.013z"}})])
          )
        }
      }
    