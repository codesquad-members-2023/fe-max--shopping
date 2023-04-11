const isOutsideElement = (target, element) => {
    return !element.contains(target);
};

export { isOutsideElement };

