/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { VTTRegion_base } from "./vttregion";

const base = window.VTTRegion || VTTRegion_base;

// Extend VTTRegion with methods to convert to JSON, from JSON, and construct a
// VTTRegion from an options object. The primary purpose of this is for use in the
// vtt.js test suite. It's also useful if you need to work with VTTRegions in
// JSON format.

  base.create = function(options) {
    var region = new root.VTTRegion();
    for (var key in options) {
      if (region.hasOwnProperty(key)) {
        region[key] = options[key];
      }
    }
    return region;
  };

  base.fromJSON = function(json) {
    return this.create(JSON.parse(json));
  };

export { base as VTTRegion };