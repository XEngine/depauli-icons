
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
            children.concat([_c('path',{attrs:{"d":"M18.362 23.995a.75.75 0 01-.579-.273 7.516 7.516 0 00-1.009-1.009 7.395 7.395 0 00-4.761-1.718c-.241 0-.487.012-.728.035a7.449 7.449 0 00-5.071 2.692.748.748 0 01-1.056.101.751.751 0 01-.101-1.056 8.99 8.99 0 012.083-1.85 10.653 10.653 0 01-2.641-6.645 9.29 9.29 0 01.419-2.852l-.681.151c-.16.036-.325.054-.489.054a2.265 2.265 0 01-2.196-1.761 2.368 2.368 0 01-.052-.489V6.151l-.081-.184C1.172 5.401.65 4.209.186 3.139A2.253 2.253 0 012.251-.005h3.75l.053.002A4.38 4.38 0 018.61 1.063 5.933 5.933 0 0112-.008a5.93 5.93 0 013.39 1.071 4.382 4.382 0 012.556-1.065l.055-.002h3.75c.601 0 1.166.233 1.591.657a2.25 2.25 0 01.473 2.494 826.922 826.922 0 01-1.203 2.751l-.112.254v3.223a2.253 2.253 0 01-2.737 2.197l-.683-.152c.285.92.429 1.887.42 2.832a10.674 10.674 0 01-2.644 6.669 9.057 9.057 0 012.084 1.846.747.747 0 01-.101 1.056.746.746 0 01-.477.172zm-5.612-4.468a8.86 8.86 0 012.733.669A9.132 9.132 0 0018 14.217a7.786 7.786 0 00-.663-3.185l-1.589-.353c-.456.365-.959.66-1.499.878v4.187a.756.756 0 01-.355.638.76.76 0 01-.73.033L12 15.833l-1.165.583a.76.76 0 01-.73-.033.745.745 0 01-.356-.638v-4.186a6.031 6.031 0 01-1.5-.879l-1.588.353A7.84 7.84 0 006 14.238a9.11 9.11 0 002.516 5.957 9.012 9.012 0 012.626-.658l.107-.01v-1.533a.75.75 0 011.5 0v1.533zM12 14.245c.116 0 .232.027.335.079l.415.207V9.745a.75.75 0 011.5 0v.148a4.51 4.51 0 001.818-1.969.754.754 0 01.999-.355.75.75 0 01.355.999 5.94 5.94 0 01-.486.839l3.151.7a.75.75 0 00.912-.732v-3.38c0-.102.02-.202.061-.295l.178-.406c.259-.589.757-1.726 1.202-2.748a.75.75 0 00-.687-1.051H18.03a2.894 2.894 0 00-1.995 1.049.756.756 0 01-.523.274l-.058.002a.74.74 0 01-.501-.193 4.405 4.405 0 00-5.905 0 .753.753 0 01-.503.193l-.056-.002a.756.756 0 01-.524-.274 2.892 2.892 0 00-1.993-1.049H2.251a.748.748 0 00-.689 1.048c.463 1.067.984 2.258 1.231 2.822l.145.331A.756.756 0 013 5.995v3.38a.755.755 0 00.912.732l3.149-.7a6.154 6.154 0 01-.488-.843.753.753 0 01.678-1.072c.288 0 .554.168.678.428A4.506 4.506 0 009.75 9.894v-.149a.75.75 0 011.5 0v4.786l.415-.207a.747.747 0 01.335-.079z"}}),_c('path',{attrs:{"d":"M9.374 6.745a.583.583 0 01-.072-.006 1.126 1.126 0 01-1.039-.989.699.699 0 010-.261c.06-.512.468-.921.98-.982a.72.72 0 01.265 0c.512.061.92.47.98.982a.717.717 0 010 .262c-.061.513-.47.922-.983.982a.701.701 0 01-.131.012zM14.625 6.745a1.12 1.12 0 01-1.114-.995.796.796 0 010-.26c.063-.54.5-.955 1.044-.989a.344.344 0 01.069-.005l.044.002a1.12 1.12 0 011.083 1.12v.003c0 .619-.505 1.124-1.126 1.124z"}})])
          )
        }
      }
    