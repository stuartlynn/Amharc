import {
  TextFragmentType,
  TextFragmentDefaults
} from './TextFragment/TextFragmentConfig.js'

import {
  RangeFragmentType,
  RangeFragmentDefaults
} from './RangeFragment/RangeFragmentConfig.js'

import TextFragmentBuilder from './TextFragment/TextFragmentBuilder'
import RangeFragmentBuilder from './RangeFragment/RangeFragmentBuilder'

import TextFragment from './TextFragment/TextFragment'
import RangeFragment from './RangeFragment/RangeFragment'

export default {
  [TextFragmentType]:{
    type: TextFragmentType,
    builder: TextFragmentBuilder,
    runner: TextFragment,
    defaults: TextFragmentDefaults
  },

  [RangeFragmentType]:{
    type: RangeFragmentType,
    builder: RangeFragmentBuilder,
    runner: RangeFragment,
    defaults: RangeFragmentDefaults
  }

}
