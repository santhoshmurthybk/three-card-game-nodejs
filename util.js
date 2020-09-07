/* istanbul ignore file */

const getGenerator = () => {
    return Math.random()
}

const int = (opts) => {
    var ret;

    opts.min = (opts.min === void (0)) ? 0 : opts.min;
    opts.max = (opts.max === void (0)) ? 32000 : opts.max;

    if (!opts.min && !opts.max) {
        return 0;
    }

    ret = Math.floor(getGenerator(opts.gen) * (opts.max + opts.min)) - opts.min;

    if (ret === (opts.max || 1)) {
        ret--;
    }

    return ret;
};


const generator = (gen) => {
    return (max) => int({ min: 0, max, gen });
};

module.exports.generator = generator;