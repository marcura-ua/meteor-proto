Documents = new Mongo.Collection('documents');
Audit = new Mongo.Collection('audit');

Documents.helpers({

});

Documents.search = function(query) {
    return Documents.find({
        name1: { $regex: RegExp.escape(query), $options: 'i' }
    }, {
        limit: 20
    });
};

Audit.allow({
    insert: function (userId, doc) {
        return true;
    }
});
