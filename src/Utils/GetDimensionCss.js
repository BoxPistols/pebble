export default (dimension, value) => {
  if (value === undefined) {
    return {
      styles: null,
      classes: [],
    };
  }

  let classes = [];

  let classPrefix = getPrefix(dimension, value);

  const dimensionCss = {
    styles: null,
    classes: [],
  };

  // set to a specific css unit
  if (
    typeof value === 'string' &&
    (value.includes('px') ||
      value.includes('em') ||
      value.includes('rem') ||
      value.includes('%'))
  ) {
    dimensionCss.styles = value;
    // set to a css class
  } else if (typeof value === 'string' || typeof value === 'number') {
    classes.push(`${classPrefix}${value}`);
    // set to responsive css classes
  } else if (Array.isArray(value) && value.length) {
    classes = [];
    classPrefix = getPrefix(dimension, value[0]);
    classes.push(`${classPrefix}${value[0]}`);

    if (value[1] !== undefined) {
      classPrefix = getPrefix(dimension, value[1]);
      classes.push(`${classPrefix}${value[1]}-ns`);
    }

    if (value[2] !== undefined) {
      classPrefix = getPrefix(dimension, value[2]);
      classes.push(`${classPrefix}${value[2]}-m`);
    }

    if (value[3] !== undefined) {
      classPrefix = getPrefix(dimension, value[3]);
      classes.push(`${classPrefix}${value[3]}-l`);
    }
  }
  dimensionCss.classes = classes;

  return dimensionCss;
};

export function getPrefix(dimension, value) {
  let prefix;

  switch (dimension) {
    case 'width':
      prefix = 'w';
      if (value > 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'height':
      prefix = 'h';
      if (value > 9) {
        prefix = `${prefix}-`;
      }
      break;
    case 'maxWidth':
      prefix = value <= 9 ? 'mw' : 'mw-';
      break;
    // fontSize
    default:
      prefix = `${dimension}-`;
  }

  return prefix;
}
