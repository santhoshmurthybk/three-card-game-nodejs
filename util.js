// This function generates a random number which is in between 0 and 1
const getGenerator = () => {
    return Math.random()
}

// This function generates a random integer
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

// This is the function called from the shuffle function in order to get the index to start with the shuffling
const generator = (gen) => {
    return (max) => int({ min: 0, max, gen });
};

module.exports.generator = generator;