Template.dashboard.helpers({
    searchResults: function() {
        var documents = Documents.search(Session.get('documentSearchQuery'));
        console.log(Meteor.userId());
        if (documents) Audit.insert({user: Meteor.userId(), 'search-results': documents.fetch()});
        return documents;
    },
    documentSearchQuery: function() {
        return Session.get('documentSearchQuery');
    }
});

Tracker.autorun(function() {
    if (Session.get('documentSearchQuery'))
        Meteor.subscribe('documents', Session.get('documentSearchQuery'));
});