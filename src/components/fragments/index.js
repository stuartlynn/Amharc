import {
  TextFragmentType,
  TextFragmentDefaults,
} from './TextFragment/TextFragmentConfig.js';

import {
  RangeFragmentType,
  RangeFragmentDefaults,
} from './RangeFragment/RangeFragmentConfig.js';

import {
  AddressFragmentType,
  AddressFragmentDefaults,
} from './AddressFragment/AddressFragmentConfig.js';

import {
  NameFragmentType,
  NameFragmentDefaults,
} from './NameFragment/NameFragmentConfig.js';

import {
  OptionFragmentType,
  OptionFragmentDefaults,
} from './OptionFragment/OptionFragmentConfig.js';

import {
  GPSLocationFragmentType,
  GPSLocationFragmentDefaults,
} from './GPSLocationFragment/GPSLocationFragmentConfig.js';

import RangeFragment from './RangeFragment/RangeFragment';
import RangeFragmentBuilder from './RangeFragment/RangeFragmentBuilder';

import TextFragment from './TextFragment/TextFragment';
import TextFragmentBuilder from './TextFragment/TextFragmentBuilder';

import AddressFragment from './AddressFragment/AddressFragment';
import AddressFragmentBuilder from './AddressFragment/AddressFragmentBuilder';

import NameFragment from './NameFragment/NameFragment';
import NameFragmentBuilder from './NameFragment/NameFragmentBuilder';

import OptionFragment from './OptionFragment/OptionFragment';
import OptionFragmentBuilder from './OptionFragment/OptionFragmentBuilder';

import GPSLocationFragment from './GPSLocationFragment/GPSLocationFragment';
import GPSLocationFragmentBuilder from './GPSLocationFragment/GPSLocationFragmentBuilder';

export default {
  [TextFragmentType]: {
    type: TextFragmentType,
    builder: TextFragmentBuilder,
    runner: TextFragment,
    defaults: TextFragmentDefaults,
  },
  [NameFragmentType]: {
    type: NameFragmentType,
    builder: NameFragmentBuilder,
    runner: NameFragment,
    defaults: NameFragmentDefaults,
  },
  [RangeFragmentType]: {
    type: RangeFragmentType,
    builder: RangeFragmentBuilder,
    runner: RangeFragment,
    defaults: RangeFragmentDefaults,
  },
  [AddressFragmentType]: {
    type: AddressFragmentType,
    builder: AddressFragmentBuilder,
    runner: AddressFragment,
    defaults: AddressFragmentDefaults,
  },

  [OptionFragmentType]: {
    type: OptionFragmentType,
    builder: OptionFragmentBuilder,
    runner: OptionFragment,
    defaults: OptionFragmentDefaults,
  },

  [GPSLocationFragmentType]: {
    type: GPSLocationFragmentType,
    builder: GPSLocationFragmentBuilder,
    runner: GPSLocationFragment,
    defaults: GPSLocationFragmentDefaults,
  },
};
