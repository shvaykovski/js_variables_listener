var state = {};
var listeners = [];

var listener = function(var_name, callback) {
    var var_value = window[var_name];

    if (state[var_name] === 'undefined' || state[var_name] !== var_value) {
        state[var_name] = var_value;
        callback(var_value);
    }
    setTimeout(function() {
        listener(var_name, callback);
    }, 100);
};

var addListener = function(var_name, callback) {
    listeners.push({'name': var_name, 'callback': callback});
};


window.onload = function() {
    listeners.forEach(function(object) {
        listener(object.name, object.callback);
    });
};
