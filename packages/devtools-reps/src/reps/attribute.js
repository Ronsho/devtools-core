/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// ReactJS
const React = require("react");

// Reps
const {
  getGripType,
  isGrip,
  wrapRender,
} = require("./rep-utils");
const {rep: StringRep} = require("./string");

// Shortcuts
const { span } = React.DOM;

/**
 * Renders DOM attribute
 */
Attribute.propTypes = {
  object: React.PropTypes.object.isRequired,
};

function Attribute(props) {
  let {
    object,
  } = props;
  let value = object.preview.value;

  return (
    span({
      "data-link-actor-id": object.actor,
      className: "objectLink-Attr"
    },
      span({className: "attrTitle"},
        getTitle(object)
      ),
      span({className: "attrEqual"},
        "="
      ),
      StringRep({object: value})
    )
  );
}

function getTitle(grip) {
  return grip.preview.nodeName;
}

// Registration
function supportsObject(grip, noGrip = false) {
  if (noGrip === true || !isGrip(grip)) {
    return false;
  }

  return (getGripType(grip, noGrip) == "Attr" && grip.preview);
}

module.exports = {
  rep: wrapRender(Attribute),
  supportsObject,
};
