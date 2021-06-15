
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
            children.concat([_c('path',{attrs:{"d":"M14.453 24c-.631-.002-.873-.417-.933-.544-.06-.128-.221-.581.18-1.063l1.696-2.064L3.671 8.603l-2.066 1.699a1.032 1.032 0 01-.675.265.901.901 0 01-.379-.082C.422 10.426.002 10.184 0 9.55V1.239C-.001.91.127.599.361.365A1.23 1.23 0 011.235 0h8.342c.63 0 .873.415.932.542.06.128.221.581-.184 1.064l-1.727 2.05 11.78 11.715 2.014-1.696c.264-.222.517-.268.683-.268.167 0 .3.045.381.083.129.06.544.302.544.933v8.34c-.001.332-.13.643-.364.876a1.232 1.232 0 01-.874.361h-8.309zm8.047-1.5v-6.954l-1.717 1.446a.75.75 0 01-1.164-.261L7.052 4.234a.44.44 0 01-.042-.051.7.7 0 01-.111-.175c-.009-.019-.014-.034-.02-.05a.728.728 0 01-.046-.236v-.036a.744.744 0 01.175-.469L8.454 1.5H1.5v6.946l1.744-1.434a.758.758 0 01.457-.169h.035a.767.767 0 01.247.047l.035.014c.071.03.137.072.196.124l.036.034 12.688 12.687a.756.756 0 01.156.231l.012.03a.747.747 0 01.05.251v.042a.737.737 0 01-.169.451l-1.432 1.743 6.945.003z"}})])
          )
        }
      }
    