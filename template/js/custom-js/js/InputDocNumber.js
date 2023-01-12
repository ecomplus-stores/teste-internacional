import { i19docNumber } from '@ecomplus/i18n'
import { $ecomConfig, i18n } from '@ecomplus/utils'

import CleaveInput from 'vue-cleave-component'

const countryCode = 'AL'

export default {
  name: 'InputDocNumber',

  components: {
    CleaveInput
  },

  props: {
    value: {
      type: [String, Number],
      required: true
    },
    isCompany: Boolean
  },

  computed: {
    placeholder () {
      return 'Document Number'
    },

    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value || '')
      }
    },

    cleaveOptions () {
      return countryCode === 'BR'
        ? this.isCompany
          ? { blocks: [2, 3, 3, 4, 2], delimiters: ['.', '.', '/', '-'] }
          : { blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'] }
        : { blocks: [30] }
    }
  }
}
