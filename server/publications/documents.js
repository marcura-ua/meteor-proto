Meteor.publish("documents", function(query) {
    check(query, String);

    if (_.isEmpty(query))
        return this.ready();

    return Documents.search(query);
});
